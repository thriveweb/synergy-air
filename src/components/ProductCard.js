import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import './ProductCard.css'

const ProductCard = ({ slug, title, featuredImage, ...props }) => (
  <Link to={slug} className={`product-card relative`} {...props}>
    <Image src={featuredImage} alt={title} />
    <div className="clear" />
    <p>{title}</p>
  </Link>
)

export default ProductCard
