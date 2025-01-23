import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import flowbitePlugin from 'flowbite/plugin';
import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
	],
	darkMode: 'media',
	theme: {
		extend: {},
	},

	plugins: [typography, containerQueries, flowbitePlugin],
} satisfies Config;
