import { Meta, Links, Outlet, Scripts, LiveReload, useRouteError, isRouteErrorResponse, Link } from '@remix-run/react'
import styles from '~/styles/global.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const error = useRouteError()
  if (error?.status === 404) {
    return [
      {
        title: `GuitarGlide - Error 404`,
      },
      {
        description: `Content not found`,
      },
    ]
  }

  return [
    { charset: 'utf-8' },
    { title: 'GuitarGlide - Remix' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { description: 'GuitarGlide buy guitars, get into guitar courses and share your experiences.' },
    { keywords: 'guitar, glide, guitars, cheap, quality, course, courses' },
  ]
}

export function links() {
  return [
    { rel: 'stylesheet', href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'true' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700;900&display=swap' },
    { rel: 'stylesheet', href: styles },
  ]
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

/** Error managment */

export function ErrorBoundary() {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <p className='error'>
          {error.status} {error.statusText}
        </p>
        <Link className='error-link' to='/'>
          Go Back
        </Link>
      </Document>
    )
  }
}
