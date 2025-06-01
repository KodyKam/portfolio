/* Contact.js */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optionally log data or handle it
    console.log('Form submitted:', formData);

    // Redirect to home
    navigate('/');
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-panel">
        <p><strong>Email:</strong> kamara.alleyne@gmail.com</p>
        <p><strong>Phone:</strong> (647) 722-0548</p>
        <p><strong>Location:</strong> Toronto, ON</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/kodykam" target="_blank" rel="noreferrer">github.com/kodykam</a></p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <label htmlFor="contactNumber">Contact Number</label>
        <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;