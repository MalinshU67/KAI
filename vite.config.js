import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Разрешает доступ по локальной сети (по IP-адресу)
    port: 5173,
  },
})
