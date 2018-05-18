import React, { Component } from 'react'
import './../style/characters.css'
import '../style/selection-chars.css'
import '../style/navbar.css'
import CreateChars from '../components/Create-chars.js'
import SelectSide from '../components/Select-side.js'
import NavBar from '../components/navbar-container.js'
import MyProfil from '../components/MyProfil.js'
import LoverProfile from '../components/LoverProfile.js'


const getAlternateSide = side => side === 'light' ?  'dark' : 'light'

const isLightSide = (characters) =>
   (characters.affiliations.includes("Galactic Republic")
     || characters.affiliations.includes("Resistance")
     || characters.affiliations.includes("Jedi Order")
     || characters.affiliations.includes("Alliance to Restore the Republic")
     || characters.affiliations.includes("Lars family")
     || characters.affiliations.length === 0)
   && !characters.affiliations.includes("Hutt Clan")
   && !characters.affiliations.includes("Sith")
  "Hutt Clan" 
 const isDarkSide = character => !isLightSide(character)
 
 const sideFilters = {
   light: isLightSide,
   dark: isDarkSide
 }
  

class App extends Component {
  state = {
    characters: [],
    userSide: 'light',
    myCharacter:{} ,
    page : 1,
    profileSelected : null,
    notif:0,
    message : [],
    open : false

  }
  charactersLight = ()=>this.state.characters.filter(isLightSide)
  charactersDark =()=> this.state.characters.filter(isDarkSide)
  getAlternateSide = () => getAlternateSide(this.state.userSide)
  changeSide = () => this.setState({ userSide: this.getAlternateSide() })
  
   getRandomCharacter = (characters) => {
   return characters[Math.floor(Math.random()*characters.length)]
  }
     
  sendMessage = (characterSelect) => {
    console.log("sendmessage",characterSelect.id);
     this.setState({notif:1})
    let message ='sendMessagreTest'
    if (characterSelect.id === 4) {
      message="Viens sur mes genoux ... et appelle moi papa"
    }
    else if (characterSelect.id === 20 ) {
      message = "Ma force en toi tu sentiras"
    }
  else if (characterSelect.id === 13 ) {
      message = "Heiiiiiiinnnnnnnnnnnggggggggggggggggggggggggggg"
    }
  else if (characterSelect.id === 14 ) {
      message = "Han solo"
    }
 else if (characterSelect.species === "droid" ) {
      message = "Je cherche quelqu'un pour lubrifier mes rouages"
    }
 /*else if (characterSelect.diedLocation ) {
      message = `je t'attends à ${characterSelect.diedLocation}`
    }
 else if (characterSelect.diedLocation ) {
      message = `je t'attends à ${characterSelect.diedLocation}`
    }*/
  else {message = " je t'attends"}
  console.log(message)
  let name = characterSelect.name
  let msg = {name,message}
  this.setState({ message: [ ...this.state.message, msg ]})
  console.log("state.message", this.state.message)

  }

  changeMyCharacter = (type) => this.setState({ myCharacter: this.getRandomCharacter(type) })
  handleClickLight = () =>{
    this.setState({page :2})
    this.setState({userSide:'dark'})
    
   return this.changeMyCharacter(this.charactersLight())
  }
  handleClickDark = () =>{
    this.setState({page :2})
    
   return this.changeMyCharacter(this.charactersDark())
  }
  selectProfile = profileSelected => this.setState({profileSelected})
  
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  constructor() {
    super()
    fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
      .then(result => result.json())
      
      .then(characters =>{
        this.setState({ characters })
       console.log(characters)
      })
  }

  render() {

    if(this.state.page===1){
      
    return (
      <div className="App">

        <SelectSide characters={this.state.characters} userSide={this.state.userSide} actionLight={this.handleClickLight} actionDark={this.handleClickDark} text="Change Side" />
      </div>
    )}
    else {
      
      if(this.state.profileSelected){
        const selectProfile = this.state.characters.find(c => c.id === this.state.profileSelected )
        return (
          <div className="App">
        <NavBar myCharacter={this.state.myCharacter} open={this.state.open} onOpenModal={this.onOpenModal} onCloseModal={this.onCloseModal} message = {this.state.message}/>
        <LoverProfile action={this.selectProfile} {...selectProfile} sendMessage = {this.sendMessage} />
       </div>
        )
      }
      return (
        <div className="App">
        <NavBar myCharacter={this.state.myCharacter} open={this.state.open} onOpenModal={this.onOpenModal} onCloseModal={this.onCloseModal} message = {this.state.message} />
        <CreateChars  action={this.selectProfile} characters={this.state.characters} userSide={this.state.userSide}   myCharacter={this.state.myCharacter} />
       </div>
      )
    }
  }
}

export default App

