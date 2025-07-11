import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../../assets/remove.webp"
const CartItems = () => {
    const { all_product, cartItems, removeFromCart , getTotalCartAmmount } = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div key={e.id}>
                        <div className='cartitems-format cartitems-format-main'>
                            <img src={e.image} alt='' className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>
                                {cartItems[e.id]}
                            </button>
                            <p>{e.new_price * cartItems[e.id]}</p>
                            <img src={remove_icon} height="20px"
                                onClick={() => removeFromCart(e.id)}
                                className='cartitems-remove-icon'
                            />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-items'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmmount()}</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-items'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-items'>
                            <p>Total</p>
                            <p>${getTotalCartAmmount()}</p>
                        </div>
                    </div>
                   <button>PROCESS TO CHECKOUT</button> 
                </div>
                <div className='cartitems-promocode'>
                    <p>If you have a promo code, </p>
                    <div className='cartitems-promobox'>
                        <input type='text' placeholder='promocode'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
