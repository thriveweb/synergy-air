import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout.js'
import ProductSection from '../components/ProductSection.js'
import './ProductIndex.css'

// Export Template for use in CMS preview
export const ProductIndexTemplate = ({
  title,
  contentType,
  products = [],
  productCategories = []
}) => {
  const isCategory = contentType === 'productCategories'
  const byCategory = product =>
    product.categories &&
    product.categories.filter(cat => cat.category === title).length
  const filteredProducts = isCategory ? products.filter(byCategory) : products

  return (
    <main className="products">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <PageHeader title={title} />

      <section className="product-section">
        <ProductSection products={filteredProducts} />
      </section>
    </main>
  )
}

const ProductIndex = ({ data }) => {
  const { page, products } = data
  return (
    <Layout>
      <ProductIndexTemplate
        {...data.page}
        {...data.page.fields}
        {...data.page.frontmatter}
        body={page.html}
        products={products.edges.map(post => ({
          ...post.node,
          ...post.node.frontmatter,
          ...post.node.fields
        }))}
        productCategories={data.productCategories.edges.map(post => ({
          ...post.node,
          ...post.node.frontmatter,
          ...post.node.fields
        }))}
      />
    </Layout>
  )
}

export default ProductIndex

export const pageQuery = graphql`
  query ProductIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      fields {
        contentType
      }
      frontmatter {
        title
      }
    }
    products: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "products" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage
            categories {
              category
            }
            order
          }
        }
      }
    }
    productCategories: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "productCategories" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
