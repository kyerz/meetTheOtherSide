import React, { Component } from 'react'
import './../style/characters.css'
import '../style/selection-chars.css'
import CreateChars from '../components/Create-chars.js'
import SelectSide from '../components/Select-side.js'
import NavBar from '../components/navbar-container.js'
import MyProfil from '../components/MyProfil.js'
import LoverProfile from '../components/LoverProfile.js'

const critereMake = ['human', 'droid', 'other', 'wookie']

const getAlternateSide = side => side === 'light' ? 'dark' : 'light'

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
    myCharacter: {},
    page: 1,
    profileSelected: null
  }
  charactersLight = () => this.state.characters.filter(isLightSide)
  charactersDark = () => this.state.characters.filter(isDarkSide)
  getAlternateSide = () => getAlternateSide(this.state.userSide)
  changeSide = () => this.setState({ userSide: this.getAlternateSide() })

  getRandomCharacter = (characters) => {
    return characters[Math.floor(Math.random() * characters.length)]
  }



  changeMyCharacter = (type) => this.setState({ myCharacter: this.getRandomCharacter(type) })
  handleClickLight = () => {
    this.setState({ page: 2 })
    this.setState({ userSide: 'dark' })

    return this.changeMyCharacter(this.charactersLight())
  }
  handleClickDark = () => {
    this.setState({ page: 2 })

    return this.changeMyCharacter(this.charactersDark())
  }
  selectProfile = profileSelected => this.setState({ profileSelected })

  
  
  MakeCheck = () => {
    console.log('setState: ', this.state)
    const checkbox = critereMake.map(elt => {
      return (
        <div key={elt}>
          <input type="checkbox" onChange={e => {
            this.setState({ [elt]: e.target.checked })
            console.log('e.target.checked: ', e.target)
          }} />
          <label>
            {elt}
          </label>
        </div>
      )
    })
    return (
      <div>
        {checkbox}
      </div>
    )
  }
  leFiltre = () => {
    let panier = []
    let i = 0
    while (i < critereMake.length) {
      if (this.state[critereMake[i]]) {
        const enSolde = this.state.characters.filter(char => (char.species === critereMake[i]))
        panier = panier.concat(enSolde)
        console.log('panier: ', panier);
      }
      i++
    }
    return (
      <div>
        IMG A INJECTER
      </div>
    )
  }

  constructor() {
    super()
    fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
      .then(result => result.json())

      .then(characters => {
        this.setState({ characters })
        console.log(characters)
      })
  }

  render() {
    if (this.state.page === 1) {

      return (
        <div className="App">

          <SelectSide characters={this.state.characters} userSide={this.state.userSide} actionLight={this.handleClickLight} actionDark={this.handleClickDark} text="Change Side" />
        </div>
      )
    }
    else {

      if (this.state.profileSelected) {
        const selectProfile = this.state.characters.find(c => c.id === this.state.profileSelected)
        return (
          <div className="App">
            <NavBar myCharacter={this.state.myCharacter} />
            <LoverProfile action={this.selectProfile} {...selectProfile} />
          </div>
        )
      }
      return (
        <div className="App">
          <NavBar myCharacter={this.state.myCharacter} />
          {this.MakeCheck()}
          {this.leFiltre()}
          <CreateChars action={this.selectProfile} characters={this.state.characters} userSide={this.state.userSide} myCharacter={this.state.myCharacter} />
        </div>
      )
    }
  }
}

export default App


