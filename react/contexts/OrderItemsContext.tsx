import React, { useEffect } from 'react'
import { OrderItems } from 'vtex.order-items'
import { useProduct } from 'vtex.product-context'

const OrderItemsContext = () => {

  const {addItems} = OrderItems.useOrderItems()
  const productContext = useProduct()
  const selectedItem = productContext?.selectedItem

  const item = {
    id: selectedItem?.itemId,
    quantity: 1,
    seller: selectedItem?.sellers[0].sellerId
  }

  useEffect(() => {
    console.log(item)
    addItems([item])
  }, [])


  /*{
      id: "245",
      quantity: 1,
      seller: "1"
    }*/

  return (
    <div>OrderItemsContext</div>
  )
}

export default OrderItemsContext
