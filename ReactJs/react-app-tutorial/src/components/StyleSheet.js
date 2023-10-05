import React from 'react'
import './myStyle.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div className={`${className} font-xl`}>
      <h1>Welcome To Styling in CSS </h1>
        <p>Welcome To Styling in CSS</p>
        <p>Hello World ...........</p>
        <hr/>
    </div>
  )
}

export default StyleSheet
