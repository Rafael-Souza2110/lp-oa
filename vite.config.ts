import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ...(process.env.ANALYZE === 'true' ? [visualizer({ open: true, gzipSize: true })] : []),
  ],
  // base: process.env.BASE_PATH || '/', // use BASE_PATH para deploy em subpath (ex: /lp/)
  build: {
    sourcemap: false,
  },
})
