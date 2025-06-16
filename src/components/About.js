import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Experience luxury and comfort in the heart of Addis Ababa</p>
      </div>

      <div className="about-container">
        <div className="about-section">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2024, our luxury hotel has been a beacon of hospitality in Addis Ababa. 
              We combine traditional Ethiopian warmth with modern luxury to create an unforgettable 
              experience for our guests.
            </p>
            <p>
              Our commitment to excellence and attention to detail has made us a preferred choice 
              for both business and leisure travelers seeking the perfect blend of comfort and sophistication.
            </p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Hotel Exterior" />
          </div>
        </div>

        <div className="features-section">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-concierge-bell"></i>
              <h3>Premium Service</h3>
              <p>24/7 concierge service and personalized attention to every detail</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-utensils"></i>
              <h3>Fine Dining</h3>
              <p>World-class restaurants offering both local and international cuisine</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-spa"></i>
              <h3>Wellness Center</h3>
              <p>State-of-the-art spa and fitness facilities for your well-being</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Prime Location</h3>
              <p>Centrally located with easy access to major attractions</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team Member" />
              <h3>John Doe</h3>
              <p>General Manager</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team Member" />
              <h3>Jane Smith</h3>
              <p>Head of Hospitality</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team Member" />
              <h3>Michael Johnson</h3>
              <p>Executive Chef</p>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Contact us for any inquiries or special requests.</p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default About; 