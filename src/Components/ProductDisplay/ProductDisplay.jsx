import React from 'react';
import arrow_icon from "../../assets/arrow_icon.png";
import "./ProductDisplay.css";

const ProductDisplay = ({ product }) => {
    return (
        <div className='productdisplay'>
            Home <img src={arrow_icon} alt='' height="10px" />
            SHOP <img src={arrow_icon} height="10px" />
            {product.category} <img src={arrow_icon} height="10px" />
            {product.name}
        </div>
    );
};

export default ProductDisplay;
