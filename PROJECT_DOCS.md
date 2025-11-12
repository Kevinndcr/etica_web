# Landing Page - Charla Virtual: Propiedad Intelectual en TI

Sitio web para promoción de evento virtual sobre Regulaciones Jurídicas y Fundamentos de la Propiedad Intelectual en Tecnologías de la Información.

## 🎯 Características

### Secciones Implementadas

1. **Hero Section** - Portada con animación de partículas conectadas
   - Título del evento
   - Descripción
   - Vista previa de los 3 módulos temáticos

2. **Event Promo** - Promoción del evento
   - Countdown timer en tiempo real
   - Detalles del evento (fecha, hora, plataforma)
   - Highlights del evento

3. **Topics** - Temario detallado
   - 3 módulos con contenido específico:
     - Derechos de Autor en el Ámbito de TI
     - Patentes y su Aplicación en Tecnologías
     - Desafíos Actuales y Éticos en PI en TI

4. **Agenda** - Cronograma del evento
   - Timeline interactivo
   - 8 actividades programadas
   - Duración total: 2h 50min

5. **Live Stream** - Transmisión en vivo
   - Embed de YouTube
   - Chat en vivo integrado
   - Responsive (tabs en móvil)
   - Placeholder cuando no está en vivo

6. **Registration** - Inscripción
   - Redirección a Google Forms
   - Diseño atractivo con CTA prominente
   - Indicadores de confianza
   - Beneficios listados

7. **Footer** - Pie de página
   - Información de contacto
   - Redes sociales
   - Logo UTN

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Anime.js** - Animaciones suaves
- **CSS Modules** - Estilos modularizados
- **ITCSS Architecture** - Metodología CSS

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   ├── Navbar.css
│   │   └── index.ts
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   ├── Hero.css
│   │   └── index.ts
│   ├── EventPromo/
│   │   ├── EventPromo.tsx
│   │   ├── EventPromo.css
│   │   └── index.ts
│   ├── Topics/
│   │   ├── Topics.tsx
│   │   ├── Topics.css
│   │   └── index.ts
│   ├── Agenda/
│   │   ├── Agenda.tsx
│   │   ├── Agenda.css
│   │   └── index.ts
│   ├── Registration/
│   │   ├── Registration.tsx
│   │   ├── Registration.css
│   │   └── index.ts
│   ├── LiveStream/
│   │   ├── LiveStream.tsx
│   │   ├── LiveStream.css
│   │   └── index.ts
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   ├── Footer.css
│   │   └── index.ts
│   └── index.ts
├── styles/
│   ├── variables.css
│   ├── reset.css
│   ├── base.css
│   ├── utilities.css
│   └── components.css
├── App.tsx
├── App.css
└── index.css
```

## 🎨 Sistema de Diseño

### Paleta de Colores

- **Primario (Azul UTN)**: `#003876`
- **Secundario (Naranja)**: `#ff6b35`
- **Gradientes**: Combinaciones de azules y naranjas

### Espaciado

Sistema de espaciado consistente basado en múltiplos de 4px:
- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px
- `--spacing-2xl`: 48px
- `--spacing-3xl`: 64px
- `--spacing-4xl`: 96px

### Tipografía

- **Font Family**: System fonts stack
- **Tamaños**: Escala modular de 12px a 72px
- **Pesos**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## 🚀 Configuración e Instalación

### Prerrequisitos

- Node.js (v18+)
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone [url-del-repo]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

## ⚙️ Configuración de Contenido

### Modificar Fecha del Evento

En `src/components/EventPromo/EventPromo.tsx`:
```typescript
const eventDate = new Date('2025-12-15T18:00:00');
```

### Configurar Google Forms

En `src/App.tsx`:
```typescript
<Registration 
  googleFormsUrl="https://forms.google.com/tu-form-url"
/>
```

### Configurar YouTube Stream

En `src/App.tsx`:
```typescript
<LiveStream 
  youtubeVideoId="tu-video-id" 
  isLive={true} // Cambiar a true cuando esté en vivo
/>
```

## 📱 Responsive Design

El sitio es completamente responsive con breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Características responsive:
- Navegación móvil con menú hamburguesa
- Grids que se adaptan a diferentes tamaños
- Tabs para stream/chat en móvil
- Imágenes y videos fluidos

## 🎭 Animaciones

### Hero Section
- Partículas conectadas con Canvas API
- Interacción con mouse (partículas se alejan)
- Animación de entrada suave con Anime.js

### Otras Secciones
- Fade in al scroll
- Hover effects en tarjetas
- Transiciones suaves en todos los elementos

## 📝 Buenas Prácticas Implementadas

1. **Modularización**: Cada componente en su propia carpeta
2. **TypeScript**: Tipado estricto para mayor seguridad
3. **Props Interface**: Todas las props tipadas
4. **CSS Modular**: Estilos encapsulados por componente
5. **Naming Conventions**: BEM-like para clases CSS
6. **Responsive First**: Diseño mobile-first
7. **Accesibilidad**: Semantic HTML, alt texts, aria labels
8. **Performance**: Lazy loading, optimización de assets
9. **Clean Code**: Código comentado y documentado
10. **Git Ready**: Estructura lista para control de versiones

## 🔧 Personalización

### Colores

Modificar en `src/styles/variables.css`:
```css
--color-primary: #003876;
--color-secondary: #ff6b35;
```

### Contenido de Temas

Editar el array `topics` en `src/components/Topics/Topics.tsx`

### Agenda

Modificar el array `schedule` en `src/components/Agenda/Agenda.tsx`

## 📄 Licencia

Este proyecto es propiedad de la Universidad Técnica Nacional de Costa Rica.

## 👥 Contacto

- **Email**: info@utn.ac.cr
- **Teléfono**: +506 2435-5000
- **Ubicación**: Alajuela, Costa Rica

---

Desarrollado con ❤️ para la UTN
