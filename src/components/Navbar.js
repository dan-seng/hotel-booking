import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-brand">
          <Link to="/">Luxury Hotel</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/booking/1/Deluxe%20Room%20-%20City%20View" className="book-now-link">Book Now</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 