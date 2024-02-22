import React, {useState, MouseEvent, MouseEventHandler} from 'react'
import { OrderItems } from 'vtex.order-items'
import { useProduct } from 'vtex.product-context'



const AddToCartButton = () => {
  const [quantity, setQuantidade] = useState(0);
  const {addItems} = OrderItems.useOrderItems()
  const productContext = useProduct()

  const addTocart: MouseEventHandler<HTMLButtonElement> = (event:  MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()

     const selectedItem = productContext?.selectedItem


       const item = {
         id: selectedItem?.itemId,
         quantity: quantity,
         seller: selectedItem?.sellers[0].sellerId
       }


     console.log(selectedItem?.itemId + ", " +  selectedItem?.sellers[0].sellerId)
     console.log(item)
     addItems([item])

   }


  const decrease = () => {
    if (quantity > 0) {
      setQuantidade(quantity - 1);
    }
  };

  const increase = () => {
    setQuantidade(quantity + 1);
  };

  return (
    <div>
      <button onClick={decrease}>-</button>

      <input type="text" value={quantity} readOnly />

      <button onClick={increase}>+</button>

      <button onClick={addTocart}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default AddToCartButton
