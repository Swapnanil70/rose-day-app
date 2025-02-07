import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/rose-day-app/",
})

// export default {
//   base: "/rose-day-app/", // Change this based on your repo name
// };