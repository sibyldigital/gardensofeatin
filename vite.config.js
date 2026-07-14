import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed to GitHub Pages under https://sibyldigital.github.io/gardensofeatin/,
// so every built asset URL must be prefixed with the repo subpath.
export default defineConfig({
  base: "/gardensofeatin/",
  plugins: [react()],
});
