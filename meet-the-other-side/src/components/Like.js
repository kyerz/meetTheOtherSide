import React, { Component } from 'react'
    
class Liker extends Component {
    state = {
        active: false
    }
    
    handleClick = event => {
        if (this.state.active === false) {
            this.setState({ active: true })
            console.log("props",this.props.characters)
            this.props.action(this.props.characters)
        } else {
            this.setState({ active: false })
        }
    }

    render() {
        if (this.state.active === false) {
            return <i className="heart icon" onClick={this.handleClick}></i>
        } else {
            return <i className="heart icon active" onClick={this.handleClick}></i>
        }
    }
}

export default Liker