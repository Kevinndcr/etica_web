# Sistema de Estilos - UTN Web Project

## 📁 Estructura de Estilos

```
src/styles/
├── variables.css    - Variables CSS y tokens de diseño
├── reset.css        - Normalización de estilos del navegador
├── base.css         - Estilos base para elementos HTML
├── components.css   - Componentes reutilizables
└── utilities.css    - Clases de utilidad
```

## 🎨 Paleta de Colores

### Colores Principales (Basados en UTN)
- **Azul UTN**: `var(--color-primary)` - #003876
- **Naranja UTN**: `var(--color-secondary)` - #ff6b35

### Variaciones
Cada color principal tiene 5 variaciones:
- `--color-primary-dark`
- `--color-primary-light`
- `--color-primary-lighter`
- `--color-primary-lightest`

## 🔧 Uso de Variables CSS

### En archivos CSS
```css
.mi-componente {
  background-color: var(--color-primary);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}
```

### En componentes React con inline styles
```tsx
const styles = {
  backgroundColor: 'var(--color-primary)',
  padding: 'var(--spacing-md)',
};
```

## 🎯 Clases de Utilidad

### Colores
```html
<div class="bg-primary text-white">
<div class="text-utn-blue">
<div class="gradient-utn">
```

### Espaciado
```html
<div class="p-md m-lg">
<div class="mt-xl mb-md">
```

### Flexbox
```html
<div class="d-flex justify-center align-center gap-md">
```

### Tipografía
```html
<h1 class="font-bold text-center">
<p class="text-secondary">
```

## 📦 Componentes Base

### Botones
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>

<!-- Tamaños -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Formularios
```html
<div class="form-group">
  <label class="form-label">Email</label>
  <input type="email" class="form-control" placeholder="ejemplo@utn.edu.ar">
  <span class="form-help">Ingresa tu email institucional</span>
</div>
```

### Tarjetas
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Título</h3>
  </div>
  <div class="card-body">
    <p class="card-text">Contenido de la tarjeta</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Acción</button>
  </div>
</div>
```

### Badges
```html
<span class="badge">Default</span>
<span class="badge badge-success">Aprobado</span>
<span class="badge badge-warning">Pendiente</span>
<span class="badge badge-error">Rechazado</span>
```

### Alertas
```html
<div class="alert alert-success">Operación exitosa</div>
<div class="alert alert-warning">Atención requerida</div>
<div class="alert alert-error">Error detectado</div>
<div class="alert alert-info">Información importante</div>
```

## 📐 Sistema de Diseño

### Espaciado
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px

### Border Radius
- `sm`: 4px
- `md`: 8px
- `lg`: 12px
- `xl`: 16px
- `2xl`: 24px
- `full`: 9999px

### Sombras
- `shadow-xs`: Muy sutil
- `shadow-sm`: Pequeña
- `shadow-md`: Media (defecto)
- `shadow-lg`: Grande
- `shadow-xl`: Extra grande
- `shadow-2xl`: Muy grande

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🚀 Mejores Prácticas

1. **Prioriza variables CSS** sobre valores hardcoded
2. **Usa clases de utilidad** para estilos simples y repetitivos
3. **Crea componentes modulares** para estilos complejos
4. **Mantén la consistencia** usando el sistema de tokens
5. **Modulariza los estilos** en archivos separados por componente

## 📝 Ejemplo de Componente React

```tsx
// components/Button/Button.tsx
import './Button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', size = 'md', children }: ButtonProps) => {
  return (
    <button className={`btn btn-${variant} btn-${size}`}>
      {children}
    </button>
  );
};
```

## 🎨 Personalización

Para modificar la paleta de colores, edita `src/styles/variables.css`:

```css
:root {
  --color-primary: #TU_COLOR_AQUI;
  --color-secondary: #TU_COLOR_AQUI;
}
```

Todos los componentes y utilidades se actualizarán automáticamente.
