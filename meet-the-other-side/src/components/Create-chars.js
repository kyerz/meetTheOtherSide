import React, {Component} from 'react'

const Pic = ({ id, image }) => 
  <div className="imgContainer" key={id}>
    <img className= "charImg" src={image} alt="alt"/>
  </div>

const isLightSide = ({ affiliations }) =>
  (affiliations.includes("Galactic Republic")
    || affiliations.includes("Resistance")
    || affiliations.includes("Jedi Order"))
  && !affiliations.includes("Galactic Empire")

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