import React from 'react'
import '../styles/Hero.css';
function Hero() {
  return (
    <div id="home" className='hero container'>
        <div className="hero-text">
            <h1>
                <span className="sp1">Improve your skills on your own to prepare for </span>
                <span className="sp2">a better future</span>
            </h1>
            <button className='btn'>Register now</button>
        </div>
    </div>
  )
}

export default Hero