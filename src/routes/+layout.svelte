<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { theme } from '$stores/ui-store';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div
		class="{$theme}
    app-root h-screen w-full
    transition-colors duration-200 ease-in-out
    dark:bg-zinc-900 dark:text-amber-100"
	>
		<Navbar />
		{@render children()}
	</div>
</ParaglideJS>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');

	.app-root {
		font-family: 'Nunito Sans', serif;
		font-optical-sizing: auto;
		font-weight: 400;
		font-style: normal;
		font-variation-settings:
			'wdth' 100,
			'YTLC' 500;
	}

	.courier-prime-regular {
		font-family: 'Courier Prime', serif;
		font-weight: 400;
		font-style: normal;
	}

	.courier-prime-bold {
		font-family: 'Courier Prime', serif;
		font-weight: 700;
		font-style: normal;
	}

	.courier-prime-regular-italic {
		font-family: 'Courier Prime', serif;
		font-weight: 400;
		font-style: italic;
	}

	.courier-prime-bold-italic {
		font-family: 'Courier Prime', serif;
		font-weight: 700;
		font-style: italic;
	}
</style>
