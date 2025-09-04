# @ralorotech/rl-design-system

Design System en **React + TypeScript + BEM**.  
Este repo incluye un paquete de librería y un proyecto `example/` para probarlo en desarrollo.

---

## 🧩 Estructura

```
.
├─ src/                      # código del DS
├─ dist/                     # build (generado por tsup)
├─ example/                  # app Vite React para probar el DS
├─ tsup.config.ts
├─ package.json
└─ README.md
```

---

## 🚀 Desarrollo `npm link` + watch

La idea es **compilar el DS en watch** y **enlazarlo** al `example/` para ver cambios al instante (HMR).

### 1) Instalar deps

```bash
# en la raíz del repo
npm i
```

### 2) Arrancar build en watch (DS)

```bash
# en la raíz del repo
npm run dev
```

> Esto ejecuta `tsup --watch` y recompila `dist/` cuando cambias archivos en `src/`.

### 3) Crear el link global del DS

En otra terminal (también en la **raíz del repo**):

```bash
npm link
```

> Esto registra el paquete local como instalable globalmente en tu máquina.

### 4) Enlazar el DS dentro del `example/`

```bash
cd example
npm link @ralorotech/rl-design-system
```

> Ahora `example/` usa el DS mediante un **symlink** (no copia), por lo que verá los cambios del build.

### 5) Asegurar una sola instancia de React en `example/`

```bash
cd example
npm i react@19.1.1 react-dom@19.1.1
```

### 6) Configurar Vite en `example/` (HMR + dedupe)

Crea/edita `example/vite.config.ts`:

```ts
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
  optimizeDeps: {
    // evita que Vite pre-empaque el DS; así lo trata como "source" y hace HMR
    exclude: ["@ralorotech/rl-design-system"],
  },
});
```

### 7) Arrancar el `example/`

```bash
cd example
npm run dev
```

Edita `src/components/Button/Button.tsx` en el DS → **se recompila** → Vite detecta el cambio → **HMR** en `example/`.

---

## 🎨 CSS en watch (opcional)

Si generas un `dist/styles.css` a partir de múltiples CSS, añade un watcher simple:

**package.json (raíz)**

```json
{
  "scripts": {
    "build": "tsup",
    "build:css": "mkdir -p dist && (cat src/styles/tokens.css 2>/dev/null || true) > dist/styles.css && find src/components -name '*.css' -exec cat {} + >> dist/styles.css",
    "dev": "tsup --watch",
    "dev:css": "npx chokidar 'src/**/*.css' 'src/styles/*.css' -c 'npm run build:css'",
    "dev:all": "npx npm-run-all -p dev dev:css"
  }
}
```

Usa:

```bash
# en la raíz (recomendado si quieres ver cambios de CSS en caliente)
npm run dev:all
```

> Requiere `npx` (trae binarios al vuelo). Si prefieres, instala `chokidar-cli` y `npm-run-all` como devDeps.

---

## 🧪 Probar en el `example`

En `example/src/App.tsx`:

```tsx
import { Button } from "@ralorotech/rl-design-system";
import "@ralorotech/rl-design-system/styles.css";

export default function App() {
  return <Button variant="primary">Hola desde DS</Button>;
}
```

---

## 🧰 Configuración recomendada de `tsup`

`tsup.config.ts` (raíz):

```ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  format: ["esm", "cjs"],
  sourcemap: true,
  clean: true,
  target: "es2019",
  external: ["react", "react-dom"]
});
```

`src/index.ts`:

```ts
import "./styles/tokens.css"; // opcional
export { Button } from "./components/Button/Button";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./components/Button/Button";
```

---

## 🐛 Problemas comunes

### 1) `does not provide an export named 'Button'`
- Asegúrate de **exportar** explícitamente en `src/index.ts`.
- Reconstruye el DS: `npm run build`.
- Reinstala/enlaza en `example` si hiciste cambios de estructura.

### 2) React duplicado / hooks mismatch
- Verifica que `react` y `react-dom` estén en **peerDependencies** del DS.
- Instala `react` y `react-dom` en `example`.
- Usa `dedupe: ["react", "react-dom"]` en `vite.config.ts`.

### 3) No hay HMR de CSS
- Si concatenas CSS a `dist/styles.css`, usa `npm run dev:css` (o `dev:all`) para reconstruirlo al cambiar estilos.

### 4) No resuelve rutas fuera de `example/`
- Asegúrate de tener `server.fs.allow = [".."]` en `vite.config.ts`.

---

## 🔄 Desenlazar / limpiar

```bash
# en example/
npm unlink @ralorotech/rl-design-system
npm i   # reinstala deps para limpiar el árbol

# en la raíz del DS
npm unlink
```

---

## 📦 Publicar (resumen)

```bash
npm run build && npm run build:css
npm publish --access public
```

Consumir:

```bash
npm i @ralorotech/rl-design-system
```

```tsx
import { Button } from "@ralorotech/rl-design-system";
import "@ralorotech/rl-design-system/styles.css";
```
