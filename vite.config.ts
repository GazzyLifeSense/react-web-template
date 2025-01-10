import { defineConfig } from "vite"
import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"
import react from "@vitejs/plugin-react"
// @ts-expect-error unnecessary
import eslint from "vite-plugin-eslint"
import { resolve } from "path"

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }
})
