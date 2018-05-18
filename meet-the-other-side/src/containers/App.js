import React, { Component } from 'react'
import './../style/characters.css'
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
    profilSelected : null
  }

  getAlternateSide = () => getAlternateSide(this.state.userSide)
  changeSide = () => this.setState({ userSide: this.getAlternateSide() })
  
   getRandomCharacter = (characters, userSide) => {
    console.log("getsomecharandom", characters)
    console.log("user side", userSide )
    const charactersLight = characters.filter(isLightSide)
    const charactersDark = characters.filter(isDarkSide)
    console.log("getDark", charactersDark)
    console.log("getLight", charactersLight)
   if (userSide === 'dark') {
     console.log("sideL",userSide )
    return charactersLight[Math.floor(Math.random()*charactersLight.length)]
    
   }
   console.log("sideD",userSide )
   return charactersDark[Math.floor(Math.random()*charactersDark.length)]

 }
     
    
  
  changeMyCharacter = (userSide) => this.setState({ myCharacter: this.getRandomCharacter(this.state.characters, userSide) })
  handleClickLight = () =>{
    this.setState({page :2})
    this.setState({userSide:'dark'})
   return this.changeMyCharacter(this.state.userSide)
  }
  handleClickDark = () =>{
    this.setState({page :2})
   return this.changeMyCharacter(this.state.userSide)
  }
  selectProfile = profileSelected => this.setState({profileSelected})

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
      console.log("character sleted side", this.state.myCharacter.name,this.state.myCharacter.id)
      if(this.state.profileSelected){
        const selectProfile = this.state.characters.find(c => c.id === this.state.profileSelected )
        return (
          <div className="App">
        <LoverProfile action={this.selectProfile} {...selectProfile} />
       </div>
        )
      }
      return (
        <div className="App">
        <NavBar />
        <CreateChars  action={this.selectProfile} characters={this.state.characters} userSide={this.state.userSide}   myCharacter={this.state.myCharacter} />
       </div>
      )
    }
  }
}

export default App

