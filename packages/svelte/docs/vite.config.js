import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  plugins: [
    Unocss({
      theme: {
        colors: {
          primary: '#8155F4',
          secondary: '#66bb6a',
          t: {
            1: '#213547',
            2: 'rgba(60, 60, 60, .7)',
            3: 'rgba(60, 60, 60, .33)',
            4: 'rgba(60, 60, 60, .18)',
            5: 'rgba(255, 255, 255, .87)',
            6: 'rgba(235, 235, 235, .6)',
          },
        },
      },
      presets: [presetAttributify(), presetUno()],
    }),
    sveltekit(),
  ],
})
