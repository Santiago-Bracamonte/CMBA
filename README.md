# 🏥 Consultorios Médicos Buenos Aires - React App

Aplicación web moderna desarrollada con **React 18**, **Vite**, **Tailwind CSS** y **Framer Motion**.

## 🎨 Paleta de Colores

- **Cian**: `#00BCD4`
- **Azul Cobalto**: `#0047AB`
- **Magenta/Fucsia**: `#E91E63`

## 🚀 Instalación

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn

### Pasos

1. **Clonar o ubicarse en el directorio**:
```bash
cd c:\Users\asus\Desktop\CMBA-REACT
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera el build de producción
- `npm run preview` - Previsualiza el build de producción

## 🗂️ Estructura del Proyecto

```
CMBA-REACT/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   ├── Specialties.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/            # Datos estáticos
│   │   └── specialties.js
│   ├── App.jsx          # Configuración de rutas
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## ✨ Características Principales

### 🏠 Página de Inicio (Home)
- Hero animado con gradiente
- Sección de características principales
- **Horarios de atención clarificados**: "SIN TURNO PREVIO"
- Redes sociales
- Mapa integrado

### 🩺 Especialidades
- **22 especialidades médicas**
- Tarjetas expandibles interactivas
- Información detallada al hacer clic
- Nombre del profesional a cargo
- Barra de búsqueda en tiempo real

### 👨‍⚕️ Nosotros (About)
- Misión y valores
- Tarjetas de valores con animaciones
- Testimonios de pacientes reales:
  - Ely Balducci
  - Sabrina Nipoti
  - Mónica Pazo

### 📞 Contacto
- Formulario de contacto
- Integración con WhatsApp
- Información de contacto
- Mapa de ubicación

## 🎭 Tecnologías Utilizadas

- **React 18.3.1** - Librería UI
- **Vite 5.1.0** - Build tool ultrarrápido
- **Tailwind CSS 3.4.1** - Framework de CSS utility-first
- **Framer Motion 11.0.5** - Animaciones fluidas
- **React Router 6.22.0** - Navegación SPA
- **Heroicons 2.1.1** - Iconos SVG
- **Headless UI 1.7.18** - Componentes accesibles

## 🎨 Personalización de Tailwind

El archivo `tailwind.config.js` incluye:

- **Colores personalizados**: `cian`, `cobalto`, `magenta`
- **Gradientes customizados**: `gradient-cian-cobalto`, `gradient-magenta`
- **Animaciones especiales**: `float`, `pulse-slow`, `shimmer`

## 🌐 Despliegue

### Build de Producción

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`.

### Hosting Recomendado

- **Vercel** (recomendado para Vite)
- **Netlify**
- **GitHub Pages**

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (320px+)
- 📲 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1280px+)

## 🔧 Configuración Adicional

### Variables de Entorno

Si necesitas configurar APIs o claves:

1. Crear archivo `.env` en la raíz
2. Agregar variables con prefijo `VITE_`:
```
VITE_API_URL=https://tu-api.com
```

3. Acceder en el código:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 👥 Equipo de Desarrollo

Desarrollado con ❤️ para Consultorios Médicos Buenos Aires

## 📄 Licencia

Todos los derechos reservados © 2024 Consultorios Médicos Buenos Aires

---

**¿Preguntas o sugerencias?** Contactanos en info@consultoriosbuenosaires.com
