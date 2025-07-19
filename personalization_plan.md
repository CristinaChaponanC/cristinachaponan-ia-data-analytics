### Plan de Personalización para cristinachaponan.com

**Objetivo:** Transformar la plantilla base en el sitio web personalizado de Cristina Chapoñán, enfocado en IA y Data Analytics, reflejando su posicionamiento y marca.

---

**Fase 1: Configuración Inicial y Contenido Esencial**

1.  **Actualizar Metadatos del Sitio (`data/siteMetadata.js`):**
    - Cambiar `title` a "Cristina Chapoñán – IA, Data & Analytics".
    - Actualizar `description` a "Portafolio y blog de Cristina Chapoñán: proyectos de IA, pipelines de datos, modelos predictivos y visualizaciones interactivas."
    - Asegurar que `author` sea "Cristina Chapoñán".
    - Actualizar enlaces de redes sociales (`linkedin`, `github`, `twitter`/`x`) con los de Cristina.
    - Revisar `language`, `locale`, `siteUrl`.
    - Actualizar `headerNavLinks` según las nuevas secciones (Home, Sobre mí, Proyectos de IA & Data, Blog, Recursos, CV/Resumen, Contacto).

2.  \*\*Personalizar Perfil de Autor (`data/authors/default.mdx`):
    - Actualizar el contenido del archivo con la biografía de Cristina (`Elevator Pitch` y `Sobre mí`).
    - Asegurarse de que la imagen de perfil (`avatar`) sea la de Cristina (`public/static/images/sparrowhawk-avatar.jpg` debe ser reemplazada).
    - Añadir o verificar los enlaces correctos a LinkedIn y GitHub.

3.  **Definir Proyectos (`data/projectsData.ts`):**
    - Eliminar los proyectos de ejemplo.
    - Añadir los proyectos de Cristina, siguiendo la estructura:
      - `title` (p. ej., "PredictIncome: Modelo de IA para predecir ingresos")
      - `description` (incluyendo tecnologías como Python, TensorFlow, Spark, GCP)
      - `href` (enlace a GitHub / Demo)
      - **Nota:** Considerar añadir campos para `results` (accuracy, reducción de costes, etc.) si no existen y se quiere mostrar en el Card. Esto podría requerir una pequeña modificación en `components/Card.tsx`.

4.  **Preparar Contenido del Blog (`data/blog/`):**
    - Eliminar los artículos de blog de ejemplo que no sean relevantes.
    - Planificar y empezar a escribir artículos para las nuevas categorías:
      - "IA aplicada"
      - "Casos de Data Analytics"
      - "Tutoriales ML"
      - "Tendencias en Inteligencia Artificial"
    - **Sugerencia:** Convertir "Notebooks de Jupyter, scripts en Python, dashboards desplegables" en posts de blog o en una sección específica de "Recursos" con descripciones detalladas.

**Fase 2: Adaptación de la Interfaz y Marca**

5.  **Actualizar Estructura de Navegación (`data/headerNavLinks.ts`):**
    - Asegurarse de que los enlaces correspondan a las nuevas secciones: `/`, `/about`, `/projects`, `/blog`, `/resources` (si se crea), `/cv` (para el CV), `/contact`.

6.  **Actualizar Páginas Esenciales (`app/` y `layouts/`):**
    - **`app/about/page.tsx`:** Revisar y adaptar el contenido para que refleje el "Sobre Mí" enfocado en IA, ML, Data Engineering y Visual Analytics. Puede utilizar `layouts/AuthorLayout.tsx`.
    - **`app/projects/page.tsx`:** Asegurarse de que esta página use `layouts/ListLayout.tsx` o similar para mostrar los proyectos de `data/projectsData.ts` de forma atractiva.
    - **`app/cv/page.tsx` (Crear):**
      - Crear una nueva página `app/cv/page.tsx`.
      - Decidir cómo se mostrará el CV:
        - **Opción A (Recomendada para UX):** Mostrar el CV directamente en la página con HTML/MDX y estilos Tailwind. Esto permite una buena integración, es rastreable por SEO y se ve bien en todos los dispositivos.
        - **Opción B (Alternativa):** Embedder un PDF del CV. Esto podría ser más rápido de implementar inicialmente pero menos flexible para SEO y responsividad. Si se elige esta opción, el PDF debe estar en `public/static/docs/cristina-chaponan-cv.pdf`.
      - Si es la Opción A, puedes usar un layout simple o adaptar `layouts/PostSimple.tsx` si el CV es largo y tipo "documento".
    - **`app/contact/page.tsx` (Crear):** Añadir una nueva página de contacto con un formulario y enlaces a LinkedIn y GitHub. Puedes crear un nuevo archivo `app/contact/page.tsx` y diseñar un componente de formulario.
    - **`app/page.tsx` (Home):** Personalizar el contenido de la página de inicio para incluir el Hero con el logo, el nuevo tagline ("De IA y Data a Insights: Analytics que impulsan la innovación") y el CTA "Explora mis proyectos de IA y Data Analytics".

