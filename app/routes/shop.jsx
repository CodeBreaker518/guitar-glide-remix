import { useLoaderData } from '@remix-run/react'
import { getGuitars } from '~/models/guitars.server'
import GuitarsList from '~/components/guitars-list'
import styles from '~/styles/guitars.css'

export function meta() {
  return [
    { charset: 'utf-8' },
    { title: 'GuitarGlide - Shop' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { description: 'GuitarGlide - Our collection of guitars.' },
    { keywords: 'buy, guitar, glide, guitars, cheap, quality' },
  ]
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export async function loader() {
  const guitars = await getGuitars()
  return guitars.data
}

function Shop() {
  const guitars = useLoaderData()
  return (
    <main className='container'>
      <GuitarsList guitars={guitars} />
    </main>
  )
}

export default Shop
