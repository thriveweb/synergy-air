import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import './ProductCard.css'

const ProductCard = ({ slug, title, image, ...props }) => (
  <Link to={slug} className={`product-card relative`} {...props}>
    <Image resolutions="medium" src={image} alt={title} />
    <div className="clear" />
    <p>{title}</p>
  </Link>
)

export default ProductCard
