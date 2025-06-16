import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const hotelInfo = {
  name: "Grand Luxury Hotel",
  location: "New York",
  rating: 4.8,
  description: "Experience unparalleled luxury in the heart of New York City. Our hotel offers world-class amenities, exquisite dining, and exceptional service that will make your stay truly memorable.",
  mainImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  features: [
    {
      title: "Luxury Pool",
      description: "Enjoy our infinity pool with stunning city views",
      icon: "🏊‍♂️"
    },
    {
      title: "Fine Dining",
      description: "Multiple award-winning restaurants",
      icon: "🍽️"
    },
    {
      title: "Spa & Wellness",
      description: "Rejuvenate your body and mind",
      icon: "💆‍♀️"
    },
    {
      title: "Fitness Center",
      description: "State-of-the-art equipment and classes",
      icon: "💪"
    }
  ],
  amenities: [
    "Free WiFi",
    "24/7 Room Service",
    "Concierge Service",
    "Business Center",
    "Valet Parking",
    "Gift Shop"
  ]
};

const featuredRooms = [
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
    type: "Executive Suite",
    price: 499,
    capacity: 3,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["King Bed", "Living Room", "Executive Lounge Access", "Work Desk", "City View"]
  },
  {
    id: 3,
    type: "Presidential Suite",
    price: 899,
    capacity: 4,
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["2 King Beds", "Private Terrace", "Butler Service", "Dining Room", "Panoramic View"]
  }
];

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>{hotelInfo.name}</h1>
          <p className="location">{hotelInfo.location}</p>
          <p className="rating">★ {hotelInfo.rating} Luxury Rating</p>
          <p className="description">{hotelInfo.description}</p>
        </div>
      </section>

      <section className="features">
        <h2>Luxury Features</h2>
        <div className="features-grid">
          {hotelInfo.features.map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-rooms">
        <h2>Featured Rooms</h2>
        <div className="rooms-grid">
          {featuredRooms.map(room => (
            <div key={room.id} className="room-card">
              <img src={room.image} alt={room.type} />
              <div className="room-info">
                <h3>{room.type}</h3>
                <p className="price">From ${room.price} per night</p>
                <div className="features">
                  {room.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <Link to={`/booking/${room.id}/${room.type}`} className="book-now-button">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="amenities">
        <h2>Hotel Amenities</h2>
        <div className="amenities-grid">
          {hotelInfo.amenities.map((amenity, index) => (
            <div key={index} className="amenity-item">
              <span className="amenity-icon">✨</span>
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home; 