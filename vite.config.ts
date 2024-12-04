import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from 'vite-plugin-commonjs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), commonjs()],
  resolve: {
    alias: {
      'google-protobuf': 'google-protobuf/google-protobuf.js',
    },
  },
  optimizeDeps: {
    include: ['google-protobuf', 'grpc-web'],
  },
  build:{
    commonjsOptions: {
      exclude: [/proto/],
    },
  }
})
