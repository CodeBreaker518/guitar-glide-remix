import { useLoaderData, useRouteError } from '@remix-run/react'
import { getGuitar } from '~/models/guitars.server'
import styles from '~/styles/guitars.css'

export async function loader({ params }) {
  const { guitarUrl } = params
  console.log(guitarUrl)
  const guitar = await getGuitar(guitarUrl)

  // guitar not found?
  if (guitar.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitar not Found',
    })
  }

  return guitar
}

export function meta({ data }) {
  return [
    { charset: 'utf-8' },
    { title: `Guitar Glide - Buy ${data.data[0].attributes.name}` },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { description: `Guitar Glide - Buy guitars, guitars on sale, guitar ${data.data[0].attributes.name}` },
    { keywords: 'buy, guitar, glide, guitars, cheap, quality' },
  ]
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

const GuitarUrl = () => {
  const guitar = useLoaderData()
  const { name, description, image, price } = guitar.data[0].attributes
  return (
    <main className='container guitar'>
      <img src={image.data.attributes.url} alt={`guitar ${name}`} />

      <div className='content'>
        <h2 className='heading'>{name}</h2>
        <p className='description'>{description}</p>
        <p className='price'>${price}</p>
        <button className='btn btn-primary'>Add to cart</button>
      </div>
    </main>
  )
}

export default GuitarUrl
