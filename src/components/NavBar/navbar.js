import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import WhiteButton from '../Button/WhiteButton'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img className='logo' alt='logo'/>
        <div className="desktopMenu">
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem">About</Link>
          <Link className="desktopMenuListItem">Portfolio</Link>
          <Link className="desktopMenuListItem">Clients</Link>
        </div>
       <WhiteButton text="Contact me" />
    </nav>
  )
}

export default Navbar
