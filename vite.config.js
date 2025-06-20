import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      'helpful-platypus-endless.ngrok-free.app'
    ]
  },
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/My-Porfolio"
})
