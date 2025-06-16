import React from 'react'
import './RelatedProduct.css'
import Item from '../Item/Item'
import data_product from '../../assets/data.js'
const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
    <h1>Related Products</h1>
    <hr/>
    <div className='relatedproducts-item'>
        {data_product.map((item , i)=>{
       return <Item key={i} name={item.name} image={item.image} id={item.id} new_price={item.new_price} old_price={item.old_price}></Item>

        })}
    </div>
    </div>
  )
}

export default RelatedProduct