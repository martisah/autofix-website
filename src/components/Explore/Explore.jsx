import React from 'react'
import './Explore.css'
import { useNavigate } from 'react-router-dom'

const Explore = () => {
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
 ;
  }
  return (
    <div className="explore container">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      
      <div className="explore-content">
        <h1>Discover AutoFix Services</h1>
        
        <section className="explore-section">
          <h2>Why Choose AutoFix?</h2>
          <p>
            At AutoFix, we've been serving our community with excellence for years. 
            Our ASE Certified Technicians bring expertise, reliability, and dedication to every job.
          </p>
        </section>

        <section className="explore-section">
          <h2>Our Specialties</h2>
          <ul>
            <li>Transmission Repair & Service</li>
            <li>General Auto Repair</li>
            <li>Diagnostics & Inspections</li>
            <li>Preventative Maintenance</li>
            <li>Engine Service</li>
            <li>Brake Service</li>
          </ul>
        </section>

        <section className="explore-section">
          <h2>Our Commitment</h2>
          <p>
            We believe in honest, transparent service. Every repair is done with full confidence 
            thanks to our team of ASE certified and State certified technicians. 
            We treat your vehicle like it's our own.
          </p>
        </section>

        <section className="explore-section cta-section">
          <h2>Ready To Experience Quality Service?</h2>
            <button
              className="btn"
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }, 100);
              }}
            >
              Schedule Service
            </button>
        </section>
      </div>
    </div>
  )
}

export default Explore
