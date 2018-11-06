import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout.js'
import ProductSection from '../components/ProductSection.js'
// import './ProductIndex.css'

// Export Template for use in CMS preview
export const ProductIndexTemplate = ({ title, products = [] }) => (
  <main className="products">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <PageHeader title={title} />

    <section>
      <ProductSection products={products} />
    </section>
  </main>
)

const ProductIndex = ({ data: { page, products } }) => (
  <Layout>
    <ProductIndexTemplate
      {...page}
      {...page.frontmatter}
      body={page.html}
      products={products.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
    />
  </Layout>
)

export default ProductIndex

export const pageQuery = graphql`
  query ProductIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    products: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "products" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage
          }
        }
      }
    }
  }
`
