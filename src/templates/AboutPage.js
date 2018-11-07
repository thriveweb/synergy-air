import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout.js'
import Image from '../components/Image'
import Content from '../components/Content'
import ImageSlider from '../components/ImageSlider'
import './AboutPage.css'

// Export Template for use in CMS preview
export const AboutPageTemplate = ({
  title,
  section1,
  imageSlider,
  isPreview
}) => (
  <main className="about">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <PageHeader title={title} />

    <section>
      <div className="thin flex">
        <div className="half">
          <h4>{section1.title}</h4>
          <Content src={section1.content} />
        </div>
        <div className="half">
          <div className="half-image">
            <Image src={section1.image} alt={section1.title} />
          </div>
        </div>
      </div>

      {/* Use isPreview to fix CMS error #188 */}

      {!isPreview && (
        <div className="slider wide">
          {!!imageSlider && <ImageSlider slider={imageSlider} />}
        </div>
      )}
    </section>
  </main>
)

const AboutPage = ({ data: { page } }) => (
  <Layout>
    <AboutPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        section1 {
          title
          content
          image
        }
        imageSlider
      }
    }
  }
`
