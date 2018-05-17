import React, { Component } from 'react'

import CreateChars from '../components/Create-chars.js'
import SelectSide from '../components/Select-side.js'

const getAlternateSide = side => side === 'light' ?  'dark' : 'light'

class App extends Component {
  state = {
    characters: [],
    userSide: 'light'
  }

  getAlternateSide = () => getAlternateSide(this.state.userSide)
  changeSide = () => this.setState({ userSide: this.getAlternateSide() })

  constructor() {
    super()
    fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
      .then(result => result.json())
      .then(characters => this.setState({ characters }))
  }

  render() {
    return (
      <div className="App">
        <SelectSide action={this.changeSide} text="Change Side" />
        <CreateChars characters={this.state.characters} userSide={this.state.userSide} />
      </div>
    )
  }
}

export default App

