import { Link, useLocation } from '@remix-run/react'
import shoppingCart from '../../public/img/shopping-cart.png'

const Navigation = () => {
  const location = useLocation()
  // const { cart } = useOutletContext()
  return (
    <nav className='navigation'>
      <Link to='/' className={`${location.pathname === '/' ? 'active' : ''} `}>
        Home
      </Link>
      <Link to='/guitars' className={`${location.pathname === '/guitars' ? 'active' : ''} `}>
        Shop
      </Link>
      <Link to='/blog' className={`${location.pathname === '/blog' ? 'active' : ''}`}>
        Blog
      </Link>
      <Link to='/about' className={`${location.pathname === '/about' ? 'active' : ''} `}>
        About
      </Link>
      <Link to='/cart' className={`${location.pathname === '/cart' ? 'active' : ''} `}>
        <img src={shoppingCart} alt='shopping cart' />
      </Link>
    </nav>
  )
}

export default Navigation
