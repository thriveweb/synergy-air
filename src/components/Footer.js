import React from 'react'

import './Footer.css'

import SubscribeForm from './SubscribeForm'
import './SubscribeForm.css'

export default ({ globalSettings, socialSettings }) => (
  <div className="footer">
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

        <div className="taRight">
          <p>Join our mailing list for free updates</p>
          <SubscribeForm />
        </div>
      </div>
    </div>
    <div className="bottom">
      <div className="wide">
        <div className="taLeft">© 2018 Synergy Air</div>
        <div className="taRight">
          Site by{' '}
          <a href="https://thriveweb.com.au" target="_blank">
            Thrive
          </a>
        </div>
      </div>
    </div>
  </div>
)
