import React from 'react'

const MyProfil = (props) => {
    return (
<div className="character-wrapper" key={props.myCharacter.id}>
    <div className="image-wrapper" style = {{backgroundImage: `url(${props.myCharacter.image})`}}></div>
        <div className= "character-infos">
            <div className = "character-name"> Names : {props.myCharacter.name} </div>
            <div className = "character-born"> Born : {props.myCharacter.born} </div>
            <div className = "character-location"> Location : {props.myCharacter.homeworld} </div>
        </div>
  </div>
    )
}
export default MyProfil