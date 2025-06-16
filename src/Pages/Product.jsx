import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DisplayProducts from '../Components/DisplayProducts/DisplayProducts';
import Description from '../Components/Description/Description';
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct';
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <ProductDisplay product={product}></ProductDisplay>
      <DisplayProducts product={product}></DisplayProducts>
      <Description></Description>
      <RelatedProduct></RelatedProduct>
    </div>
  )
}

export default Product