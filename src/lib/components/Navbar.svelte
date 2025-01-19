<script lang="ts">
	import { page } from '$app/state';
	type NavItem = {
		route: string;
		text: string;
		children?: NavItem[];
	};
	const navItems: NavItem[] = [
		{
			route: '/about',
			text: 'About Me',
		},
		{
			route: '/work',
			text: 'My Work',
		},
		{
			route: '/todo',
			text: 'Todo App',
		},
	];
</script>

<nav class="navbar justify-between">
	<div class="flex w-full flex-row justify-between p-3">
		<div>
			{#each navItems as item}
				<a href={item.route} class="mx-3 {item.route == page.url.pathname ? 'active' : ''}">
					{item.text}
				</a>
			{/each}
		</div>
	</div>
</nav>

<style lang="postcss">
	.active {
		@apply font-extrabold text-blue-900 dark:text-red-200;
	}
</style>
