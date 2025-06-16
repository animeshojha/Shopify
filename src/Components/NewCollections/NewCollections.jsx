import React from 'react'
import './NewCollections.css'
import new_collections from '../../assets/newcollections'
import Item from '../Item/Item'
const NewCollections = () => {
    return (
        <div className='newcollections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className='collections'>
                {new_collections.map((item, i) => {
                    return <Item key={i} name={item.name} image={item.image} id={item.id} new_price={item.new_price} old_price={item.old_price}></Item>
                })}
            </div>
        </div>
    )
}

export default NewCollections