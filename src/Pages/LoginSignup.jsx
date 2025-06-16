import React from 'react'
import "../CSS/LoginSignup.css"
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email address'/>
          <input type='password' placeholder='Password'/>
        <button>Continue</button>
        </div>
        <p className='loginsignup-login'>
          Already have an accouny?<span>Login here</span>
        </p>
        <div className='loginsignup-agree'>
          <input type='checkbox'/>
          <p>By Continuing , i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup