import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mr2-mini-app",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
