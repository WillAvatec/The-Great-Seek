import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  root: ".",
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./setup.js",
  },
});
