import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
import adapter from '@sveltejs/adapter-netlify';
// import preprocess from "svelte-preprocess";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
    preprocess: [preprocess({
        postcss: true
    }), mdsvex(mdsvexConfig)],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(), // currently the adapter does not take any options
		target: '#svelte'
	},
	vite: {
		optimizeDeps: {
		  include: ["fastq"]			
		}
	  }
};

export default config;
