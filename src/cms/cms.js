import React from 'react'
import CMS from 'netlify-cms'
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { AboutPageTemplate } from '../templates/AboutPage'
import { DistributorsPageTemplate } from '../templates/DistributorsPage'
import { ContactPageTemplate } from '../templates/ContactPage'
import { DefaultPageTemplate } from '../templates/DefaultPage'
import { SingleProductTemplate } from '../templates/SingleProduct'

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('distributors-page', ({ entry }) => (
  <DistributorsPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('distributors', ({ entry }) => (
  <DistributorsPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <AboutPageTemplate {...entry.toJS().data} isPreview />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('infoPages', ({ entry }) => (
  <DefaultPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('products', ({ entry }) => (
  <SingleProductTemplate {...entry.toJS().data} isPreview />
))
