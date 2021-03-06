import React from 'react'
import Swiper from 'react-id-swiper/lib/custom'

import Image from './Image'

import './ImageSlider.css'

export default ({ slider }) => {
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
        {!!slider &&
          slider.length &&
          slider.map((item, index) => (
            <div key={`item${index}`}>
              <Image src={item} resolution="small" alt={'image-' + index} />
            </div>
          ))}
      </Swiper>
    </div>
  )
}
