import React from 'react'
import Logo from './logo'
import '../style/navbar.css'
import Modal from 'react-responsive-modal'

const CreateMsg = (message) => {
  console.log("msg", message)
  const msgList = message['message'].map((msg, index) => <div className="msg" key={index}> {msg.name} :  {msg.message} </div>)
  console.log("List", msgList)
return ( <div className="msgContent"> {msgList} </div> )
  } 


const NavBar = (props) => {
  return (
    <div className='wrapper-navbar'>
      
      <Logo />
      <div  className="myprofile" onClick={() => props.action()} style = {{backgroundImage: `url(${props.myCharacter.image})`}}></div>
      <div>{props.myCharacter.name}</div>
      <i className="mail outline big icon" onClick={props.onOpenModal}></i>
        <Modal open={props.open} onClose={props.onCloseModal} center>
          <h2>Your messages</h2>
          <CreateMsg message = {props.message} />

        </Modal> 
      <a className='logout'onClick={()=>window.location.reload(true)}>Logout</a>
    </div>
  )
}

export default NavBar
