import React from 'react'
import '../style/characters.css'

const Pic = ({id,image,name,born,homeworld,action}) => {

  return (
    <div  className="imgContainer" onClick={() => action(id)} key={id} style = {{backgroundImage: `url(${image})`}}>
        <div className= "character-infos"> 
            <div className = "character-name"> Name : {name} </div>
            <div className = "character-born"> Born : {born} </div>
            <div className = "character-location"> Location : {homeworld} </div>
        </div>
  </div> )
}
const isLightSide = ({ affiliations }) =>
  (affiliations.includes("Galactic Republic")
    || affiliations.includes("Resistance")
    || affiliations.includes("Jedi Order")
    || affiliations.includes("Alliance to Restore the Republic")
    || affiliations.includes("Lars family")
    || affiliations.length === 0)
  && !affiliations.includes("Hutt Clan")
  && !affiliations.includes("Sith")
 "Hutt Clan" 
const isDarkSide = character => !isLightSide(character)

const sideFilters = {
  light: isLightSide,
  dark: isDarkSide
}

const CreateChars = ({ characters, userSide, action }) => 
  <div className="charList">
    {characters
      .filter(sideFilters[userSide])
      .map(c => Pic({ action, ...c }))}
  </div>

 


export default CreateChars