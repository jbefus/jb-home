<script lang="ts">
	import { fly } from 'svelte/transition';
	const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT || 'local';
</script>

<div class="flex w-full flex-row justify-around">
	<div in:fly={{ y: 200, duration: 2000 }} class="mx-5 max-w-screen-md">
		<h2 class="my-3 text-xl font-bold">Welcome, friend</h2>
		<p class="">
			Welcome to my page. I don't know how you found this place, and to be honest, it doesn't
			matter. Feel like home, grab a tea, and get to know me.
		</p>
		<br />
		<p>
			You can look at what I can offer and if it might benefit you. You can check out my tools, or
			just stroll around and look at what else the site has to offer.
		</p>
	</div>
</div>
<div class="absolute bottom-0 p-1">
	this site is currently under construction. You're viewing a <strong>{ENVIRONMENT}</strong>
	build
</div>
