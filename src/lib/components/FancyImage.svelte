<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	export let imgSrc: string;

	let canvasContainer: HTMLDivElement;

	let isDragging = false;
	let previousMousePosition = { x: 0, y: 0 };
	let velocity = { x: 0.3, y: 0.4 }; // Velocity for the throw effect

	onMount(() => {
		// Scene setup
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			canvasContainer.clientWidth / canvasContainer.clientHeight,
			0.1,
			1000
		);

		// Renderer with transparent background
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
		renderer.setClearColor(0xffffff, 0); // Transparent canvas with a white fallback
		canvasContainer.appendChild(renderer.domElement);

		// Texture loader
		const textureLoader = new THREE.TextureLoader();
		const imageTexture = textureLoader.load(imgSrc);

		// Ensure texture allows transparency
		imageTexture.magFilter = THREE.LinearFilter;
		imageTexture.minFilter = THREE.LinearMipMapLinearFilter;

		// Cube materials
		const materials = [
			new THREE.MeshStandardMaterial({ map: imageTexture, transparent: true }), // Right
			new THREE.MeshStandardMaterial({ map: imageTexture, transparent: true }), // Left
			new THREE.MeshStandardMaterial({ map: imageTexture, transparent: true }), // Front
			new THREE.MeshStandardMaterial({ map: imageTexture, transparent: true }), // Front
			new THREE.MeshStandardMaterial({ map: imageTexture, transparent: true }), // Front
			new THREE.MeshStandardMaterial({ map: imageTexture, transparent: true }) // Back
		];

		// Cube geometry
		const geometry = new THREE.BoxGeometry(3, 3, 3);
		const cube = new THREE.Mesh(geometry, materials);
		scene.add(cube);

		// Lighting
		const light = new THREE.DirectionalLight(0xffeadd, 3);
		light.position.set(0, 5, 5).normalize();
		scene.add(light);

		const ambientLight = new THREE.AmbientLight(0x404040, 0.8); // Soft light
		scene.add(ambientLight);

		// Camera position
		camera.position.z = 8;

		// Animation loop
		let animationFrame: number;

		function animate() {
			if (!isDragging) {
				// Apply velocity for "throwing" the cube
				cube.rotation.y += velocity.x;
				cube.rotation.x += velocity.y;

				// Dampen velocity over time
				velocity.x *= 0.95;
				velocity.y *= 0.95;
			}

			renderer.render(scene, camera);
			animationFrame = requestAnimationFrame(animate);
		}
		animate();

		// Mouse event handlers for drag
		const onMouseDown = (event: MouseEvent) => {
			isDragging = true;
			previousMousePosition = { x: event.clientX, y: event.clientY };
		};

		const onMouseMove = (event: MouseEvent) => {
			if (isDragging) {
				const deltaX = event.clientX - previousMousePosition.x;
				const deltaY = event.clientY - previousMousePosition.y;

				// Update cube rotation based on mouse movement
				cube.rotation.y += deltaX * 0.01;
				cube.rotation.x += deltaY * 0.01;

				// Update velocity for throwing
				velocity.x = deltaX * 0.002;
				velocity.y = deltaY * 0.002;

				previousMousePosition = { x: event.clientX, y: event.clientY };
			}
		};

		const onMouseUp = () => {
			isDragging = false;
		};

		// Resize handling
		window.addEventListener('resize', () => {
			const width = canvasContainer.clientWidth;
			const height = canvasContainer.clientHeight;
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		});

		// Add event listeners for dragging
		canvasContainer.addEventListener('mousedown', onMouseDown);
		canvasContainer.addEventListener('mousemove', onMouseMove);
		canvasContainer.addEventListener('mouseup', onMouseUp);
		canvasContainer.addEventListener('mouseleave', onMouseUp);

		// Cleanup on unmount
		return () => {
			cancelAnimationFrame(animationFrame);
			renderer.dispose();
			canvasContainer.removeEventListener('mousedown', onMouseDown);
			canvasContainer.removeEventListener('mousemove', onMouseMove);
			canvasContainer.removeEventListener('mouseup', onMouseUp);
			canvasContainer.removeEventListener('mouseleave', onMouseUp);
		};
	});
</script>

<div id="canvas-container" bind:this={canvasContainer}></div>

<style>
	#canvas-container {
		width: 100%;
		height: 100vh;
		cursor: grab;
		position: relative;
	}

	#canvas-container:active {
		cursor: grabbing;
	}
</style>
