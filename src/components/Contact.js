import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We're here to help and answer any questions you might have</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Our Location</h3>
            <p>123 Luxury Avenue</p>
            <p>Addis Ababa, Ethiopia</p>
          </div>

          <div className="info-card">
            <i className="fas fa-phone"></i>
            <h3>Phone Number</h3>
            <p>+251 945 012 123</p>
            <p>Available 24/7</p>
          </div>

          <div className="info-card">
            <i className="fas fa-envelope"></i>
            <h3>Email Address</h3>
            <p>da16gi@gmail.com</p>
            <p>Response within 24 hours</p>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
                rows="5"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>

            {status.submitted && (
              <div className="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {status.error && (
              <div className="error-message">
                {status.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact; 