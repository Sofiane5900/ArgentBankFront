import React from 'react'
import './Navbar.css'
import Logo from '../../designs/img/argentBankLogo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  return (
    <div>
      <nav className="main-nav">
        <a className="main-nav-logo" href="./">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="./sign-in">
          <FontAwesomeIcon icon={faCircleUser}/>       
          &nbsp;Sign In
          </a>
        </div>
    </nav>
    </div>
  )
}

export default Navbar