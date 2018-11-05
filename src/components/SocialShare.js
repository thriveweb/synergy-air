import React from 'react'

import './SocialShare.css'

export default () => (
  <ul className="share-buttons">
    <p>Share:</p>
    <li>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=&quote="
        target="_blank"
        rel="noreferrer noopener"
        title="Share on Facebook"
      >
        <span className="icon">
          <i className="fab fa-facebook-f" />
        </span>
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source="
        target="_blank"
        rel="noreferrer noopener"
        title="linkedin"
      >
        <span className="icon">
          <i className="fab fa-linkedin-in" />
        </span>
      </a>
    </li>

    <li>
      <a
        href="https://twitter.com/intent/tweet?source=&text=:%20"
        target="_blank"
        rel="noreferrer noopener"
        title="Tweet"
      >
        <span className="icon">
          <i className="fab fa-twitter" />
        </span>
      </a>
    </li>
    <li>
      <a
        href="https://plus.google.com/share?url="
        target="_blank"
        rel="noreferrer noopener"
        title="Share on Google +"
      >
        <span className="icon">
          <i className="fab fa-google-plus-g" />
        </span>
      </a>
    </li>
  </ul>
)
