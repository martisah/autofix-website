// import React from 'react'
// import './Hero.css'

// const Hero = () => {
//   return (
//     <div className='hero container'>
//         <div className="hero-text">
//             <h1>Your friendly neighborhood auto repair shop.</h1>
//             <p>Here at Autofix, our ASE certified technicians specialize in transmission and general repair services.</p>
//             <button className='btn'>Explore more</button>
//         </div>
//     </div>
//   )
// }

// export default Hero

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'

const texts = [
  'Your friendly neighborhood auto repair shop',
  'ASE certified transmission specialists',
  'Reliable general auto repair services',
  'Family owned and operated'
]

const Hero = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const typingSpeed = 60    // ms per character
    const deletingSpeed = 50  // ms per character while deleting
    const pauseTime = 6000    // pause before deleting

    let timeout

    if (!deleting && charIndex < texts[textIndex].length) {
      // typing
      timeout = setTimeout(() => {
        setText(prev => prev + texts[textIndex][charIndex])
        setCharIndex(charIndex + 1)
      }, typingSpeed)
    } else if (!deleting && charIndex === texts[textIndex].length) {
      // pause at the end of sentence before deleting
      timeout = setTimeout(() => setDeleting(true), pauseTime)
    } else if (deleting && charIndex > 0) {
      // deleting
      timeout = setTimeout(() => {
        setText(prev => prev.slice(0, -1))
        setCharIndex(charIndex - 1)
      }, deletingSpeed)
    } else if (deleting && charIndex === 0) {
      // move to next sentence
      setDeleting(false)
      setTextIndex((textIndex + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, textIndex])

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          {text}
          <span className="cursor">|</span>
        </h1>

        <p>
          Here at AutoFix, our ASE Certified Technicians specialize in transmission and general repair services
        </p>

        <button className="btn" onClick={() => navigate('/explore')}>Explore More</button>
      </div>
    </div>
  )
}

export default Hero



