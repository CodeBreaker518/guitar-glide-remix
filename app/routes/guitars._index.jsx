import { useLoaderData } from '@remix-run/react'
import { getGuitars } from '~/models/guitars.server'
import GuitarsList from '~/components/guitars-list'

export function meta() {
  return [
    { charset: 'utf-8' },
    { title: 'GuitarGlide - Shop' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { description: 'GuitarGlide - Our collection of guitars.' },
    { keywords: 'buy, guitar, glide, guitars, cheap, quality' },
  ]
}

export async function loader() {
  const guitars = await getGuitars()
  return guitars.data
}

function Shop() {
  const guitars = useLoaderData()
  return <GuitarsList guitars={guitars} />
}

export default Shop
