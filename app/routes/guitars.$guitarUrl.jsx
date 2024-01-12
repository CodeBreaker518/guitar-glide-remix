import { useLoaderData, useOutletContext } from '@remix-run/react'
import { getGuitar } from '~/models/guitars.server'
import { useState } from 'react'

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

const GuitarUrl = () => {
  const { addToCart } = useOutletContext()

  const [quantity, setQuantity] = useState(0)

  const guitar = useLoaderData()
  const { name, description, image, price } = guitar.data[0].attributes

  const handleSubmit = (e) => {
    e.preventDefault()

    if (quantity < 1) {
      alert('Please select a quantity')
      return
    }
    const selectedGuitar = {
      id: guitar.data[0].id,
      name,
      price,
      quantity,
      image: image.data.attributes.url,
    }

    addToCart(selectedGuitar)
  }

  return (
    <div className='guitar'>
      <img src={image.data.attributes.url} alt={`guitar ${name}`} />

      <div className='content'>
        <h2 className='heading'>{name}</h2>
        <p className='description'>{description}</p>
        <p className='price'>${price}</p>

        <form className='formulary' onSubmit={handleSubmit}>
          <label htmlFor='quantity'>Quantity</label>
          <select onChange={(e) => setQuantity(Number(e.target.value))} id='quantity'>
            <option value='0'>-- Select --</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          <input type='submit' value='Add to Cart' />
        </form>
      </div>
    </div>
  )
}

export default GuitarUrl
