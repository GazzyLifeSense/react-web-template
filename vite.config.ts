import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// @ts-expect-error unnecessary
import eslint from "vite-plugin-eslint"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()]
})
