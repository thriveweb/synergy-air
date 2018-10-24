import React from 'react'
import Helmet from 'react-helmet'
import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import FormSimpleAjax from '../components/FormSimpleAjax'
import Layout from '../components/Layout'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  title,
  featuredImage,
  address,
  phone,
  email
}) => (
  <main className="contact">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <PageHeader title={title} />
    <section>
      <div className="thin flex">
        <div className="half">
          <div className="details">
            <h4>Get in touch</h4>
            <p>To contact us via email, please complete the enquiry form.</p>
          </div>

          <div className="details">
            <h4>Based in Australia</h4>

            {phone && (
              <p>
                <strong>P</strong>
                <a href={`tel:${phone}`}>{phone}</a>
              </p>
            )}

            {email && (
              <p>
                <strong>E</strong>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            )}

            {address && (
              <p>
                <strong>A</strong>
                {address}
              </p>
            )}
          </div>
        </div>

        <div className="half">
          <FormSimpleAjax name="Simple Form Ajax" />
        </div>
      </div>
    </section>
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout>
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        template
        title
        address
        phone
        email
      }
    }
  }
`
