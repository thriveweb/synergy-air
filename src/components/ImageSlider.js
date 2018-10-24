import React from 'react'
import Swiper from 'react-id-swiper/lib/custom'
// import 'react-id-swiper/src/styles/css/swiper.css'
import Link from 'gatsby-link'

import Image from './Image'

import './ImageSlider.css'

export default ({}) => {
  const params = {
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      700: {
        slidesPerView: 1
      }
    }
  }

  return (
    <div className="image-slider">
      <Swiper {...params}>
        <div>
          <Image src="/images/home_header.jpg" alt="header image" />
        </div>
        <div>
          <Image src="/images/home_header.jpg" alt="header image" />
        </div>
        <div>
          <Image src="/images/home_header.jpg" alt="header image" />
        </div>
        <div>
          <Image src="/images/home_header.jpg" alt="header image" />
        </div>
        <div>
          <Image src="/images/home_header.jpg" alt="header image" />
        </div>
      </Swiper>
    </div>
  )
}
