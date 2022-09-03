import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
		}),
		{
			config(config) {
				const output = config.build.rollupOptions.output;
				if (output) {
					const original = output.assetFileNames;
					output.assetFileNames = assetInfo => {
						const match = assetInfo.name.match(/\/\+(.*)\.css$/);
						return match ? original.replace('[name]', match[1]) : original;
					};
				}
				return config;
			}
		},
	]
};

export default config;
