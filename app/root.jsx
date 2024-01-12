import { useState, useEffect } from 'react'
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
  Link,
  useNavigate,
} from '@remix-run/react'
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
  const localStorageCart = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  const [cart, setCart] = useState(localStorageCart)
  const navigate = useNavigate()

  const addToCart = (guitar) => {
    if (cart.some((guitarState) => guitarState.id === guitar.id)) {
      // iterate over the array and identify the duplicated guitar
      const updatedCart = cart.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          // update the quantity
          guitarState.quantity = guitar.quantity
        }
        return guitarState
      })
      // add to cart
      setCart(updatedCart)
      navigate('/cart')
    } else {
      // new register
      setCart([...cart, guitar])
      navigate('/guitars')
    }
  }

  const updateQuantity = (guitar) => {
    const updatedCart = cart.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        // update the quantity
        guitarState.quantity = guitar.quantity
      }
      return guitarState
    })
    // add to cart
    setCart(updatedCart)
  }

  const deleteFromCart = (id) => {
    const updatedCart = cart.filter((guitarState) => guitarState.id !== id)
    updatedCart.length === 0 && localStorage.setItem('cart', '[]')
    setCart(updatedCart)
  }

  // UseEffect para grabar en el LocalStorage
  useEffect(() => {
    if (cart?.length === 0) return
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // useEffect para cargar el state con info del LocalStorage
  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem('cart')) ?? []
    setCart(cartLS)
  }, [])

  return (
    <Document>
      <Outlet
        context={{
          cart,
          addToCart,
          updateQuantity,
          deleteFromCart,
        }}
      />
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
