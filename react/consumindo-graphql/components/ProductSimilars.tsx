 import React from 'react'
 import { useQuery } from 'react-apollo'
 import { useProduct } from 'vtex.product-context'
 import GET_PRODUCTS from "../../graphql/product.gql"
 import ProductSimilarsItem from './ProductSimilarsItem'
import { Product } from 'vtex.product-context/react/ProductTypes'


 const ProductSimilars = () => {
   const productContext = useProduct() || null

   const slug = productContext?.product?.cacheId


   const { loading, error, data } = useQuery(GET_PRODUCTS, {
     variables: {
       slug: slug
     }
   })

   const similars: [Product] = data?.product.recommendations.similars

   if (loading || error) return null

   console.log('similars', similars)

   return (
     <>
      {similars && similars.map((item) => {
        return <ProductSimilarsItem link={item.link} image={item.items[0].images[0].imageUrl} name={item.productName}/>
      })
      }
     </>
   )
 }

 export default ProductSimilars
