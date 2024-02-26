import React, { useState, MouseEvent, MouseEventHandler } from 'react'
import { OrderItems } from 'vtex.order-items'
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES } from '../handles/classes'


const AddToCart = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const [quantity, setQuantity] = useState(1);
  const { addItems } = OrderItems.useOrderItems()
  const productContext = useProduct()
  const selectedItem = productContext?.selectedItem

  const addToCart: MouseEventHandler<HTMLButtonElement> = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()

    const item = {
      id: selectedItem?.itemId,
      quantity: quantity,
      seller: selectedItem?.sellers[0].sellerId,
      price: selectedItem?.sellers[0].commertialOffer.Price
    }
    addItems([item])
  }

  const decrease = () => {
    if (quantity > 0)
      setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (

    <div className={`${handles.container}`}>

      <div className={`${handles.input_container}`}>
        <button className={`${handles.decrease}`} onClick={decrease}>-</button>
        <input className={`${handles.input_quantity}`} type="text" value={quantity} readOnly />
        <button className={`${handles.increase}`} onClick={increase}>+</button>
      </div>

      <button className={`${handles.add_button}`} onClick={addToCart} disabled={quantity === 0}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default AddToCart
