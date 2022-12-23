//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),

		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		},
		trailingSlash: 'never' // Это для того, чтобы генерировались пути а.html
	}
	// kit: {
	// 	adapter: adapter({
	// 		fallback: 'index.html',
	// 		precompress: false
	// 	})
	// }
};

export default config;
