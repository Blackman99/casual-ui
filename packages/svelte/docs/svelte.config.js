import adapter from '@sveltejs/adapter-static'
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    dev: true,
  },

  kit: {
    trailingSlash: 'always',
    adapter: adapter(),
    prerender: {
      default: true,
    },
    alias: {
      $utils: 'src/utils',
      $theme: 'src/theme',
      $casual: 'src/../../ui',
      '$casual-style': '../../styles',
    },
  },

  preprocess: sveltePreprocess(),
}

export default config
