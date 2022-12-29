import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	sveltekit: {
		adapter: adapter(),
	},
	plugins: [sveltekit()],
};

export default config;
