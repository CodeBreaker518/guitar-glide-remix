import { Link, useLocation } from '@remix-run/react'

const Navigation = () => {
  const location = useLocation()
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
    </nav>
  )
}

export default Navigation
