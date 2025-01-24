<script lang="ts">
	import PageFrame from '$lib/components/PageFrame.svelte';

	let { data } = $props();
</script>

<PageFrame>
	<h1>Services</h1>

	<ul>
		{#each data.services as service}
			<li>{service.service_name}</li>
		{/each}
	</ul>
</PageFrame>
