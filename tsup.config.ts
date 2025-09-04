import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ["esm", "cjs"],
  target: "es2019",
  external: ["react", "react-dom"],
  minify: true
});
