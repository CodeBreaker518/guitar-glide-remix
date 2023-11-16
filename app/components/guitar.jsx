import { Link } from '@remix-run/react'

const Guitar = ({ guitar }) => {
  const { description, image, name, price, url } = guitar
  return (
    <div className='guitar'>
      <img src={image.data.attributes.formats.medium.url} alt={`guitar ${name}`} />
      <div className='content'>
        <h3>{name}</h3>
        <p className='description'>{description}</p>
        <p className='price'>${price}</p>
        <Link className='link' to={`/guitars/${url}`}>
          View product
        </Link>
      </div>
    </div>
  )
}

export default Guitar
