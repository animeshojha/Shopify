import React from 'react'
import "./BreadCrums.css"
import arrow_icon from "../../assets/arrow_icon.js"
const BreadCrums = (props) => {
  return (
    <div className='breadcrums'>Home
    <img src={arrow_icon} alt='' height="30px"/>SHOP
    <img src={arrow_icon} height="30px"/>{props.category} <img src={arrow_icon} height="30px"/>
    {props.name} <img src={arrow_icon} height="30px"/>
    </div>
  )
}

export default BreadCrums