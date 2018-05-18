import React, { Component } from 'react'
import Liker from '../components/Like.js'
import '../style/characters.css'

const LoverProfile =({action,sendMessage,id,image,name,born,homeworld, height, mass, gender, species, hairColor, eyeColor, skinColor}) => {
    return (
        <div className="character-wrapper ui grid" key={id}>
            <i className="arrow circle left icon" onClick={() => action()}></i>
            <div className="image column four wide" style={{ backgroundImage: `url(${image})` }}>
                <Liker action={sendMessage} characters ={{id, species, name}} />
            </div>
                <div className="character-infos column eight wide">

                    <div className="character-name"> {name} </div>
                    <div> {gender} </div>
                    <div> Species : {species} </div>
                    <div className="character-born"> Born : {born} </div>
                    <div className="character-location"> Location : {homeworld} </div>
                    <div className="character-hairColor"> Hair Color : {hairColor} </div>
                    <div className="character-eyeColor"> Eye Color : {eyeColor} </div>
                    <div className="character-skinColor"> Skin Color : {skinColor} </div>
                </div>

        </div>
    )
}
export default LoverProfile