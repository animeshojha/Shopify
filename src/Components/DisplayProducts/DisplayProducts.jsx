import React, { useContext } from 'react'
import star_icon from "../../assets/star_icon.png"
import dull_star_icon from "../../assets/star_dull_icon.png"
import "./DisplayProducts.css"
import { ShopContext } from '../../Context/ShopContext'
const DisplayProducts = (props) => {
    const { product } = props;
    const{addToCart}=useContext(ShopContext)
    return (
        <div className='displayproduct'>
            <div className='displayproduct-left'>
                <div className='displayproduct-img-list'>
                    <img src={product.image} alt='' height="150px" />
                    <img src={product.image} alt='' height="150px" />
                    <img src={product.image} alt='' height="150px" />
                </div>
                <div className='displayproduct-img'>
                    <img className='displayproduct-main-img' src={product.image} alt='' height="300px" />
                </div>
            </div>
            <div className='displayproduct-right'>
                <h1> {product.name}</h1>
                <div className='displayproduct-right-stars'>
                    <img src={star_icon} alt='' height="20px" />
                    <img src={star_icon} alt='' height="20px" />
                    <img src={star_icon} alt='' height="20px" />
                    <img src={star_icon} alt='' height="20px" />
                    <img src={dull_star_icon} alt='' height="20px" />
                    <span>{"(130)"}</span>
                </div>
                <div className='displayproduct-right-prices'>
                    <div className='displayproduct-right-price-old'>
                        ${product.old_price}
                    </div>
                    <div className='displayproduct-right-price-new'>
                        {product.new_price}
                    </div>
                </div>

                <div className='displayproduct-right-description'>
                    Lorem ipsum dolor it amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className='displayproduct-right-size'>
                    <h1>Select Size</h1>
                    <div className='displayproduct-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button 
                onClick={()=>{addToCart(product.id)}}
                className='displayproduct-right-button'>ADD TO CART</button>
                <div className='displayproduct-right-category'>
                    <span>Category:</span><span>Women ,T-Shirt , Crop Top</span>
                </div>
                <div className='displayproduct-right-category'>
                    <span>Tags:</span><span>Modern ,Latest , Trend Sort</span>
                </div>

            </div>
        </div>
    )
}

export default DisplayProducts