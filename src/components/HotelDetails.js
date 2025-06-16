import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './HotelDetails.css';

const hotels = [
  {
    id: 1,
    name: "Grand Luxury Hotel",
    location: "New York",
    price: 299,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
    amenities: ["Pool", "Spa", "Restaurant", "Gym"],
    description: "Experience luxury at its finest in the heart of New York City. Our hotel offers world-class amenities, stunning views, and exceptional service.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    ],
    rooms: [
      {
        type: "Deluxe Room",
        price: 299,
        capacity: 2,
        features: ["King Bed", "City View", "Free WiFi"]
      },
      {
        type: "Executive Suite",
        price: 499,
        capacity: 3,
        features: ["King Bed", "Living Room", "City View", "Free WiFi"]
      },
      {
        type: "Presidential Suite",
        price: 899,
        capacity: 4,
        features: ["King Bed", "Living Room", "Dining Room", "Panoramic View", "Butler Service"]
      },
      {
        type: "Standard Room",
        price: 199,
        capacity: 2,
        features: ["Queen Bed", "City View", "Free WiFi"]
      },
      {
        type: "Family Suite",
        price: 599,
        capacity: 4,
        features: ["2 Queen Beds", "Living Room", "City View", "Free WiFi"]
      },
      {
        type: "Junior Suite",
        price: 399,
        capacity: 2,
        features: ["King Bed", "Sitting Area", "City View", "Free WiFi"]
      },
      {
        type: "Accessible Room",
        price: 249,
        capacity: 2,
        features: ["King Bed", "Accessible Bathroom", "City View", "Free WiFi"]
      },
      {
        type: "Corner Suite",
        price: 449,
        capacity: 2,
        features: ["King Bed", "Corner View", "Living Room", "Free WiFi"]
      },
      {
        type: "Garden View Room",
        price: 279,
        capacity: 2,
        features: ["King Bed", "Garden View", "Free WiFi"]
      },
      {
        type: "Penthouse Suite",
        price: 1299,
        capacity: 4,
        features: ["King Bed", "Private Terrace", "Living Room", "Dining Room", "Butler Service"]
      },
      {
        type: "Business Suite",
        price: 349,
        capacity: 2,
        features: ["King Bed", "Work Desk", "City View", "Free WiFi"]
      },
      {
        type: "Honeymoon Suite",
        price: 699,
        capacity: 2,
        features: ["King Bed", "Romantic Decor", "City View", "Champagne Service"]
      },
      {
        type: "Connecting Rooms",
        price: 598,
        capacity: 4,
        features: ["2 Queen Beds", "Connecting Door", "City View", "Free WiFi"]
      },
      {
        type: "Pool View Room",
        price: 329,
        capacity: 2,
        features: ["King Bed", "Pool View", "Free WiFi"]
      },
      {
        type: "Extended Stay Suite",
        price: 399,
        capacity: 2,
        features: ["King Bed", "Kitchenette", "Living Room", "City View", "Free WiFi"]
      }
    ]
  },
  // ... other hotels
];

function HotelDetails() {
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === parseInt(id));

  if (!hotel) {
    return <div className="not-found">Hotel not found</div>;
  }

  return (
    <div className="hotel-details">
      <div className="hotel-header">
        <h1>{hotel.name}</h1>
        <p className="location">{hotel.location}</p>
        <div className="rating">★ {hotel.rating}</div>
      </div>

      <div className="image-gallery">
        {hotel.images.map((image, index) => (
          <img key={index} src={image} alt={`${hotel.name} - View ${index + 1}`} />
        ))}
      </div>

      <div className="hotel-content">
        <div className="main-info">
          <section className="description">
            <h2>About this hotel</h2>
            <p>{hotel.description}</p>
          </section>

          <section className="amenities">
            <h2>Amenities</h2>
            <div className="amenities-grid">
              {hotel.amenities.map(amenity => (
                <div key={amenity} className="amenity-item">
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rooms">
            <h2>Available Rooms</h2>
            <div className="room-list">
              {hotel.rooms.map((room, index) => (
                <div key={index} className="room-card">
                  <h3>{room.type}</h3>
                  <p className="room-price">${room.price}/night</p>
                  <p className="room-capacity">Up to {room.capacity} guests</p>
                  <div className="room-features">
                    {room.features.map(feature => (
                      <span key={feature} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="booking-sidebar">
          <div className="booking-card">
            <h3>Book Your Stay</h3>
            <p className="price">From ${hotel.price}/night</p>
            <Link to={`/booking/${hotel.id}`} className="book-button">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails; 