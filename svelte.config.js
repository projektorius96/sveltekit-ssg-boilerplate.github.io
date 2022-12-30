import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'app.html'
		}),
		prerender: { entries: [] },
		outDir: "./docs"
	},
};

export default config;
