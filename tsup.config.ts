import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],   // 👈 importante
  dts: true,
  format: ["esm", "cjs"],    // 👈 ESM + CJS
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  target: "es2019",
  treeshake: true, // (opcional)
});
