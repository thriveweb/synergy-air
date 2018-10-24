import React from 'react'
import Link from 'gatsby-link'

import Image from '../components/Image'
import './Portals.css'

export default ({ portals }) => (
  <div className="portals">
    {portals.map((item, index) => (
      <div className="half">
        <div className="item">
          <Link to={item.productLink} className="absolute">
            <div className="details">
              <h3>
                <strong>Synergy Air</strong> {item.title}
              </h3>
              <h5>View Products</h5>
            </div>
          </Link>
          <Image src={item.image} />
        </div>

        <Link to={item.distLink} className="button">
          View distributors
        </Link>
      </div>
    ))}
  </div>
)
