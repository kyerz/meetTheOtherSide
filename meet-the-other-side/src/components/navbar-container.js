import React from 'react'
import Logo from './logo'
import '../style/navbar.css'

const NavBar = () => {
  console.log('toto')
  return (
    <div className='wrapper-navbar'>
      <Logo />
      <a>Photo</a>
      <a>Name</a>
      <i className="mail outline big icon"></i>
      <a>Logout</a>
    </div>
  )
}

export default NavBar