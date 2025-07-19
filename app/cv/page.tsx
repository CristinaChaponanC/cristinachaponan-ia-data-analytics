import { genPageMetadata } from 'app/seo'
import SectionContainer from '@/components/SectionContainer'
import PageTitle from '@/components/PageTitle'

export const metadata = genPageMetadata({ title: 'CV - Cristina Chapoñán' })

export default function CVPage() {
  return (
    <SectionContainer>
      <PageTitle>Curriculum Vitae</PageTitle>
      <div className="prose dark:prose-invert max-w-none pt-10 pb-8">
        <p>
          Aquí se mostrará el contenido detallado de mi Curriculum Vitae, incluyendo mi experiencia
          profesional, educación, habilidades técnicas y logros.
        </p>
        <p>
          Este contenido será optimizado para una fácil lectura y búsqueda, destacando mi
          trayectoria como IA & Data Analytics Specialist.
        </p>

        <h2>Experiencia Profesional</h2>
        {/* Ejemplo de un bloque de experiencia */}
        <div>
          <h3>Risk Reporting Associate – Global & Regulatory Reporting - BBVA (Perú)</h3>
          <p>
            <em>(Fecha de inicio) – Actual</em>
          </p>
          <ul>
            <li>Liderando automatización y análisis de datos en banca.</li>
            <li>Acelerando la adopción de soluciones inteligentes y algoritmos predictivos.</li>
            {/* Añadir más puntos específicos y cuantificables aquí */}
          </ul>
        </div>
        {/* Repetir para otras experiencias */}

        <h2>Educación</h2>
        {/* Ejemplo de un bloque de educación */}
        <div>
          <h3>MSc en Big Data & Business Analytics - [Nombre de la Universidad]</h3>
          <p>
            <em>(Fechas)</em>
          </p>
          <ul>
            <li>Desarrollo de trabajo de titulación: "Income Predict".</li>
            {/* Añadir más detalles */}
          </ul>
        </div>
        <div>
          <h3>MIT Professional Education - Programa de Big Data</h3>
          <p>
            <em>(Fechas)</em>
          </p>
          <ul>
            <li>
              Módulos: Tecnologías del Big Data, Machine Learning y Minería de Datos, Visualización
              Avanzada, Técnicas Aplicadas.
            </li>
          </ul>
        </div>
        {/* Repetir para otras formaciones */}

        <h2>Habilidades Clave</h2>
        <p>
          <strong>Lenguajes de Programación:</strong> Python (TensorFlow, scikit-learn), SQL, R
          (básico)
        </p>
        <p>
          <strong>Plataformas Cloud:</strong> GCP (Dataflow, Cloud Functions)
        </p>
        <p>
          <strong>Bases de Datos/Herramientas:</strong> Neo4J, Power BI, Jupyter Notebooks, Spark,
          Hadoop
        </p>
        <p>
          <strong>Áreas de Especialización:</strong> Inteligencia Artificial, Machine Learning, Data
          Engineering, Data Analytics, Visual Analytics, Riesgos Regulatorios, Web Scraping, ETL.
        </p>

        <h2>Logros y Proyectos Destacados</h2>
        <ul>
          <li>
            **Ganadora I Datatón por la Integridad 2019 (PCM):** Proyecto "Intereses 360°" para
            detectar conflictos de interés.
          </li>
          <li>
            **Tesis de Maestría "Income Predict":** Desarrollo de estimador de ingresos con ML.
          </li>
          {/* Añadir otros proyectos y logros relevantes aquí */}
        </ul>

        <p>
          Para más detalles y mi perfil completo, por favor, visita mi perfil de{' '}
          <a
            href="https://www.linkedin.com/in/cristina-chapo%C3%B1an/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{' '}
          o explora mis proyectos en{' '}
          <a href="https://github.com/CristinaChaponanC" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </SectionContainer>
  )
}
