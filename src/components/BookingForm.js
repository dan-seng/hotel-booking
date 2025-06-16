import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookingForm.css';

function BookingForm() {
  const { hotelId, roomType } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    specialRequests: ''
  });
  const [errors, setErrors] = useState({});
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  // Room data matching HotelList.js
  const rooms = [
    // Deluxe Rooms
    {
      id: 1,
      type: "Deluxe Room - City View",
      price: 299,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "City View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 2,
      type: "Deluxe Room - Garden View",
      price: 279,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Garden View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 3,
      type: "Deluxe Room - Pool View",
      price: 289,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Pool View", "Free WiFi", "Mini Bar", "Smart TV"]
    },

    // Executive Suites
    {
      id: 4,
      type: "Executive Suite - City View",
      price: 499,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Living Room", "City View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 5,
      type: "Executive Suite - Garden View",
      price: 479,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Living Room", "Garden View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 6,
      type: "Executive Suite - Pool View",
      price: 489,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Living Room", "Pool View", "Free WiFi", "Mini Bar", "Smart TV"]
    },

    // Presidential Suites
    {
      id: 7,
      type: "Presidential Suite - City View",
      price: 1299,
      capacity: 4,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 King Beds", "Living Room", "Dining Room", "City View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 8,
      type: "Presidential Suite - Garden View",
      price: 1279,
      capacity: 4,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 King Beds", "Living Room", "Dining Room", "Garden View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 9,
      type: "Presidential Suite - Pool View",
      price: 1289,
      capacity: 4,
      image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 King Beds", "Living Room", "Dining Room", "Pool View", "Free WiFi", "Mini Bar", "Smart TV"]
    },

    // Family Suites
    {
      id: 10,
      type: "Family Suite - City View",
      price: 599,
      capacity: 4,
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 Queen Beds", "Living Room", "City View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 11,
      type: "Family Suite - Garden View",
      price: 579,
      capacity: 4,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 Queen Beds", "Living Room", "Garden View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 12,
      type: "Family Suite - Pool View",
      price: 589,
      capacity: 4,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 Queen Beds", "Living Room", "Pool View", "Free WiFi", "Mini Bar", "Smart TV"]
    },

    // Junior Suites
    {
      id: 13,
      type: "Junior Suite - City View",
      price: 399,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Sitting Area", "City View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 14,
      type: "Junior Suite - Garden View",
      price: 379,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Sitting Area", "Garden View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 15,
      type: "Junior Suite - Pool View",
      price: 389,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Sitting Area", "Pool View", "Free WiFi", "Mini Bar", "Smart TV"]
    },

    // Accessible Rooms
    {
      id: 16,
      type: "Accessible Room - City View",
      price: 299,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Accessible Bathroom", "City View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 17,
      type: "Accessible Room - Garden View",
      price: 279,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Accessible Bathroom", "Garden View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 18,
      type: "Accessible Room - Pool View",
      price: 289,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Accessible Bathroom", "Pool View", "Free WiFi", "Mini Bar", "Smart TV"]
    },

    // Corner Suites
    {
      id: 19,
      type: "Corner Suite - City View",
      price: 449,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Corner Windows", "City View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 20,
      type: "Corner Suite - Garden View",
      price: 429,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Corner Windows", "Garden View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 21,
      type: "Corner Suite - Pool View",
      price: 439,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Corner Windows", "Pool View", "Free WiFi", "Mini Bar", "Smart TV"]
    },

    // Garden View Rooms
    {
      id: 22,
      type: "Garden View Room - Standard",
      price: 329,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Garden View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 23,
      type: "Garden View Room - Deluxe",
      price: 379,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Garden View", "Free WiFi", "Mini Bar", "Smart TV", "Balcony"]
    },
    {
      id: 24,
      type: "Garden View Room - Premium",
      price: 429,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Garden View", "Free WiFi", "Mini Bar", "Smart TV", "Private Terrace"]
    },

    // Penthouse Suites
    {
      id: 25,
      type: "Penthouse Suite - City View",
      price: 999,
      capacity: 4,
      image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 King Beds", "Living Room", "Dining Room", "City View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 26,
      type: "Penthouse Suite - Garden View",
      price: 979,
      capacity: 4,
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 King Beds", "Living Room", "Dining Room", "Garden View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 27,
      type: "Penthouse Suite - Pool View",
      price: 989,
      capacity: 4,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 King Beds", "Living Room", "Dining Room", "Pool View", "Free WiFi", "Mini Bar", "Smart TV"]
    },

    // Business Suites
    {
      id: 28,
      type: "Business Suite - City View",
      price: 549,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Work Desk", "City View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 29,
      type: "Business Suite - Garden View",
      price: 529,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Work Desk", "Garden View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 30,
      type: "Business Suite - Pool View",
      price: 539,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Work Desk", "Pool View", "Free WiFi", "Mini Bar", "Smart TV"]
    },

    // Honeymoon Suites
    {
      id: 31,
      type: "Honeymoon Suite - City View",
      price: 799,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Jacuzzi", "City View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 32,
      type: "Honeymoon Suite - Garden View",
      price: 779,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Jacuzzi", "Garden View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 33,
      type: "Honeymoon Suite - Pool View",
      price: 789,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Jacuzzi", "Pool View", "Free WiFi", "Mini Bar", "Smart TV"]
    },

    // Connecting Rooms
    {
      id: 34,
      type: "Connecting Rooms - City View",
      price: 699,
      capacity: 4,
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 King Beds", "Connecting Door", "City View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 35,
      type: "Connecting Rooms - Garden View",
      price: 679,
      capacity: 4,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 King Beds", "Connecting Door", "Garden View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 36,
      type: "Connecting Rooms - Pool View",
      price: 689,
      capacity: 4,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 King Beds", "Connecting Door", "Pool View", "Free WiFi", "Mini Bar", "Smart TV"]
    },

    // Pool View Rooms
    {
      id: 37,
      type: "Pool View Room - Standard",
      price: 339,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Pool View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 38,
      type: "Pool View Room - Deluxe",
      price: 389,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Pool View", "Free WiFi", "Mini Bar", "Smart TV", "Balcony"]
    },
    {
      id: 39,
      type: "Pool View Room - Premium",
      price: 439,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["King Bed", "Pool View", "Free WiFi", "Mini Bar", "Smart TV", "Private Terrace"]
    },

    // Extended Stay Suites
    {
      id: 40,
      type: "Extended Stay Suite - City View",
      price: 899,
      capacity: 4,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 King Beds", "Kitchen", "City View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 41,
      type: "Extended Stay Suite - Garden View",
      price: 879,
      capacity: 4,
      image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 King Beds", "Kitchen", "Garden View", "Free WiFi", "Mini Bar", "Smart TV"]
    },
    {
      id: 42,
      type: "Extended Stay Suite - Pool View",
      price: 889,
      capacity: 4,
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 King Beds", "Kitchen", "Pool View", "Free WiFi", "Mini Bar", "Smart TV"]
    },

    // Standard Rooms
    {
      id: 43,
      type: "Standard Room - City View",
      price: 249,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Queen Bed", "City View", "Free WiFi", "Smart TV"]
    },
    {
      id: 44,
      type: "Standard Room - Garden View",
      price: 229,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Queen Bed", "Garden View", "Free WiFi", "Smart TV"]
    },
    {
      id: 45,
      type: "Standard Room - Pool View",
      price: 239,
      capacity: 2,
      image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Queen Bed", "Pool View", "Free WiFi", "Smart TV"]
    }
  ];

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Format date for display (e.g., "Jan 1, 2024")
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  useEffect(() => {
    const decodedRoomType = decodeURIComponent(roomType);
    console.log('URL Parameters:', { hotelId, roomType, decodedRoomType });
    console.log('Available rooms:', rooms.map(r => r.type));
    const room = rooms.find(r => r.type === decodedRoomType);
    console.log('Found room:', room);
    if (room) {
      setSelectedRoom(room);
      setFormData(prev => ({ ...prev, guests: Math.min(prev.guests, room.capacity) }));
    } else {
      console.error('Room not found:', decodedRoomType);
    }
    setLoading(false);
  }, [roomType, hotelId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for check-in and check-out dates
    if (name === 'checkIn') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        // Reset check-out if it's before new check-in
        checkOut: prev.checkOut && value > prev.checkOut ? '' : prev.checkOut
      }));
    } else if (name === 'checkOut') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    
    // Date validation
    if (!formData.checkIn) {
      newErrors.checkIn = 'Check-in date is required';
    } else if (formData.checkIn < today) {
      newErrors.checkIn = 'Check-in date cannot be in the past';
    }
    
    if (!formData.checkOut) {
      newErrors.checkOut = 'Check-out date is required';
    } else if (formData.checkOut <= formData.checkIn) {
      newErrors.checkOut = 'Check-out date must be after check-in date';
    }

    if (formData.guests < 1) newErrors.guests = 'At least 1 guest is required';
    if (selectedRoom && formData.guests > selectedRoom.capacity) {
      newErrors.guests = `Maximum ${selectedRoom.capacity} guests allowed for this room`;
    }
    return newErrors;
  };

  const calculateTotalPrice = () => {
    if (formData.checkIn && formData.checkOut && selectedRoom) {
      const nights = Math.ceil((new Date(formData.checkOut) - new Date(formData.checkIn)) / (1000 * 60 * 60 * 24));
      setTotalPrice(nights * selectedRoom.price);
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [formData.checkIn, formData.checkOut, selectedRoom]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // In a real app, this would send the booking data to a server
      console.log('Booking submitted:', { ...formData, totalPrice });
      alert('Booking submitted successfully!');
      navigate('/');
    } else {
      setErrors(newErrors);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!selectedRoom) {
    return <div className="loading">Room not found</div>;
  }

  return (
    <div className="booking-form-container">
      <div className="booking-form">
        <div className="room-summary">
          <img src={selectedRoom.image} alt={selectedRoom.type} />
          <div className="room-details">
            <h2>{selectedRoom.type}</h2>
            <div className="features">
              {selectedRoom.features.map((feature, index) => (
                <span key={index} className="feature-tag">{feature}</span>
              ))}
            </div>
            <div className="price">
              <span>${selectedRoom.price}</span> per night
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'error' : ''}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? 'error' : ''}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="checkIn">Check-in Date</label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                min={today}
                className={errors.checkIn ? 'error' : ''}
              />
              {errors.checkIn && <span className="error-message">{errors.checkIn}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="checkOut">Check-out Date</label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                min={formData.checkIn || today}
                className={errors.checkOut ? 'error' : ''}
              />
              {errors.checkOut && <span className="error-message">{errors.checkOut}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              max={selectedRoom.capacity}
              className={errors.guests ? 'error' : ''}
            />
            {errors.guests && <span className="error-message">{errors.guests}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <div className="booking-summary">
            <div className="summary-row">
              <span>Room Type:</span>
              <span>{selectedRoom.type}</span>
            </div>
            <div className="summary-row">
              <span>Check-in:</span>
              <span>{formatDate(formData.checkIn)}</span>
            </div>
            <div className="summary-row">
              <span>Check-out:</span>
              <span>{formatDate(formData.checkOut)}</span>
            </div>
            <div className="summary-row">
              <span>Guests:</span>
              <span>{formData.guests}</span>
            </div>
            <div className="summary-row total">
              <span>Total Price:</span>
              <span>${totalPrice}</span>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm; 