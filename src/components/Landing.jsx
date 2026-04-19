import { useState } from 'react'
import './Landing.css'

function Landing({ onEnter }) {
  return (
    <div className="landing">
      <div className="petals-container">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className={`petal petal-${i % 6}`} style={{
            left: `${(i * 5.5 + 3)}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${6 + (i % 4)}s`
          }} />
        ))}
      </div>

      <div className="landing-content">
        <p className="subtitle">a library for the books that live in you</p>
        <h1 className="title">the virtual library</h1>
        <button className="enter-btn" onClick={onEnter}>
          enter the library
        </button>
      </div>
    </div>
  )
}

export default Landing