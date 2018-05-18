import React from 'react'

const MyProfil = (props) => {
    //console.log(action);
    return (
         <div className="character-wrapper ui grid" key={props.character.id}>
            <i className="arrow circle left icon" onClick={() => props.action()}></i>
                <div className="image column four wide" style={{ backgroundImage: `url(${props.character.image})` }}>
                </div>
                    <div className="character-infos column eight wide">

                        <div className="character-name"> {props.character.name} </div>
                        <div> {props.character.gender} </div>
                        <div> Species : {props.character.species} </div>
                        <div className="character-born"> Born : {props.character.born} </div>
                        <div className="character-location"> Location : {props.character.homeworld} </div>
                        <div className="character-hairColor"> Hair Color : {props.character.hairColor} </div>
                        <div className="character-eyeColor"> Eye Color : {props.character.eyeColor} </div>
                        <div className="character-skinColor"> Skin Color : {props.character.skinColor} </div>
                    </div>
        </div> 
    )
}
export default MyProfil