import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>get Exclusive offers on your email</h1>
        <p>Subscribe to our newsLetter and stay updated</p>
        <div>
            <input type='email' placeholder='Enter Your Email'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter