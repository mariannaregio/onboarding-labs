import React, { FC } from 'react'

interface Props {
  link: string,
  image: string,
  name: string,
}

const ProductSimilarsItem: FC<Props> = ({link, image, name}) => {
  return (
    <a href={link}>
      <img src={image} alt={name} title={name} />
    </a>
  )
}

export default ProductSimilarsItem
