# @ralorotech/rl-design-system

Design system mínimo en **React + TypeScript** con estilos **CSS (BEM)**.  
Demo de componentes (Storybook): **https://rafaellozano.github.io/Ralorotech-DS**

---

## 🚀 Instalar desde npm

```bash
npm i @ralorotech/rl-design-system
# o
yarn add @ralorotech/rl-design-system
# o
pnpm add @ralorotech/rl-design-system
```

Importa el CSS (tokens + estilos base):

```ts
import "@ralorotech/rl-design-system/styles.css";
```

### Uso rápido

```tsx
import { Button } from "@ralorotech/rl-design-system";
import "@ralorotech/rl-design-system/styles.css";

export default function App() {
  return (
    <>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger" loading>Deleting…</Button>
    </>
  );
}
```

---

## 🧑‍💻 Correr el proyecto en local (librería + ejemplo)

> Requisitos: **Node 18+** y npm/pnpm/yarn.

1) **Instalar dependencias** (en la raíz del repo):

```bash
npm i
```

2) **Compilar en modo watch** la librería (genera `dist/`):

```bash
npm run dev
```

3) (Opcional) **Probar en la app de ejemplo** (`example/`):

```bash
cd example
npm i
npm run dev
```

> Si tu ejemplo importa el paquete publicado, puedes enlazar la librería local para ver cambios al instante:
>
> ```bash
> # en la raíz
> npm link
> # en example/
> npm link @ralorotech/rl-design-system
> npm run dev
> ```

---

## 📚 Storybook

- **Correr Storybook localmente**:
  ```bash
  npm run storybook
  ```
  Abre: http://localhost:6006

- **Versión publicada (GitHub Pages)**:  
  https://rafaellozano.github.io/Ralorotech-DS

---

## 🧩 Scripts útiles

```json
{
  "build": "tsup",
  "build:css": "mkdir -p dist && (cat src/styles/tokens.css 2>/dev/null || true) > dist/styles.css && find src/components -name '*.css' -exec cat {} + >> dist/styles.css",
  "dev": "tsup --watch",
  "storybook": "storybook dev -p 6006",
  "build:storybook": "storybook build"
}
```

---

## ⚖️ Licencia
MIT
