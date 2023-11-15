import { Link } from '@remix-run/react'
import Navigation from './navigation'
import logo from '../../public/img/guitar-glide-text-dark-logo.svg'

function Header() {
  return (
    <header className='header'>
      <div className='container bar'>
        <Link to='/'>
          <img src={logo} className='logo' alt='GuitarGlide logo' />
        </Link>

        <Navigation />
      </div>
    </header>
  )
}

export default Header
