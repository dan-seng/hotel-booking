# SPDY Hotel Booking Application

A modern, responsive hotel booking web application built with React.

## 🌟 Features

- **Modern UI/UX Design**
  - Responsive layout with CSS Grid and Flexbox
  - Glass morphism and gradient effects
  - Font Awesome icons

- **Room & Hotel Management**
  - Browse and filter available rooms by price and capacity
  - Detailed room and hotel information
  - Room images and feature tags

- **Booking System**
  - Booking form with validation
  - Price calculation based on stay duration and room type
  - Real-time form feedback

- **Authentication**
  - Sign in / Sign up form with validation
  - Social login buttons (UI only)

- **Contact System**
  - Contact form with validation and feedback
  - Hotel contact info section

## 🛠️ Technologies Used

- React.js (v19+)
- React Router DOM (v6+)
- CSS3 (custom, no CSS frameworks)
- Font Awesome (via CDN)
- [Testing Library](https://testing-library.com/) for unit tests

## 📋 Requirements

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## 🚀 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/hotel-booking.git
   cd hotel-booking
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
hotel-booking/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   └── images/
│       ├── hotel.jpg
│       ├── hotel2.jpg
│       └── ... (other images)
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── components/
│       ├── Navbar.js / Navbar.css
│       ├── Footer.js / style.css
│       ├── Home.js / style.css
│       ├── HotelList.js / HotelList.css
│       ├── HotelDetails.js / HotelDetails.css
│       ├── BookingForm.js / BookingForm.css
│       ├── Contact.js / Contact.css
│       └── Auth.js / Auth.css
├── package.json
└── README.md
```

## 🧩 Main Components

- [`App.js`](src/App.js): Main app with routing and layout
- [`Navbar`](src/components/Navbar.js): Top navigation bar
- [`Footer`](src/components/Footer.js): Footer section
- [`Home`](src/components/Home.js): Landing page
- [`HotelList`](src/components/HotelList.js): Room/Hotel listing with filters
- [`HotelDetails`](src/components/HotelDetails.js): Detailed hotel info (sample data)
- [`BookingForm`](src/components/BookingForm.js): Room booking form with validation
- [`Contact`](src/components/Contact.js): Contact form and info
- [`Auth`](src/components/Auth.js): Sign in / Sign up UI

## 🧪 Testing

- Unit tests are set up using [Testing Library](https://testing-library.com/).
- Run tests with:
  ```sh
  npm test
  ```

## 🎨 Design

- Glass morphism and gradients via CSS variables in [`App.css`](src/App.css)
- Responsive design with media queries
- Font Awesome icons via CDN in [`public/index.html`](public/index.html)

## 👥 Authors

| Name           | Role      |
| -------------- | --------- |
| Daniel Gidey   | Team Lead |
| Hluf G/meskel  | Developer |
| Meron Embaye   | Developer |
| Hermela Teklay | Developer |
| Eden Kidane    | Developer |
| Hayelom Takele | Developer |

---

This project is licensed under the MIT License.
