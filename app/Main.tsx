import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from '@/components/Image' // Import Image component

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center space-y-4 pt-10 pb-16 md:pt-20 md:pb-24">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image
            src={'/static/images/logo.png'} // Placeholder for the new logo, make sure to replace this path with the actual new logo path (e.g., /static/images/cristina-logo.png)
            alt="Cristina Chapoñán Logo"
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
            className="rounded-full" // Example styling, adjust as per design
          />
          <h1 className="text-4xl leading-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
            Cristina Chapoñán
          </h1>
        </div>
        {/* Tagline */}
        <p className="max-w-2xl text-center text-xl leading-relaxed text-gray-700 md:text-2xl dark:text-gray-300">
          “De IA y Data a Insights: Analytics que impulsan la innovación”
        </p>
        {/* CTA */}
        <Link
          href="/projects"
          className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 mt-8 rounded-lg px-6 py-3 text-lg font-medium text-white transition duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none"
        >
          Explora mis proyectos de IA y Data Analytics &rarr;
        </Link>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
            Últimas Publicaciones
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}{' '}
            {/* Keep site description below latest posts or remove if redundant */}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No hay publicaciones.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Publicado el</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Leer más: "${title}"`}
                        >
                          Leer más &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Todas las publicaciones"
          >
            Todas las Publicaciones &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
