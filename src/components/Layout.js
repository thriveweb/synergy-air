import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize/modern-normalize.css'

import './globalStyles.css'
import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'

export default ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          settingsYaml {
            siteTitle
            siteDescription
            headerScripts
            socialMediaCard {
              image
            }
          }
        }
      `}
      render={data => {
        const { siteTitle, siteUrl, socialMediaCard, headerScripts } =
          data.settingsYaml || {}
        return (
          <Fragment>
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`%s | ${siteTitle}`}
            >
              <link
                href="https://fonts.googleapis.com/css?family=Orbitron:700"
                rel="stylesheet"
              />
              <link
                href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700"
                rel="stylesheet"
              />
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css"
              />
              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
                integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
                crossorigin="anonymous"
              />
            </Helmet>

            <Meta
              headerScripts={headerScripts}
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                siteUrl + socialMediaCard.image
              }
            />

            <Nav />

            <Fragment>{children}</Fragment>

            <Footer />
          </Fragment>
        )
      }}
    />
  )
}
