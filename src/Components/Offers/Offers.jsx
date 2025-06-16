import React from 'react'
import './Offers.css'
import exclusive from "../../assets/exclu.webp"
const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Best Offers For You</p>
            <p>Only ON BEST SELLERS PRODUCTS</p>
             <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive}/>
        </div>
    </div>
  )
}

export default Offers