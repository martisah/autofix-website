import React from 'react'
import './About.css'
import shop from "../../assets/shop.jpg";
import front from "../../assets/front.jpg";
import desk from "../../assets/desk.jpg";
import transmission from "../../assets/transmissions.jpg";
import car from "../../assets/car.jpg";
import working from "../../assets/working.jpg";

const images = [
  { src: shop, alt: "AutoFix Shop Exterior" },
  { src: front, alt: "Front Office" },
  { src: desk, alt: "Front Desk" },
  { src: transmission, alt: "Transmission Repair" },
  { src: car, alt: "Vehicle in Shop" },
  { src: working, alt: "Technician Working" }
];

const About = () => {
  return (
    <div className='about'>
      <div className='about-content'>
        <div className='about-section'>
          <ul><li>Our Commitment</li></ul>
          <p>We are committed to transparent communication, fair and competitive pricing, and a customer experience built on trust and respect. Whether performing routine maintenance or addressing complex repairs, our team takes the time to clearly explain your vehicle's needs and provide thoughtful, reliable solutions tailored to ensure optimal performance and safety.</p>
        </div>

        <div className='about-section'>
          <ul><li>Why We Do What We Do</li></ul>
          <p>At AutoFix, our work is driven by more than just repairing vehicles — it's about serving people. We understand how essential a reliable vehicle is to your daily life, your family, and your livelihood. Our purpose is simple: to keep you safely on the road while building long-term relationships grounded in integrity and care.</p>
        </div>

        <div className='about-section'>
          <ul><li>What To Expect</li></ul>
          <p>Skilled professionals are increasingly difficult to find — and those who combine expertise with integrity are even rarer. At AutoFix, we take pride in standing out for both. With us, you can expect complete transparency, honest recommendations, and the highest standard of workmanship in every repair.</p>
        </div>
      </div>

      <div className='shop-gallery'>
        {images.map((img, index) => (
          <img key={index} src={img.src} alt={img.alt} loading="lazy" />
        ))}
      </div>
    </div>
  )
}

export default About
