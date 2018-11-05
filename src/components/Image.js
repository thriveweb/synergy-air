import React from 'react'
import PropTypes from 'prop-types'

// import 'intersection-observer'
// import Observer from '@researchgate/react-intersection-observer'

import './Image.css'

class Image extends React.Component {
  // state = {
  //   isIntersecting: false
  // }
  //
  // handleIntersection = e => {
  //   console.log(e.isIntersecting)
  //   if (e.isIntersecting) {
  //     this.setState({ isIntersecting: true })
  //   }
  // }

  checkIfIsLocalSrc(src) {
    if (typeof src === 'string' && src.includes('ucarecdn.com')) return false
    return true
  }

  render() {
    let {
      background,
      backgroundSize = 'cover',
      resolutions = '1000x',
      className = '',
      src,
      secSet = '',
      fullSrc,
      // smallSrc,
      onClick,
      alt = ''
    } = this.props

    const isLocalImg = this.checkIfIsLocalSrc(src)
    /* create source set for images */
    if (!isLocalImg) {
      secSet = `
      ${src}-/progressive/yes/-/format/auto/-/scale_crop/320x320/-/320x.jpg 320w,
      ${src}-/progressive/yes/-/format/auto/-/scale_crop/450x450/-/450x.jpg 450w,
      ${src}-/progressive/yes/-/format/auto/-/scale_crop/640x640/-/640x.jpg 640w,
      ${src}-/progressive/yes/-/format/auto/-/scale_crop/750x750/-/750x.jpg 750w,
      ${src}-/progressive/yes/-/format/auto/-/scale_crop/800x800/-/800x.jpg 800w,
      ${src}-/progressive/yes/-/format/auto/-/scale_crop/900x900/-/900x.jpg 900w,
      ${src}-/progressive/yes/-/format/auto/-/scale_crop/1000x1000/-/quality/lightest/1000.jpg 1000w,
      ${src}-/progressive/yes/-/format/auto/-/scale_crop/1200x1200/-/quality/lightest/1200.jpg 1200w,
      ${src}-/progressive/yes/-/format/auto/-/scale_crop/1500x1500/-/quality/lightest/1500.jpg 1500w,
      ${src}-/progressive/yes/-/format/auto/-/scale_crop/1600x1600/-/quality/lightest/1600.jpg 16000w,
      ${src}-/progressive/yes/-/format/auto/-/scale_crop/2000x2000/-/quality/lightest/2000.jpg 2000w`
    }

    /* add resolutions options for inline images */
    if (resolutions === 'small') {
      resolutions = '800x'
    } else if (resolutions === 'medium') {
      resolutions = '1000x'
    } else if (resolutions === 'large') {
      resolutions = '2000x'
    }

    fullSrc = `${src}${
      isLocalImg
        ? ''
        : '-/progressive/yes/-/format/auto/-/resize/' + resolutions + '/'
    }`
    // smallSrc = `${src}${
    //   isLocalImg ? '' : '-/progressive/yes/-/format/auto/-/resize/10x/'
    // }`

    if (background) {
      let style = {}
      style = {
        // backgroundImage: `url(${
        //   this.state.isIntersecting ? fullSrc : smallSrc
        // })`,
        backgroundImage: `url(${fullSrc})`,
        backgroundSize
      }
      return (
        // <Observer onChange={this.handleIntersection}>
        <div
          className={`BackgroundImage absolute ${className}`}
          style={style}
        />
        // </Observer>
      )
    }

    return (
      // <Observer onChange={this.handleIntersection}>
      <img
        className={`LazyImage ${className}`}
        src={fullSrc}
        srcSet={secSet}
        // src={this.state.isIntersecting ? fullSrc : smallSrc}
        // srcSet={this.state.isIntersecting ? secSet : ''}
        sizes={'100vw'}
        onClick={onClick}
        alt={alt}
      />
      // </Observer>
    )
  }
}

Image.propTypes = {
  alt: PropTypes.string.isRequired
}

export default Image
