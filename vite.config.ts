// vite.config.js
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue2'
import { defineConfig } from 'vite'

export default defineConfig({
  root: './playground',
  plugins: [
    vue(),
    // cssInjectedByJsPlugin({
    //   jsAssetsFilterFunction: ({ fileName }) =>
    //     fileName == "index.mjs" || fileName == "index.cjs",
    // }),
  ],
  build: {
    lib: {
      entry: {
        main: resolve(__dirname, 'src/index.ts'),
        themes: resolve(__dirname, 'src/themes/index.ts'),
      },
      fileName: (format, entryName) => {
        const formatExtensionMap = {
          es: 'mjs',
          cjs: 'cjs',
          umd: 'umd.js',
        }

        const ext = formatExtensionMap[format]

        if (entryName === 'themes') {
          return `themes/index.${ext}`
        }

        return `index.${ext}`
      },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        dir: resolve(__dirname, 'dist'),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
