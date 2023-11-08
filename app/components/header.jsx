import { NavLink } from 'react-router-dom'
import logo from '../../public/img/guitar-glide-text-dark-logo.svg'
import { Link } from '@remix-run/react'

function Header() {
  return (
    <header className='header'>
      <div className='container bar'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='GuitarGlide logo' />
          </Link>
        </div>
        <nav className='navigation'>
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/about'>About</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
