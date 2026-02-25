import React from 'react'
import './BusinessHours.css'

const BusinessHours = () => {
  const hours = [
    { day: "Monday", time: "8:00 AM – 6:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 6:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 6:00 PM" },
    { day: "Thursday", time: "8:00 AM – 6:00 PM" },
    { day: "Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "Appointment Only" },
    { day: "Sunday", time: "Closed" },
  ];

  const today = new Date().toLocaleString("en-US", { weekday: "long" });

  return (
    <div className="hours-container">
      <h2 className="hours-title">Business Hours</h2>
      <ul className="hours-list">
        {hours.map((item, index) => (
          <li
            key={index}
            className={`hours-item ${item.day === today ? "today" : ""}`}
          >
            <span className="day">{item.day}</span>
            <span className="time">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessHours;
