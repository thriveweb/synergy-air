import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import Portals from '../components/Portals'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, featuredImage, portals }) => (
  <main className="Home">
    <PageHeader large title={title} backgroundImage={featuredImage} />

    {portals && (
      <section>
        <div className="wide">
          <Portals portals={portals} />
        </div>
      </section>
    )}
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        featuredImage
        portals {
          title
          image
          productLink
          distLink
        }
      }
    }
  }
`
