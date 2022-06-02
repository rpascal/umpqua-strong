import adapterStatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import Icons from 'unplugin-icons/vite';




/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		adapter: adapterStatic({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: true
		}),
		vite: {
			plugins: [
				Icons({
					compiler: 'svelte',
				}),
			],
		},
		/*
		⚠️ You must ensure SvelteKit's trailingSlash option is set appropriately for your environment. If your host does not render /a.html upon receiving a request for /a then you will need to set trailingSlash: 'always' to create /a/index.html instead.
		*/
		trailingSlash: 'always',
		// adapter: adapter(),
		prerender: {
			default: true,
		}
	}
};

export default config;
