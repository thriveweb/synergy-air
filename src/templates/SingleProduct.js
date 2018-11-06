import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Swiper from 'react-id-swiper/lib/custom'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import Content from '../components/Content'
import Image from '../components/Image'
import SocialShare from '../components/SocialShare'

import './SingleProduct.css'
import '../components/ProductSlider.css'

// Export Template for use in CMS preview
export const SingleProductTemplate = ({
  title,
  overview,
  productSlider,
  downloads,
  params = {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
}) => (
  <main className="single-product">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <PageHeader title={title} />

    <section>
      <div className="thin flex">
        {productSlider && (
          <div className="product-slider half">
            <Swiper {...params}>
              {productSlider.map((slide, index) => (
                <div>
                  <Image src={slide} resolutions="small" alt={title + index} />
                </div>
              ))}
            </Swiper>
          </div>
        )}

        <div className="half">
          <h5>{title}</h5>
          <div className="divide" />

          <h4>Overview</h4>
          <Content src={overview} />
          <div className="divide" />

          {downloads && (
            <div className="downloads">
              <h4>Downloads</h4>
              <a href={downloads.link}>{downloads.name}</a>
            </div>
          )}

          <div className="divide" />
          <SocialShare />
        </div>
      </div>
    </section>
  </main>
)

const SingleProduct = ({ data: { page, products } }) => (
  <Layout>
    <SingleProductTemplate
      {...page.frontmatter}
      body={page.html}
      products={products.edges.map(edge => ({
        ...edge.node.frontmatter,
        ...edge.node.fields
      }))}
    />
  </Layout>
)
export default SingleProduct

export const pageQuery = graphql`
  query SingleProduct($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        overview
        productSlider
        downloads {
          name
          link
        }
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
            categories {
              category
            }
          }
        }
      }
    }
  }
`
