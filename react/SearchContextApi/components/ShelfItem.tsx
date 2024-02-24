import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { HANDLES } from '../handles'
import { formatPrice } from '../../helpers/Helper'


const ShelfItem = ({id, imageUrl, name, price, sellingPrice, addToCart}: Shelf) => {
  const handles = useCssHandles(HANDLES)

  return (
    <div key={id} className={`${handles.shelfItem}`}>
        <div className={`${handles.shelfImage}`}>
          <img src={`${imageUrl}`} alt={`${name}`} className={`${handles.shelfImage__img}`} />
        </div>
        <h2 className={`${handles.shelfProductName}`}> {`${name}`} </h2>
        <div className={`${handles.shelfPrice}`}>
          <p className={`${handles.shelfSeelingPrice}`}>
            {formatPrice(sellingPrice)}
            </p>
          <p className={`${handles.shelfBestPrice}`}>
            {formatPrice(price)}
           </p>
        </div>

        <div className={`${handles.add_button}`} id={id} onClick={addToCart}>
            Adicionar ao carrinho
        </div>
    </div>
  )
}

export default ShelfItem
