import React, { Component } from 'react'
import './../style/characters.css'
import CreateChars from '../components/Create-chars.js'
import SelectSide from '../components/Select-side.js'
import MyProfil from '../components/MyProfil.js'

const getAlternateSide = side => side === 'light' ?  'dark' : 'light'

class App extends Component {
  state = {
    characters: [],
    userSide: 'light',
    myCharacter:{} ,
    page : 1
  }

  getAlternateSide = () => getAlternateSide(this.state.userSide)
  changeSide = () => this.setState({ userSide: this.getAlternateSide() })
  
   getRandomCharacter =characters=>characters[Math.floor(Math.random()*characters.length)]
    
  
  changeMyCharacter = () => this.setState({ myCharacter: this.getRandomCharacter(this.state.characters) })
  handleClickLight = () =>{
    this.setState({page :2})
    this.setState({userSide:'dark'})
   return this.changeMyCharacter()
  }
  handleClickDark = () =>{
    this.setState({page :2})
    
    
   return this.changeMyCharacter()
  }

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
      console.log('deux',this.state.myCharacter)
      return (
        <div className="App">
        <CreateChars  characters={this.state.characters} userSide={this.state.userSide}   myCharacter={this.state.myCharacter} />
       </div>
      )
    }
  }
}

export default App

