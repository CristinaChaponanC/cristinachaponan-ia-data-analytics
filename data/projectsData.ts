interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'PredictIncome: Modelo de IA para Predecir Ingresos',
    description:
      'Proyecto integral de Web Scraping para extracción de ingresos y puesta en producción de un modelo de machine learning. Incluye estructura de código para Web Scraping, ETL (Dataflow), modelado y despliegue de una aplicación web, combinando habilidades de ingeniería de datos y ciencia de datos.',
    href: 'https://github.com/CristinaChaponanC/PredictIncome',
  },
  {
    title: 'EDA Mortalidad España: Análisis Exploratorio de Datos',
    description:
      'Análisis exploratorio de datos de mortalidad en España, realizado mediante Jupyter Notebooks para la visualización y comprensión de patrones en los datos de salud pública.',
    href: 'https://github.com/CristinaChaponanC/EDA_Mortalidad_Espana',
  },
  {
    title: 'Proyecto Completo de Machine Learning',
    description:
      'Desarrollo y creación de un modelo de machine learning. El proyecto incluye notebooks, datos y la experimentación con diversas herramientas y metodologías de ML.',
    href: 'https://github.com/CristinaChaponanC/Project-Machine-Learning',
  },
  {
    title: 'Intereses 360°: Plataforma Ganadora del Datatón por la Integridad 2019',
    description:
      'Plataforma premiada en el I Datatón por la Integridad 2019 (PCM) para detectar conflictos de interés en el Estado. Integró múltiples fuentes de datos públicos y utilizó técnicas de grafos (Neo4J), Web Scraping y Machine Learning en Python para identificar patrones de riesgo.',
    href: 'https://youtu.be/Ma1N_zOfOCo',
  },
]

export default projectsData
