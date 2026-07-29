import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/** @type {import('tailwindcss').Config} */
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),
        tailwindcss(),

  ],

  server: {
    port: 5174,
  },
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
})
