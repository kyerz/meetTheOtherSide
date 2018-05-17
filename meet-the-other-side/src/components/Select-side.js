import React from 'react'
import bgLight from '../img/light-side.jpg'
import bgDark from '../img/dark-side.jpg'
import './../style/select-side.css'
import CreateChars from './Create-chars';



const SelectSide = ({ actionLight, actionDark, text }) => {
    return(
        <div className="select-side-wrapper flex">
            <h1 className="home-title">Choose your side</h1>
            <div className="image-wrapper light-side" onClick={actionLight}>
                <img className="image-choice" src={bgLight} alt={bgLight} />
            </div>
            <div className="image-wrapper dark-side" onClick={actionDark}>
                <img className="image-choice" src={bgDark} alt={bgDark} />
            </div>
        </div>
    )
}


export default SelectSide