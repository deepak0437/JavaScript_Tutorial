import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

function Offers() {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offer For You</h1>
        <p>Only On Best Sellers Products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-righht">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
