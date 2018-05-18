import React from 'react'
import Logo from './logo'
import '../style/navbar.css'
import Modal from 'react-responsive-modal'

const NavBar = (props) => {
  return (
    <div className='wrapper-navbar'>
      <Logo />
      <div  className="myprofile" style = {{backgroundImage: `url(${props.myCharacter.image})`}}></div>
      <div>{props.myCharacter.name}</div>
      <i className="mail outline big icon" onClick={props.onOpenModal}></i>
        <Modal open={props.open} onClose={props.onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal> 
      <a className='logout'onClick={()=>window.location.reload(true)}>Logout</a>
    </div>
  )
}

export default NavBar