import React, { useContext } from 'react'
import { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' height="60px"></img>
        <p>Kapda Dukan</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("home") }}>
          <Link to="/">Home</Link>
          {menu === 'home' ? <hr></hr> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}>
          <Link to="/mens">Men</Link>
          {menu === 'mens' ? <hr></hr> : <></>}</li>
        <li onClick={() => { setMenu("women") }}>
          <Link to="/womens">Women</Link>
          {menu === 'women' ? <hr></hr> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}>
          <Link to="/kids">Kids</Link>
          {menu === 'kids' ? <hr></hr> : <></>}</li>
        <li onClick={() => { setMenu("chor-bazar") }}>
        <a  href='https://www.instagram.com' target='_blank'>Chor-Bazar</a>
       </li>


      </ul>
      <div className='nav-login-cart'>
        <button ><Link to="/login">Login</Link></button>
        <Link to='/cart'> <img src={cart_icon} alt='' height="40px" />
       </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
       
      </div>
    </div>
  )
}

export default Navbar