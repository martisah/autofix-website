import React from 'react';
import './Contact.css';
import BusinessHours from '../BusinessHours/Businesshours';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "69b8015c-eb5b-4a0d-b68c-21c24aca0fae");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); 
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">

      {/* Contact Form Column */}
      <div className="contact-col">
        <h2>Send us a message</h2>
        <p>Please feel free to contact us with any questions or concerns regarding your vehicle. Our team will respond within 24 hours.</p>

        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your phone number' required/>
          <label>Message</label>
          <textarea name="message" rows="6" placeholder="Enter your issue or question" required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>

      {/* Contact Info Column */}
      <div className='contact-info'>

        <h2>Our Info</h2>

        <ul className="contact-list">
          <li>📞 <a href="tel:12488407752">(248) 840-7752</a></li>
          <li>✉️ <a href="mailto:AutoFixTransmissions@gmail.com">AutoFixTransmissions@gmail.com</a></li>
          <li>📍 <a href="https://www.google.com/maps/search/?api=1&query=7720+Highland+Rd+Waterford+MI+48327" target="_blank" rel="noopener noreferrer">7720 Highland Rd, Waterford MI 48327</a></li>
        </ul>

        {/* Google Rating */}
        <p className="rating">⭐ 5.0 Rating on Google Reviews</p>

        {/* Business Hours */}
        <div className='hours'>
          <h3>Visit Us</h3>
          <p>Call us or stop by during business hours</p>
          <BusinessHours />
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="map">
        <iframe
          title="shop-location"
          src="https://www.google.com/maps?q=7720+Highland+Rd+Waterford+MI+48327&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
}

export default Contact;
