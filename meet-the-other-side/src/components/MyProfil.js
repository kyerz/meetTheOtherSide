import React from 'react'

const MyProfil = (props) => {
    return (
<div className="imgContainer" key={props.myCharacter.id} style = {{backgroundImage: `url(${props.myCharacter.image})`}}>
        <div className= "character-infos"> 
            <div className = "character-name"> Name : {props.myCharacter.name} </div>
            <div className = "character-born"> Born : {props.myCharacter.born} </div>
            <div className = "character-location"> Location : {props.myCharacter.homeworld} </div>
        </div>
  </div>
    )
}
export default MyProfil