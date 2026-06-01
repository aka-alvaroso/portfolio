# Portfolio Roadmap — alvaroso.dev (2026 redesign)

## Stack
- Astro v5 + Tailwind CSS
- GSAP + ScrollTrigger + DrawSVG (animaciones, pendiente)
- Inter font: Black 900 Italic (headings), Regular (body)
- Branch: `redesign/2026`

## Paleta de colores
| Token | Hex |
|-------|-----|
| `ink` | `#131313` |
| `canvas` | `#FEF9FF` |
| `blue` | `#48ACF0` |
| `yellow` | `#FFDB4D` |
| `green` | `#23CE6B` |
| `red` | `#E63841` |

## Breakpoints (tailwind.config.mjs)
| Nombre | Ancho |
|--------|-------|
| `xs` | 480px |
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |

---

## Assets SVG pendientes de exportar desde Figma

### Strips tablet (480px–767px) — diseñar a 768px de ancho
El trazo debería ser ~80–90px para que sea proporcional al de mobile (64–72px en 402px).
Guardar en `/public/2026/strips/`

| Archivo | Sección | Posición |
|---------|---------|----------|
| `hero-red-tablet.svg` | Hero | izquierda |
| `hero-green-tablet.svg` | Hero | derecha |
| `about-blue-tablet.svg` | About | izquierda |
| `about-yellow-tablet.svg` | About | derecha |
| `talks-blue-tablet.svg` | Talks | izquierda |

### Strips ya exportados y en uso
`/public/2026/strips/`:
- `navbar-yellow.svg`
- `hero-red.svg`, `hero-green.svg`
- `hero-red-mobile.svg`, `hero-green-mobile.svg`
- `about-blue.svg`, `about-yellow.svg`
- `about-blue-mobile.svg`, `about-yellow-mobile.svg`
- `my-journey-green.svg`, `my-journey-green-mobile.svg`
- `projects-blue.svg`, `projects-green.svg`, `projects-red.svg`
- `talks-blue.svg`, `talks-blue-mobile.svg`
- `talks-yellow.svg`
- `footer-green.svg`, `footer-yellow.svg`

---

## Tareas pendientes

### 1. Responsive — Strips tablet (BLOQUEADO hasta tener los SVGs)
Aplicar los 5 SVGs tablet listados arriba con el breakpoint `xs:hidden sm:block md:hidden` / `hidden md:block`.

### 2. Responsive — Sección Projects
- Layout mobile: imagen, título, descripción y botón en columna
- Strips de cada proyecto (Linkkk verde, KeyPro azul, Moka roja) visibles en mobile
- Espaciado entre proyectos revisado en mobile
- Botón "Visit" ocupa 100% del alto de su contenedor

### 3. Responsive — Sección Footer
- Revisar que el grid 3 columnas colapsa bien en mobile
- Yellow arch: comprobar que no se corta en mobile
- Green oval y texto "Let's work together": tamaño y posición en mobile
- Texto "Made with 💙": posición y tamaño en mobile

### 4. Responsive — Sección Journey (revisión final)
- Comprobar que el layout mobile de Work Experience / Studies queda bien en todos los tamaños
- "Now" line mobile: posición y escala

### 5. Animaciones GSAP (después de terminar todo el responsive)
En orden sugerido:
- [ ] **Navbar**: strip amarilla con DrawSVG al cargar la página
- [ ] **Logo**: DrawSVG del trazo del logo al hacer scroll o al cargar
- [ ] **Hero**: reveal del título (fade + translate), animación de entrada de strips roja y verde
- [ ] **About**: reveal del texto al hacer scroll, strips entrando desde los lados
- [ ] **Projects**: sticky scroll — el siguiente proyecto sustituye al anterior (ScrollTrigger pin)
- [ ] **Journey**: reveal de items al hacer scroll
- [ ] **Talks**: reveal de entries al hacer scroll
- [ ] **Footer**: entrada del arco amarillo

### 6. SEO y meta
- [ ] og:image, og:title, og:description
- [ ] favicon correcto
- [ ] meta description
- [ ] sitemap

### 7. Deferred (no urgente)
- i18n: inglés principal con fallback en español
- Dark mode: solo light por ahora

---

## Secciones y estado actual

| Sección | Desktop | Mobile | Tablet |
|---------|---------|--------|--------|
| Navbar | ✅ | ✅ (hamburger) | ✅ |
| Hero | ✅ | ✅ | ⚠️ pendiente strips tablet |
| About | ✅ | ✅ | ⚠️ pendiente strips tablet |
| Projects | ✅ | ⚠️ pendiente | ⚠️ pendiente |
| Journey | ✅ | ✅ | ✅ |
| Talks | ✅ | ✅ | ⚠️ pendiente strip tablet |
| Footer | ✅ | ⚠️ revisar | ⚠️ revisar |

---

## Notas técnicas importantes
- `overflow-x: hidden` está en el **body** (Layout.astro), NO en las secciones individuales (causa scroll vertical si se pone en la sección)
- Los strips son `absolute` dentro de su sección y desbordan hacia la siguiente sección intencionadamente
- El breakpoint `xs: 480px` fue añadido manualmente a `tailwind.config.mjs`
- GSAP + DrawSVG requieren licencia o el plugin CDN de GSAP Club
- Proyecto en `C:\Dev\01-portfolio`, branch `redesign/2026`
