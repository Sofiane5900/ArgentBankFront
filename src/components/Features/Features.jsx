import React from 'react'
import './Features.css'
import Chat from '../../designs/img/icon-chat.webp'
import Money from '../../designs/img/icon-money.webp'
import Security from '../../designs/img/icon-security.webp'

const Features = () => {
  return (
    <section class="features">
    <h2 class="sr-only">Features</h2>
    <div class="feature-item">
      <img src={Chat} alt="Chat Icon" class="feature-icon" />
      <h3 class="feature-item-title">You are our #1 priority</h3>
      <p>
        Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes.
      </p>
    </div>
    <div class="feature-item">
      <img
        src={Money}
        alt="Chat Icon"
        class="feature-icon"
      />
      <h3 class="feature-item-title">More savings means higher rates</h3>
      <p>
        The more you save with us, the higher your interest rate will be!
      </p>
    </div>
    <div class="feature-item">
      <img
        src={Security}
        alt="Chat Icon"
        class="feature-icon"
      />
      <h3 class="feature-item-title">Security you can trust</h3>
      <p>
        We use top of the line encryption to make sure your data and money
        is always safe.
      </p>
    </div>
  </section>
  )
}

export default Features