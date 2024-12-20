<script>
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<nav class="navbar justify-between">
	<div>
		<a href="/" class="logo">jbefus.de</a>
		<a href="/about"> Who am I? </a>
		<a href="/work"> My Work? </a>
	</div>
	<div>
		<ThemeToggle />
	</div>
</nav>

<style>
	.navbar {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.5rem 1rem;
		border-bottom: 1px solid #ccc;
	}

	.logo {
		font-weight: bold;
		text-decoration: none;
	}

	a {
		text-decoration: none;
		font-weight: 500;
	}

	a:hover {
	}
</style>
