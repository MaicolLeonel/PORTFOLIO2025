# Portfolio Personal - TukCode

Portfolio personal moderno y animado de Maicol Leonel Almirón (TukCode), desarrollador web y freelancer.

## 🚀 Tecnologías

- **React** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **Framer Motion** - Biblioteca de animaciones para React
- **CSS3** - Estilos personalizados sin frameworks
- **React Icons** - Iconos para redes sociales

## 📋 Características

- ✨ Animaciones fluidas con Framer Motion
- 🎨 Diseño moderno y limpio
- 📱 Completamente responsive (mobile first)
- 🎯 Single Page Application (SPA) con navegación suave
- 🎭 Secciones: Hero, Sobre mí, Habilidades, Stack Tecnológico, Proyectos, Experiencia y Contacto
- 🔧 Datos separados en archivos configurables

## 🛠️ Instalación

1. Clona el repositorio o descarga los archivos
2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📦 Build para producción

Para crear una build optimizada para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist`.

Para previsualizar la build de producción:

```bash
npm run preview
```

## 📁 Estructura del proyecto

```
portfolio2025/
├── src/
│   ├── components/       # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── TechStack.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── data/            # Archivos de datos
│   │   ├── projectsData.js
│   │   └── skillsData.js
│   ├── styles/          # Archivos CSS
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── TechStack.css
│   │   ├── Projects.css
│   │   ├── Experience.css
│   │   └── Contact.css
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ✏️ Personalización

### Editar proyectos

Edita el archivo `src/data/projectsData.js` para agregar, modificar o eliminar proyectos.

### Editar habilidades

Edita el archivo `src/data/skillsData.js` para modificar las habilidades técnicas y blandas.

### Editar información personal

- **Hero**: Edita `src/components/Hero.jsx`
- **Sobre mí**: Edita `src/components/About.jsx`
- **Experiencia**: Edita `src/data/skillsData.js` (experienceData)

### Cambiar colores

Los colores están definidos en `src/styles/App.css` en las variables CSS:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #fb923c;
  /* ... más variables */
}
```

### Integrar formulario de contacto

Para que el formulario de contacto funcione, puedes integrar:

- **EmailJS**: Servicio gratuito para enviar emails desde el frontend
- **Backend propio**: Crea un endpoint en tu servidor
- **Formspree**: Servicio de formularios

Ejemplo con EmailJS:

```javascript
// En Contact.jsx
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY');
  // Manejar éxito
};
```

## 🎨 Secciones del Portfolio

1. **Hero** - Portada con nombre, alias y descripción
2. **Sobre mí** - Información personal y profesional
3. **Habilidades** - Habilidades blandas y técnicas
4. **Stack Tecnológico** - Tecnologías que manejo
5. **Proyectos** - Proyectos destacados con enlaces
6. **Experiencia** - Timeline de experiencia y formación
7. **Contacto** - Formulario y enlaces a redes sociales

## 📱 Responsive

El portfolio está completamente optimizado para:

- 📱 Mobile (320px - 480px)
- 📱 Tablet (481px - 768px)
- 💻 Desktop (769px - 1200px)
- 🖥️ Large Desktop (1200px+)

## 🌐 Enlaces sociales

Edita los enlaces en `src/components/Contact.jsx`:

```javascript
<a href="https://github.com/tu-usuario">GitHub</a>
<a href="https://linkedin.com/in/tu-perfil">LinkedIn</a>
<a href="mailto:tu-email@ejemplo.com">Email</a>
```

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como base para tu propio portfolio.

## 👨‍💻 Autor

**Maicol Leonel Almirón** - TukCode
- Ubicación: Tucumán, Argentina
- Rol: Desarrollador Web & Freelancer

---

¡Gracias por visitar mi portfolio! 🚀

