<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import { theme } from '$stores/ui-store';
	import Navbar from '$lib/components/Navbar.svelte';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div
		class="{$theme}
    app-root h-screen w-full
    transition-colors duration-200 ease-in-out
    dark:bg-zinc-900 dark:text-amber-100">
		<Navbar />
		{@render children()}
	</div>
</ParaglideJS>

<style lang="postcss"></style>
