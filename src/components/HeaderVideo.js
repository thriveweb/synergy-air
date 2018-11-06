import React from 'react'

import './HeaderVideo.css'

const HeaderVideo = ({ source, title }) => {
  return (
    <div className="background-video relative">
      <div className="wide absolute">
        <h1>{title}</h1>
      </div>

      <video
        className="video"
        preload="auto"
        playsInline=""
        autoPlay="true"
        muted="true"
        loop="loop"
      >
        <source src={source} type="video/mp4" />
      </video>

      <div className="clear" />
    </div>
  )
}

export default HeaderVideo
