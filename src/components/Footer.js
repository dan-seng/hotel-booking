import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Luxury Hotel</h3>
          <p>Experience unparalleled luxury and comfort in the heart of the city. Our hotel offers world-class amenities and exceptional service.</p>
          <div className="contact-info">
            <p><i className="fas fa-map-marker-alt"></i> 123 Luxury Avenue, Addis Ababa, Ethiopia</p>
            <p><i className="fas fa-phone"></i> +251 945 012 123</p>
            <p><i className="fas fa-envelope"></i> da16gi@gmail.com</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/booking">Book Now</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Luxury Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 