<script lang="ts">
	let { data } = $props();
</script>

<h1>Services</h1>

<ul>
	{#each data.services as service}
		<li>{service.service_name}</li>
	{/each}
</ul>
