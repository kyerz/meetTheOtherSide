import React from 'react'

const Button = ({ action, text }) =>
    <button onClick={action}> {text} </button>

Button.Red = ({ action, text }) =>
    <button onClick={action} style={{ color: 'red' }}> {text} </button>

export default Button