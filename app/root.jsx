import { Meta, Links, Outlet, Scripts, LiveReload } from '@remix-run/react'
import styles from '~/styles/global.css'
import Header from '~/components/header'

export function meta() {
  return [
    { charset: 'utf-8' },
    { title: 'GuitarGlide - Remix' },
    { viewport: 'width=device-width,initial-scale=1' },
    { description: 'GuitarGlide buy guitars and get into guitar courses' },
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

        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
