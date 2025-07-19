# cristinachaponan.com – Tu Plataforma de IA, Data & Analytics

![Banner de Cristina Chapoñan - IA, Data & Analytics](/public/static/images/twitter-card.png)

"De IA y Data a Insights: Analytics que impulsan la innovación"

Este repositorio contiene el código fuente para cristinachaponan.com, la plataforma personal y blog de Cristina Chapoñán, diseñada para destacar sus proyectos, conocimientos y liderazgo en Inteligencia Artificial, Machine Learning y Data Analytics.

## Sobre Cristina Chapoñán

Soy Cristina Chapoñán, MSc en Big Data & Business Analytics y experta en IA aplicada. Con más de 10 años liderando automatización y análisis de datos en banca, ahora acelero la adopción de soluciones inteligentes y algoritmos predictivos que transforman información en ventaja competitiva. Mi objetivo es construir algoritmos de machine learning robustos y pipelines de datos eficientes, compartiendo mi viaje y conocimientos en este espacio.

## Características Clave de la Plataforma

Construida con **Next.js**, **Tailwind CSS** y **Contentlayer**, esta plataforma está optimizada para rendimiento y personalización, sirviendo como un hub central para:

- **Portafolio de Proyectos de IA & Data:** Una sección dedicada a mostrar proyectos con detalles sobre tecnologías utilizadas (Python, TensorFlow, Spark, GCP, etc.), resultados clave y enlaces a repositorios (GitHub) o demos.
- **Blog Especializado:** Contenido enfocado en IA aplicada, casos de Data Analytics, tutoriales de Machine Learning y tendencias en Inteligencia Artificial.
- **Recursos Útiles:** Comparte Jupyter Notebooks, scripts en Python y dashboards desplegables para la comunidad.
- **Optimización SEO:** Configurada para un alto rendimiento en motores de búsqueda, utilizando metaetiquetas, sitemaps y RSS feeds relevantes para el campo de la IA y Data Science.
- **Diseño Moderno y Adaptable:** Estilo con Tailwind CSS y soporte para temas claro/oscuro, garantizando una experiencia de usuario fluida en cualquier dispositivo.
- **Soporte MDX:** Escribe contenido del blog y proyectos combinando Markdown con componentes React para mayor interactividad y capacidad técnica (fórmulas matemáticas con KaTeX, resaltado de sintaxis).

## Estructura Web y Secciones

- **Home:** Presentación principal con el nuevo tagline y un llamado a la acción para explorar proyectos.
- **Sobre Mí:** Resumen profesional enfocado en IA, Machine Learning, Data Engineering y Visual Analytics.
- **Proyectos de IA & Data:** Detalle de cada proyecto con título, descripción, tecnologías, resultados y enlaces.
- **Blog:** Artículos clasificados en categorías relevantes.
- **Recursos:** Material complementario para la comunidad.
- **Contacto:** Formulario de contacto y enlaces directos a LinkedIn y GitHub.

## Identidad Visual

