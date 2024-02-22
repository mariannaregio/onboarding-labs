import React, {useState, MouseEvent, MouseEventHandler} from 'react'
 //import { OrderItems } from 'vtex.order-items'
 import { useProduct } from 'vtex.product-context'

const addTocart: MouseEventHandler<HTMLButtonElement> = (event:  MouseEvent<HTMLButtonElement>) => {
  event.preventDefault()
  event.stopPropagation()
  // const {addItems} = OrderItems.useOrderItems()
   const productContext = useProduct()
   const selectedItem = productContext?.selectedItem

  //  const item = {
  //    id: selectedItem?.itemId,
  //    quantity: 1,
  //    seller: selectedItem?.sellers[0].sellerId
  //  }


  console.log(selectedItem?.itemId + ", " +  selectedItem?.sellers[0].sellerId)
  console.log("clcique")
  //addItems([item])
  console.log("clicou")

 }

const AddToCartButton = () => {
  const [quantity, setQuantidade] = useState(0);


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
