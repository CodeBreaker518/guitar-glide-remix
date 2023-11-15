import { Link, useLocation } from '@remix-run/react'

const Navigation = () => {
  const location = useLocation()
  return (
    <nav className='navigation'>
      <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
        Home
      </Link>
      <Link to='/shop' className={location.pathname === '/shop' ? 'active' : ''}>
        Shop
      </Link>
      <Link to='/blog' className={location.pathname === '/blog' ? 'active' : ''}>
        Blog
      </Link>
      <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>
        About
      </Link>
    </nav>
  )
}

export default Navigation
