import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout.js'
import './DistributorsPage.css'

// Export Template for use in CMS preview
export const DistributorsPageTemplate = ({ title, distributors }) => (
  <main className="distributors">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <PageHeader title={title} />

    <section>
      <div className="thin flex">
        {distributors.map((item, index) => (
          <div className="item" key={'distributors_' + index}>
            {item.title && (
              <p>
                <strong>{item.title}</strong>
              </p>
            )}

            {item.region && <p>{item.region}</p>}

            {item.phone && (
              <p>
                <span>P</span>
                <a href={`tel:${item.phone}`}>{item.phone}</a>
              </p>
            )}

            {item.email && (
              <p>
                <span>E</span>
                <a href={`mailto:${item.email}`}>{item.email}</a>
              </p>
            )}

            {item.address && (
              <p>
                <span>A</span>
                {item.address}
              </p>
            )}

            {item.website && (
              <a href={item.website} target="_blank" rel="noreferrer noopener">
                {item.website}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  </main>
)

const DistributorsPage = ({ data: { distributor } }) => (
  <Layout>
    <DistributorsPageTemplate
      {...distributor}
      {...distributor.frontmatter}
      body={distributor.html}
    />
  </Layout>
)

export default DistributorsPage

export const pageQuery = graphql`
  query DistributorsPage($id: String!) {
    distributor: markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        title
        distributors {
          title
          region
          phone
          email
          address
          website
        }
      }
    }

    # page: markdownRemark(id: { eq: $id }) {
    #   html
    #   frontmatter {
    #     title
    #     distributors {
    #       title
    #       phone
    #       email
    #       address
    #       website
    #     }
    #   }
    # }
  }
`