- **Logo:** Se conservan las "CC + barras", con un punto naranja en forma de nodo que evoca una red neuronal.
- **Paleta de Colores:**
  - Deep Blue (#005082)
  - Data Teal (#009688)
  - Orange Accent (#FF6F00)
  - Neural Gray (#606060) para fondos neutros
- **Iconografía:** Iconos que representan circuitos, cerebros de line art y gráficos de redes.
- **Tipografía:**
  - Encabezados: Montserrat Bold
  - Cuerpo: Lora Regular
  - Códigos/Ejemplos: Consolas Monospace

## SEO y Palabras Clave

- **Primarias:** "Inteligencia Artificial", "Machine Learning", "Data Analytics", "Data Science en Perú".
- **Secundarias:** "Pipelines ETL GCP", "Modelos predictivos Python", "Visualizaciones interactivas".
- **URLs amigables:** `/proyectos/ia-machine-learning`, `/blog/tutorial-data-science`.

## Redes y Networking

Cristina Chapoñán está activamente presente en las siguientes plataformas, compartiendo conocimientos y conectando con la comunidad:

- **LinkedIn:** Titular y extracto actualizados a “IA & Data Analytics Specialist”. Publicaciones regulares sobre algoritmos o pipelines.
- **GitHub:** Repositorio principal renombrado a `cristinachaponan-ia-data-analytics`. Cada README de proyecto incluye un badge “Built with Python • TensorFlow • GCP”.
- **Twitter/X:** Microblog de ML, compartiendo papers, tutoriales cortos y hallazgos de proyectos (`#AI #DataAnalytics`).

## Llamados a la Acción (CTA) & Ofertas

La plataforma incluirá puntos de contacto claros para interactuar con Cristina:

- **Newsletter mensual:** "IA & Analytics Insights"
- **Webinars:** "Construyendo tu primer modelo de ML en GCP"
- **Consultorías express:** "Auditoría de tu pipeline de datos en 1 hora"

## Guía de Inicio Rápido para Desarrollo

Este proyecto es una plantilla de blog de Next.js, Tailwind CSS y Contentlayer.

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/tu_usuario/cristinachaponan-ia-data-analytics.git
    cd cristinachaponan-ia-data-analytics
    ```

    (Nota: Se asumirá que el repositorio será renombrado a `cristinachaponan-ia-data-analytics`).

2.  **Personaliza `data/siteMetadata.js`:** Ajusta la información del sitio, incluyendo el nuevo título (`Cristina Chapoñán – IA, Data & Analytics`), la meta descripción, y otros detalles relevantes de Cristina.
3.  **Actualiza `data/authors/default.mdx`:** Edita la información del autor principal para reflejar los datos de Cristina Chapoñán.
4.  **Modifica `data/projectsData.ts`:** Añade y organiza los proyectos de Cristina.
5.  **Actualiza `data/headerNavLinks.ts`:** Personaliza los enlaces de navegación según la estructura deseada.
6.  **Añade contenido al blog:** Crea o adapta los posts en `data/blog/` para incluir los artículos de Cristina, siguiendo las categorías mencionadas (IA aplicada, Casos de Data Analytics, Tutoriales ML, Tendencias en Inteligencia Artificial).
7.  **Personaliza `public/static`:** Actualiza imágenes, favicons y el nuevo logo con el "nodo naranja".
8.  **Revisa y ajusta `tailwind.config.js` y `css/tailwind.css`:** Implementa la nueva paleta de colores y tipografía de la identidad visual.
9.  **Ajusta `next.config.js`:** Asegúrate de que la política de seguridad de contenido (CSP) permita todas las fuentes necesarias para la web app.
10. **Despliega en Vercel** (opción recomendada) o en otro servicio de hosting.

## Instalación

```bash
yarn
```

Si estás usando Windows, puede que necesites ejecutar:

```bash
$env:PWD = $(Get-Location).Path
```

## Desarrollo

Primero, ejecuta el servidor de desarrollo:

```bash
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado. Edita el contenido en `app` o `data`. Las páginas se actualizarán automáticamente al guardar los cambios.

## Extender / Personalizar

- `data/siteMetadata.js`: Contiene la información principal del sitio.
- `data/authors/default.mdx`: Información del autor principal.
- `data/projectsData.ts`: Datos para la página de proyectos.
- `data/headerNavLinks.ts`: Enlaces de navegación.
- `data/logo.svg`: Reemplaza con el nuevo logo de Cristina.
- `data/blog`: Archivos MDX para las entradas del blog.
- `public/static`: Archivos estáticos como imágenes y favicons.
- `tailwind.config.js` y `css/tailwind.css`: Configuración de Tailwind CSS para el estilo general del sitio.
- `css/prism.css`: Estilos para los bloques de código.
- `contentlayer.config.ts`: Configuración de Contentlayer para el procesamiento de contenido MDX.
- `components/MDXComponents.tsx`: Define componentes React personalizados para usar dentro de los archivos MDX.
- `layouts`: Plantillas principales para las páginas (PostLayout, ListLayout, etc.).
- `app`: Rutas y páginas de Next.js.
- `next.config.js`: Configuración específica de Next.js.

## Publicaciones de Ejemplo (a ser actualizadas por Cristina)

Se sugiere adaptar o crear publicaciones que cubran los siguientes temas:

- **Guía de Markdown para Proyectos de ML**
- **Visualización de Datos con Next.js y React**
- **Introducción a la Derivación de Modelos Predictivos (e.g., OLS)**
- **Casos de Estudio: Pipelines ETL en GCP**
- **Explorando el Mundo de la IA Generativa**

## Despliegue

La forma más sencilla de desplegar esta plantilla es a través de [Vercel](https://vercel.com). Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

También se proporciona un flujo de trabajo para **GitHub Pages** (`.github/workflows/pages.yml`).

## Soporte

Si utilizas esta plantilla como base, considera apoyar el esfuerzo dando una estrella en GitHub, compartiendo tu blog o convirtiéndote en patrocinador del proyecto original.

## Licencia

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/LICENSE) © [Timothy Lin](https://www.timlrx.com) (Licencia original del template base, a ser considerada para la reutilización del código.)
