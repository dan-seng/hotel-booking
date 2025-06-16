import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import HotelList from './components/HotelList';
import BookingForm from './components/BookingForm';
import About from './components/About';
import Contact from './components/Contact';
import Auth from './components/Auth';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<HotelList />} />
            <Route path="/booking/:hotelId/:roomType" element={<BookingForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
