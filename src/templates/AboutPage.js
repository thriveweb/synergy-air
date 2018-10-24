import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout.js'
import Image from '../components/Image'
import ImageSlider from '../components/ImageSlider'
import './AboutPage.css'

// Export Template for use in CMS preview
export const AboutPageTemplate = ({ title, slider }) => (
  <main className="about">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <PageHeader title={title} />

    <section>
      <div className="thin flex">
        <div className="half">
          <h4>Lorem ipsum sit dolor</h4>
          <p>
            Integer dolor augue, facilisis vehicula consectetur sit amet,
            feugiat sit amet purus. Pellentesque consequat non mauris et
            vestibulum. Donec blandit, arcu vel pharetra aliquam, metus nisi
            volutpat magna, eget bibendum ex turpis scelerisque orci.
            Suspendisse vehicula eleifend nibh eget aliquam. Etiam mollis
            vehicula elit et interdum. Donec blandit, velit sit amet viverra
            eleifend, risus urna rutrum diam, quis feugiat eros turpis sed
            turpis.
          </p>
        </div>
        <div className="half">
          <div className="half-image">
            <Image
              src="/images/home_header.jpg"
              alt="fdgdf"
              resolution="small"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="wide">
        <ImageSlider slider={slider} />
      </div>
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
        slider {
          image
        }
      }
    }
  }
`
