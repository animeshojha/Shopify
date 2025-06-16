import React from 'react'
import "./Hero.css"
import arrow_icon from "../../assets/arrow_icon.png"
import hand_icon from "../../assets/hand_icon.png"
import men from "../../assets/men.webp"
const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>Best Deals ! Best Prices</h2>

                <div className='hero-hand-icon'>
                    <p>New</p>
                    <img src={hand_icon} alt='' height="60px"></img>
                </div>
                <p>Collections</p>
                <p>For everyone</p>

                <div className='hero-latest-btn'>
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt='' height="20px"></img>
                </div>
            </div>

            <div className='hero-right'>
                <img src={men} alt='' height="500px"></img>
            </div>
        </div>
    )
}

export default Hero