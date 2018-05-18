import React from 'react'
import '../style/navbar.css'

import logo from '../img/logo.jpg'

const Logo = () => {
  return (
    <div className='logo-container'>
      <img className='logo' src={logo} alt="logo"/>
      <h1>Fuck The Other Side</h1>
    </div>
    
  )
}

export default Logo