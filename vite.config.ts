import { sveltekit } from '@sveltejs/kit/vite';
<<<<<<< HEAD
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
=======
import { searchForWorkspaceRoot } from 'vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd()), "/static/productImages/", "/static/blogImages/"],
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;

>>>>>>> master
