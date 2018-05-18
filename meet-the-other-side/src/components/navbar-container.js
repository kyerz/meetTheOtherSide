import React from 'react'
import Logo from './logo'
import '../style/navbar.css'

const NavBar = (props) => {
  console.log('toto')
  return (
    <div className='wrapper-navbar'>
      <Logo />
      <div  className="myprofile" style = {{backgroundImage: `url(${props.myCharacter.image})`}}></div>
      <div>{props.myCharacter.name}</div>
      <i className="mail outline big icon"></i>
      <a>Logout</a>
    </div>
  )
}

export default NavBar