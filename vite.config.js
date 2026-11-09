import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/internship-task-4/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})