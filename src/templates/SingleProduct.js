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

// Export Template for use in CMS preview
export const SingleProductTemplate = ({
  title,
  overview,
  productSlider,
  downloads,
  isPreview,
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
        {!isPreview && (
          <div className="product-slider half">
            {!!productSlider && (
              <Swiper {...params}>
                {productSlider.map((slide, index) => (
                  <div key={title + '_' + index}>
                    <Image src={slide} resolutions="small" alt={title} />
                  </div>
                ))}
              </Swiper>
            )}
          </div>
        )}

        <div className="half">
          <h5>{title}</h5>
          <div className="divide" />

          <h4>Overview</h4>
          <Content src={overview} />
          <div className="divide" />

          <div className="downloads">
            <h4>Downloads</h4>
            {downloads.map((item, index) => (
              <a
                href={item.link}
                key={item.name + index}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ))}
            <div className="divide" />
          </div>

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
