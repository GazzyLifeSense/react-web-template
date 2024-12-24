import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react"
// @ts-expect-error unnecessary
import eslint from "vite-plugin-eslint"

// https://vite.dev/config/
export default defineConfig({
  root: resolve(__dirname, "src"),
  plugins: [react(), eslint()]
})