7.  **Implementar Identidad Visual (Paleta y Tipografía):**
    - **`tailwind.config.js`:**
      - Añadir los nuevos colores: `Deep Blue (#005082)`, `Data Teal (#009688)`, `Orange Accent (#FF6F00)`, `Neural Gray (#606060)`.
      - Configurar las tipografías: `Montserrat` para encabezados, `Lora` para cuerpo, `Consolas Monospace` para códigos/ejemplos. (Puede que necesites importar estas fuentes de Google Fonts en `app/layout.tsx` o similar).
    - **`css/tailwind.css`:** Asegurarse de que los estilos base y componentes utilicen las nuevas variables de color y tipografía.

8.  **Reemplazar Activos Visuales (`public/static/`):**
    - **Logo:** Reemplazar `public/static/images/logo.png` (o `data/logo.svg`) por el nuevo logo de Cristina ("CC + barras" con punto naranja).
    - **Favicons:** Reemplazar todos los favicons en `public/static/favicons/` con los nuevos.
    - **Imágenes de Avatares/Proyectos:** Reemplazar `public/static/images/avatar.png` y `public/static/images/sparrowhawk-avatar.jpg` con la imagen de Cristina.
    - **Iconos Sociales:** Si los iconos existentes no se ajustan a la estética, considerar actualizarlos en `components/social-icons/icons.tsx`.

**Fase 3: Optimización y Despliegue**

9.  **Revisar SEO (`app/seo.tsx`, `app/sitemap.ts`, `app/robots.ts`):**
    - Asegurarse de que las meta descripciones, títulos y palabras clave (Inteligencia Artificial, Machine Learning, Data Analytics, Data Science en Perú, Pipelines ETL GCP, Modelos predictivos Python, Visualizaciones interactivas) estén correctamente implementadas.
    - Verificar que `app/sitemap.ts` y `app/robots.ts` reflejen la estructura final del sitio.
    - **CV SEO:** Si el CV se muestra directamente en la página (Opción A), asegúrate de que el contenido sea rastreable.

10. **Implementar CTAs y Ofertas:**
    - Integrar un formulario de suscripción para la "Newsletter mensual: IA & Analytics Insights". Esto podría ser un componente reutilizable.
    - Mencionar y/o enlazar a "Webinars: Construyendo tu primer modelo de ML en GCP" y "Consultorías express: Auditoría de tu pipeline de datos en 1 hora" en la página de Contacto o en secciones relevantes del blog/proyectos.

11. **Ajustes de `next.config.js`:**
    - Revisar la política de seguridad de contenido (CSP) para asegurar que permita las fuentes y cualquier servicio externo (ej. para comentarios o formularios) que se integre.

12. **Renombrar Repositorio GitHub:**
    - Cambiar el nombre del repositorio principal a `cristinachaponan-ia-data-analytics`.

13. **Despliegue:**
    - Realizar el despliegue en Vercel (o tu servicio de hosting preferido) una vez que los cambios principales estén implementados y probados.

---

**Consideraciones Adicionales:**

- **Comentarios:** Decide si mantendrás el sistema de comentarios actual (`components/Comments.tsx`) o lo reemplazarás.
- **Analytics:** Configura Google Analytics o cualquier otra herramienta de seguimiento para monitorear el tráfico.
