import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteCommonjs()],
  esbuild: {
    loader: 'tsx',
    target: 'esnext',
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  optimizeDeps: {
    esbuildOptions: {
      // Преобразование CommonJS в ES модули
      plugins: [
        esbuildCommonjs(['@rollup/plugin-commonjs', 'google-protobuf'])
      ]
    }
  }
})
