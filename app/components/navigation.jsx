import { Link, useLocation } from '@remix-run/react'

const Navigation = () => {
  const location = useLocation()
  return (
    <nav className='navigation'>
      <Link to='/' className={`${location.pathname === '/' ? 'active' : ''} nav-link`}>
        Home
      </Link>
      <Link to='/shop' className={`${location.pathname === '/shop' ? 'active' : ''} nav-link`}>
        Shop
      </Link>
      <Link to='/blog' className={`${location.pathname === '/blog' ? 'active' : ''} nav-link`}>
        Blog
      </Link>
      <Link to='/about' className={`${location.pathname === '/about' ? 'active' : ''} nav-link`}>
        About
      </Link>
    </nav>
  )
}

export default Navigation
