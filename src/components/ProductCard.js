import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import './ProductCard.css'

const ProductCard = ({ slug, productTitle, productImage, ...props }) => (
  <Link to={slug} className={`product-card relative`} {...props}>
    <Image resolutions="medium" src={productImage} alt={productTitle} />
    <div className="clear" />
    <p>{productTitle}</p>
  </Link>
)

export default ProductCard
