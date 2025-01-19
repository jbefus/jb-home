import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
	theme: {
		extend: {},
	},

	plugins: [typography, containerQueries],
} satisfies Config;
