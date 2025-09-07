import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // evita React duplicado entre DS y example
    dedupe: ["react", "react-dom"],
    // si notas comportamientos raros con symlinks, puedes probar:
    // preserveSymlinks: true,
  },
  server: {
    // permite acceder a archivos fuera de /example (tu DS)
    fs: { allow: [".."] },
  },
 optimizeDeps: { exclude: ["@ralorotech/rl-design-system"] }
});