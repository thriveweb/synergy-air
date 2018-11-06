import React from 'react'

import ProductCard from '../components/ProductCard'
import './PostSection.css'

class ProductSection extends React.Component {
  static defaultProps = {
    products: [],
    limit: 12,
    showLoadMore: true,
    loadMoreTitle: 'Load More',
    perPageLimit: 12
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () =>
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))

  render() {
    const { products, showLoadMore, loadMoreTitle } = this.props
    const { limit } = this.state

    const visibleProducts = products.slice(0, limit || products.length)

    return (
      <div className="wide">
        {!!visibleProducts.length && (
          <div className="flex">
            {visibleProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        )}
        {showLoadMore &&
          visibleProducts.length < products.length && (
            <div className="load-more taCenter">
              <button className="button" onClick={this.increaseLimit}>
                {loadMoreTitle}
              </button>
            </div>
          )}
      </div>
    )
  }
}

export default ProductSection
