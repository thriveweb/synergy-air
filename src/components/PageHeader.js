import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import './PageHeader.css'

const PageHeader = ({ title, backgroundImage, large, className = '' }) => {
  if (large) className += ' pageHeader-large'
  return (
    <div className={`pageHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolution="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="wide relative">
        <h1>{title}</h1>
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
