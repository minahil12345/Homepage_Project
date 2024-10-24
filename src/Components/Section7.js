import React, { useState } from 'react';
import './Section7.css';
import msgIcon from '../msgIcon.svg';

const Section7 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Form is valid, submit data
      fetch('YOUR_API_ENDPOINT_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then(response => {
        // Handle response
        console.log('Message sent', response);
      });
    } else {
      // Display errors
      setErrors(formErrors);
    }
  };

  return (
    <section className="section7">
      <div className="row71">
        <div className="contactus-text">
          Contact Us
        </div>
      </div>
      <div className="row72">
        <div className="text-content-72">
          Use this contact form to send us an e-mail
        </div>
      </div>
      <div className="row73">
        <div className="container71">
          <div className="column71 left-align">
            <div className="input-container">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input-field"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
          </div>
          <div className="column71 center-align">
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="input-field"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
          <div className="column71 right-align">
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="input-field"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="row74">
          <input
            type="text"
            name="message"
            placeholder="How can we help? Tell us about your move"
            className="input-field"
            value={formData.message}
            onChange={handleInputChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
      </div>
      <div className="row75">
        <button onClick={handleSubmit} className="send-button">
          <img src= {msgIcon} alt="Arrow" className="msgIcon" />
          SEND MESSAGE
        </button>
      </div>
    </section>
  );
};

export default Section7;
