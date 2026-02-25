import React from 'react'
import './TransmissionSlippage.css'
import { useNavigate } from 'react-router-dom'

const TransmissionSlippage = () => {
  const navigate = useNavigate()

  return (
    <div className="slippage container">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      
      <div className="slippage-content">
        <h1>Transmission Slippage</h1>
        
        <section className="slippage-section">
          <h2>What is Transmission Slippage?</h2>
          <p>
            Transmission slippage occurs when your vehicle's transmission loses power transfer between the engine and wheels. 
            You might notice the engine RPM increasing without a corresponding increase in vehicle speed, or a loss of power when accelerating.
          </p>
        </section>

        <section className="slippage-section">
          <h2>Common Signs & Symptoms</h2>
          <ul>
            <li>Engine RPM revs up but vehicle doesn't accelerate proportionally</li>
            <li>Delay in response when shifting gears</li>
            <li>Burning smell from the transmission</li>
            <li>Vehicle jerking or hesitation during acceleration</li>
            <li>Difficulty maintaining speed on hills</li>
            <li>Transmission fluid leaks</li>
            <li>Check Engine Light illuminated</li>
          </ul>
        </section>

        <section className="slippage-section">
          <h2>Causes of Transmission Slippage</h2>
          <ul>
            <li><strong>Low Transmission Fluid:</strong> The most common cause. Low fluid reduces hydraulic pressure needed for gear engagement.</li>
            <li><strong>Worn Transmission Fluid:</strong> Old, burnt, or dirty fluid loses its protective properties.</li>
            <li><strong>Worn Clutch Plates:</strong> In manual transmissions, worn clutches can't grip properly.</li>
            <li><strong>Damaged Bands:</strong> Transmission bands that hold gears can wear or break over time.</li>
            <li><strong>Internal Component Wear:</strong> Seals, gaskets, and internal parts may deteriorate.</li>
            <li><strong>Transmission Overheating:</strong> Can damage internal components and fluid.</li>
          </ul>
        </section>

        <section className="slippage-section">
          <h2>Why You Should Address It</h2>
          <p>
            Transmission slippage is not something you should ignore. Continuing to drive with a slipping transmission can cause:
          </p>
          <ul>
            <li>Accelerated wear to transmission components</li>
            <li>Complete transmission failure, which is very expensive to repair or replace</li>
            <li>Safety concerns due to lack of vehicle control</li>
            <li>Reduced fuel efficiency</li>
          </ul>
        </section>

        <section className="slippage-section">
          <h2>Our Solution</h2>
          <p>
            At AutoFix, our ASE-certified technicians will:
          </p>
          <ul>
            <li>Perform a complete transmission diagnostic to identify the root cause</li>
            <li>Check transmission fluid level, color, and condition</li>
            <li>Scan for diagnostic trouble codes</li>
            <li>Test drive your vehicle to confirm the issue</li>
            <li>Recommend the best repair solution for your specific situation</li>
          </ul>
          <p>
            Solutions may range from a simple fluid and filter change to more extensive repairs, 
            depending on what our diagnostics reveal.
          </p>
        </section>

        <section className="slippage-section cta-section">
          <h2>Don't Wait – Get Your Transmission Checked Today</h2>
          <button className="btn" onClick={() => navigate('/#contact')}>Schedule Service</button>
        </section>
      </div>
    </div>
  )
}

export default TransmissionSlippage
