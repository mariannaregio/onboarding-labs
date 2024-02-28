import React from 'react'

import {useProduct} from "vtex.product-context"

const ProductContext = () => {

  const ProductContext = useProduct();

  //console.log('product', ProductContext)

  const product = ProductContext?.product

const totalPrice: number | undefined =  product?.priceRange?.sellingPrice.highPrice

let newPrice = 0


const calculateDiscount = (price:number, discount: number) => {
    const discountValue =  discount * price

    const priceWithDiscount = price - discountValue

    return priceWithDiscount
}

if (typeof totalPrice === 'number') {
   newPrice = calculateDiscount(totalPrice, 0.05)
}


  return (
    <div>{product?.productName} preço {totalPrice} 5% desconto {newPrice}</div>
  )
}

export default ProductContext
