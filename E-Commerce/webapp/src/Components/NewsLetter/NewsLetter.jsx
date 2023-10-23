import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className='newsLetter'>
      <h1>Get Exclusive Offer On your Email</h1>
      <p>Subscribe To Our NewsLetter And Stay Update</p>
      <div>
        <input type="email" placeholder='Your Email ID'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
