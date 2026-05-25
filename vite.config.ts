import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path matches the GitHub repo name so assets resolve on GitHub Pages.
// Override with VITE_BASE for a custom domain or root-served deployment.
export default defineConfig(() => ({
  base: process.env.VITE_BASE ?? '/fractal_audio/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
}))
