import React from 'react'

import Image from './Image'
import SubscribeForm from './SubscribeForm'
import InstagramFeed from './InstagramFeed'
import './SubscribeForm.css'
import './Footer.css'

export default ({ globalSettings, socialSettings }) => (
  <div className="footer">
    <InstagramFeed count="7" />

    <div className="top">
      <div className="wide">
        <div className="taLeft">
          <a href="mailto:info@synergyfitness.com.au">
            info@synergyfitness.com.au
          </a>
          <br />
          <a href="mailto:spares@synergyfitness.com.au">
            spares@synergyfitness.com.au
          </a>
        </div>

        <div className="logo">
          <Image
            src="/images/logo_footer.svg"
            resolutions="small"
            alt="Synergy Air"
          />
        </div>

        <div className="taRight">
          <p>Join our mailing list for free updates</p>
          <SubscribeForm />
        </div>
      </div>
    </div>
    <div className="bottom">
      <div className="wide">
        <div className="taLeft">
          <p>© 2018 Synergy Air</p>
        </div>
        <div className="taRight">
          <p>
            Site by <a href="https://thriveweb.com.au">Thrive</a>
          </p>
        </div>
      </div>
    </div>
  </div>
)
