import React from 'react'

const Pic = ({ id, image, name, wiki }) => 
  <div className="imgContainer" key={id}>
    <img className= "charImg" src={image} alt="alt"/>
    <div className= "charDesc"> 
        <div className = "charName"> name : {name} </div>
        <div className = "charWiki"> wiki : {wiki} </div>
    </div>
  </div>

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

const CreateChars = ({ characters, userSide }) =>
  <div className="charList">
    {characters
      .filter(sideFilters[userSide])
      .map(Pic)}
  </div>

export default CreateChars