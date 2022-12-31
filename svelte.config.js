// Credits to CaptainCodeman : @https://github.com/CaptainCodeman/svelte-theme-select/blob/master/svelte.config.js

import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

const prod = process.env.NODE_ENV === 'production' /* NODE_ENV=production npm run build */
const repo_name = "sveltekit-ssg-boilerplate"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	// preprocess: [vitePreprocess()], /* <= not required at the moment */

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
		}),
		paths: {
			base: prod ? repo_name : '',
		},
	},
}

export default config