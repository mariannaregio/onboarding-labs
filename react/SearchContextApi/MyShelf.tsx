import React, { useState, useEffect } from 'react'
import ShelfItem from './components/ShelfItem'
import { SliderLayout } from 'vtex.slider-layout'
import { useCssHandles } from 'vtex.css-handles'
import { OrderItems } from 'vtex.order-items'


interface Product {
  link: string;
  items: {
    images: {
      imageUrl: string;
    }[];
    sellers: {
      commertialOffer: {
        ListPrice: number;
        Price: number;
      };
    }[];
  };
  productName: string;
}

const CSS_HANDLES = [
  'shelf_container'
]



const MyShelf = () => {
  const { addItems } = OrderItems.useOrderItems()

  const handles = useCssHandles(CSS_HANDLES)

  const [arrayProducts, setArrayProducts] = useState<Array<Product>>()



  useEffect(() => {
    getCategoryItems()
  }, [])

  const getCategoryItems = async () => {
    await fetch('api/catalog_system/pub/products/search/acessorios')
      .then(res => res.json())
      .then((data) => {
        setArrayProducts(data)
      })
  }

  console.log('arrayProducts', arrayProducts)

  const addToCart = async (event :any) => {
  const id = event.target.id

    //passei o id do produto na div do botao, dessa forma consegui acessar atraves do evento que dispara o botao.

     await fetch(`/api/catalog_system/pub/products/search?fq=productId:${id}`)
     .then(res => res.json())
     .then((data) => {
       populateCart(data)
       console.log(data)
     })
  }

   const populateCart = (data: any) => {
     const cart = {
       id: data[0].items[0].itemId,
       name: data[0].productName,
       seller: data[0].items[0].sellers[0].sellerId,
       price: data[0].items[0].sellers[0].commertialOffer.Price
     }

     console.log(cart)
     addItems([cart])
   }

  return (
    <div className={`${handles.shelf_container}`}>
       {arrayProducts ?
       <>
       <SliderLayout
       itemsPerPage={{
          desktop: 3,
          tablet: 3,
          phone: 2
        }}
        showPaginationDots="never"
        >
          {arrayProducts.map((product: any) => (
            <ShelfItem
            id={product.productId}
            linkUrl={product.link}
            imageUrl={product.items[0].images[0].imageUrl}
            name={product.productName}
            price={product.items[0].sellers[0].commertialOffer.ListPrice}
            sellingPrice={product.items[0].sellers[0].commertialOffer.Price}
            addToCart={addToCart}
            />

          ))}
       </SliderLayout>
        </>


        : 'ERRO'}

    </div>
  )
}

export default MyShelf
