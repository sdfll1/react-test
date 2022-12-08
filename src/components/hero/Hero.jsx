import React from 'react'
import './Hero.scss'
// import leftCrcl from '../img/leftCircle.png'
// import rightBtm from '../img/rightBtmCircle.png'
function Hero() {
  return (
    <div className='hero'>
      <div className='bgImg'>
        <div className='hero__text container'>
          <h1>
            Find the <br />best <span>talent</span>
          </h1>

          <p>
            Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero