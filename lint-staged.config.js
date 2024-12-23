export default {
  "*.{js,jsx,ts,tsx}": [
    "prettier --write",
    "vitest related --run --config=workspaces/library/vite.config.ts",
  ],
  ".css": ["prettier --write"],
}
