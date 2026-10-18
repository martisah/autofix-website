import React from 'react';
import './Services.css';
import ase from '../../assets/ase-logo.png';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  return (
    <section className="services">
      <div className="services-text">
        <img src={ase} alt="ASE Certified" />
        <h3>Our Services</h3>
        <h2>What We Offer</h2>
        <div className="services-columns">
          <div className="services-column">
            <h4>Transmission Repair</h4>
            <div className="services-grid">
              <div className="service-block" onClick={() => navigate('/service/slippage')}>Slipping</div>
              <div className="service-block" onClick={() => navigate('/service/rebuilds')}>Rebuilds</div>
              <div className="service-block" onClick={() => navigate('/service/diagnostics')}>Diagnostics</div>
              <div className="service-block" onClick={() => navigate('/service/limp-mode')}>Limp Mode</div>
              <div className="service-block" onClick={() => navigate('/service/jerking')}>Jerking</div>
              <div className="service-block" onClick={() => navigate('/service/overheating')}>Overheating</div>
              <div className="service-block" onClick={() => navigate('/service/chattering')}>Chattering</div>
              <div className="service-block" onClick={() => navigate('/service/leaks')}>Leaks</div>
              <div className="service-block" onClick={() => navigate('/service/bad-shifting')}>Bad Shifting</div>
            </div>
          </div>

          <div className="services-column">
            <h4>General Repair</h4>
            <div className="services-grid">
              <div className="service-block" onClick={() => navigate('/service/check-engine')}>Check Engine</div>
              <div className="service-block" onClick={() => navigate('/service/suspension')}>Suspension</div>
              <div className="service-block" onClick={() => navigate('/service/engine-service')}>Engine Service</div>
              <div className="service-block" onClick={() => navigate('/service/maintenance')}>Maintenance</div>
              <div className="service-block" onClick={() => navigate('/service/generalleaks')}>General Leaks</div>
              <div className="service-block" onClick={() => navigate('/service/steering')}>Steering</div>
              <div className="service-block" onClick={() => navigate('/service/brakes')}>Brakes</div>
              <div className="service-block" onClick={() => navigate('/service/ac-heating')}>AC & Heating</div>
              <div className="service-block" onClick={() => navigate('/service/electrical')}>Electrical</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;