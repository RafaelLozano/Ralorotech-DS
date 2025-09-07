import { Button, Card } from "@ralorotech/rl-design-system";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="app-background">
        <h1>Ralorotech Design System</h1>
        <div className="components-showcase">
          <Card 
            title="Card Glassmorphism"
            description="Este es un ejemplo de nuestro componente Card con efecto glassmorphism. Incluye transparencia, desenfoque de fondo y animaciones suaves."
            link="https://github.com"
            linkText="Ver en GitHub"
          />
          <Card 
            variant="dark"
            title="Variante Oscura"
            description="El mismo componente con la variante oscura, perfecta para fondos claros."
            link="https://storybook.js.org"
            linkText="Ver Storybook"
          />
          <Card 
            title="Con Imagen"
            description="Card que incluye una imagen de cabecera con efectos hover."
            image="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            link="https://unsplash.com"
            linkText="Ver más"
          />
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Button size="md">Botón del Design System</Button>
        </div>
      </div>
    </div>
  );
}