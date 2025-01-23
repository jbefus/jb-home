<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import imgSrc from '$lib/assets/jurij_lotti_no_bg.png';
	import { page } from '$app/state';
	const activeClass = 'font-extrabold  text-zinc-900  dark:text-amber-100';

	type NavItem = {
		route?: string;
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
			text: 'Tools',
			children: [
				{ text: 'Tomatoes', route: '/tomatoes' },
				{ text: 'Todo', route: '/todo' },
			],
		},
	];
</script>

<Navbar>
	<NavBrand href="/">
		<img src={imgSrc} class="me-3 h-6 sm:h-9" alt="jurij and lotti" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			jbefus.de
		</span>
	</NavBrand>
	<NavHamburger />
	<NavUl activeUrl={page.url.pathname} {activeClass}>
		{#each navItems as item}
			{#if !!item.children?.length}
				<NavLi class="cursor-pointer">
					{item.text}<ChevronDownOutline
						class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
				</NavLi>
				<Dropdown class="z-20 w-44">
					{#each item.children as itemChild}
						<DropdownItem href={itemChild.route}>{itemChild.text}</DropdownItem>
					{/each}
				</Dropdown>
			{:else}
				<NavLi href={item.route}>{item.text}</NavLi>
			{/if}
		{/each}
	</NavUl>
</Navbar>
