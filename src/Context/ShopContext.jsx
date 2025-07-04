import React, {createContext, useState} from "react";
import all_product from "../assets/all_product"
export const ShopContext = createContext(null);

const getDefaultCard=()=>{
    let cart={};
    for(let i=0;i<all_product.length;i++){
     cart[i]=0;
    }
    return cart;
}

const ShopContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState(getDefaultCard);
    console.log(cartItems);
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]}))
    }
   
    const getTotalCartAmmount=()=>{
        let totalAmount=0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=all_product.find((product)=>
                product.id=== Number(item))
                totalAmount+=itemInfo.new_price*cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems=()=>{
        let totalItems=0;
        for (const item in cartItems){
            if(cartItems[item]>0){
               totalItems+=cartItems[item];
            }
        }
        return totalItems;
    }
    const contextValue={ getTotalCartItems,getTotalCartAmmount , all_product, cartItems , addToCart , removeFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
              {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;