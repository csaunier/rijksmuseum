import "vitest/config"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import { defineConfig as defineViteConfig, mergeConfig } from "vite"
import { defineConfig as defineVitestConfig } from "vitest/config"

const viteConfig = defineViteConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@components/*": "src/components/*",
      "@assets/*": "src/assets/*",
    },
  },
})

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
})

export default mergeConfig(viteConfig, vitestConfig)
