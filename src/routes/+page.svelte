<script lang="ts">
	import FancyImage from '$lib/components/FancyImage.svelte';
	import imgSrc from '$lib/assets/jurij_lotti_no_bg.png';
	import { fly } from 'svelte/transition';
	const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT || 'local';
</script>

<div class="flex w-full flex-row justify-around">
	<div class="h-1/2 w-2/3">
		<FancyImage {imgSrc} />
	</div>
	<div in:fly={{ y: 200, duration: 2000 }} class="right w-1/3">
		<h2 class="my-3 text-xl font-bold">Welcome, friend</h2>
		<p class="">
			Welcome to my page. I don't know how you found this place, and to be honest, it doesn't
			matter. Feel like home, grab a tea, and get to know me.
		</p>
		<br />
		<p>
			This is also my home. You can look at what I can offer and if it might benefit you. You can
			check out my tools, or just stroll around and look at what else the site has to offer.
		</p>
	</div>
</div>
<div class="absolute bottom-0 p-1">
	this site is currently under construction. You're viewing a <strong>{ENVIRONMENT}</strong>
	build
</div>
