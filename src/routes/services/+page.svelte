<script lang="ts">
	let { data } = $props();
	console.log('data', data);
</script>

<h1>Services</h1>

<ul>
	{#each data.services as service}
		<li>{service.service_name}</li>
	{/each}
</ul>
