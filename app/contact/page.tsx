import { genPageMetadata } from 'app/seo'
import SectionContainer from '@/components/SectionContainer'
import PageTitle from '@/components/PageTitle'
import Link from '@/components/Link'

export const metadata = genPageMetadata({ title: 'Contacto - Cristina Chapoñán' })

export default function ContactPage() {
  return (
    <SectionContainer>
      <PageTitle>Contacto</PageTitle>
      <div className="prose dark:prose-invert max-w-none pt-10 pb-8">
        <p>
          ¡Me encantaría saber de ti! Si tienes preguntas, oportunidades de colaboración o
          simplemente quieres saludar, no dudes en ponerte en contacto.
        </p>
        <p>
          Puedes enviarme un mensaje directamente a través del siguiente formulario o conectar
          conmigo en mis redes profesionales.
        </p>

        {/* Formulario de Contacto (Ejemplo - Requiere implementación de backend o servicio de terceros) */}
        <div className="mt-8 mb-8">
          <h3 className="mb-4 text-2xl font-bold tracking-tight">Envíame un mensaje</h3>
          <form action="#" method="POST" className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 focus:ring-primary-500 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>

        <h3 className="mb-4 text-2xl font-bold tracking-tight">Conecta en Redes</h3>
        <ul className="list-none p-0">
          <li className="mb-2">
            <Link
              href="https://www.linkedin.com/in/cristina-chapo%C3%B1an/"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="https://github.com/CristinaChaponanC"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="https://twitter.com/Cristina_CCC"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter/X
            </Link>
          </li>
          {/* Puedes añadir más redes sociales aquí */}
        </ul>

        <p className="mt-8">
          También puedes enviarme un correo electrónico directamente a:
          <Link
            href="mailto:contact@cristinachaponan.com"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 ml-2"
          >
            contact@cristinachaponan.com
          </Link>
        </p>
      </div>
    </SectionContainer>
  )
}
