import React from 'react'
import '../style/characters.css'

const LoverProfile =({id,image,name,born,homeworld,action}) => {
    return (
        <div  className="imgContainer" style = {{backgroundImage: `url(${image})`}}>
        <div className= "character-infos"> 
            <div className = "character-name"> Name : {name} </div>
            <div className = "character-born"> Born : {born} </div>
            <div className = "character-location"> Location : {homeworld} </div>
        </div>
        <button onClick={() => action()}>Return</button>
  </div>
    )
}
export default LoverProfile