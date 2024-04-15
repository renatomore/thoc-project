import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const port = 3001;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port,
  },
  preview: {
    port,
  },
});
