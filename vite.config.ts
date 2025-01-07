import { defineConfig } from "vite"
import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"
import react from "@vitejs/plugin-react"
// @ts-expect-error unnecessary
import eslint from "vite-plugin-eslint"

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  plugins: [react(), eslint()]
})
