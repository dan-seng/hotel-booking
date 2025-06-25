import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HotelList.css';

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

function HotelList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minCapacity, setMinCapacity] = useState('');

  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = !maxPrice || room.price <= parseInt(maxPrice);
    const matchesCapacity = !minCapacity || room.capacity >= parseInt(minCapacity);
    return matchesSearch && matchesPrice && matchesCapacity;
  });

  return (
    <div className="hotel-list">
      <div className="filters">
        <input
          type="text"
          className="search-input"
          placeholder="Search rooms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="filter-select"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        >
          <option value="">Max Price</option>
          <option value="300">$300</option>
          <option value="500">$500</option>
          <option value="1000">$1000</option>
          <option value="1500">$1500</option>
        </select>
        <select
          className="filter-select"
          value={minCapacity}
          onChange={(e) => setMinCapacity(Number(e.target.value))}
        >
          <option value="">Min Capacity</option>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
        </select>
      </div>

      <div className="room-grid">
        {filteredRooms.map((room) => (
          <div key={room.id} className="room-card">
            <div className="room-image">
              <img src={room.image} alt={room.type} />
            </div>
            <div className="room-info">
              <h3 className="room-type">{room.type}</h3>
              <div className="room-features">
                {room.features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
              <div className="room-price">
                ${room.price}<span> per night</span>
              </div>
              <div className="room-capacity">
                <svg viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                {room.capacity} {room.capacity === 1 ? 'Guest' : 'Guests'}
              </div>
              <Link 
                to={`/booking/${room.id}/${encodeURIComponent(room.type)}`} 
                className="book-now-button"
                onClick={() => console.log('Booking room:', room.type)}
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelList; 