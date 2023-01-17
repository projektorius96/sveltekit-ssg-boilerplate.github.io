// Credits to CaptainCodeman : @https://github.com/CaptainCodeman/svelte-theme-select/blob/master/svelte.config.js

import path from 'node:path'; // for dynamic repo_name [optional]
import adapter from '@sveltejs/adapter-static';
import * as dotenv from 'dotenv';
/* import { vitePreprocess } from '@sveltejs/kit/vite' */

const {NODE_ENV_PROD} = dotenv.config({
    path: '.env'
});
const github_suffix = ".github.io";
const github_repo_name = `/${(path.resolve("./").split(path.sep)).pop()}`;

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
			base: (NODE_ENV_PROD) ? (github_repo_name + github_suffix) : (github_repo_name),
		},
	},
}

export default config