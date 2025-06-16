# Luxury Hotel Booking Application

A modern, responsive hotel booking web application built with React, featuring a sleek dark theme with glass morphism effects.

## 🌟 Features

- **Modern UI/UX Design**

  - Dark theme with glass morphism effects
  - Responsive design for all devices
  - Smooth animations and transitions
  - Gradient accents and modern typography

- **Room Management**

  - Browse available rooms
  - Filter rooms by price and capacity
  - Detailed room information and features
  - Room images with hover effects

- **Booking System**

  - Real-time availability checking
  - Date selection with validation
  - Guest information management
  - Price calculation based on stay duration

- **Contact System**
  - Contact form with validation
  - Multiple contact methods
  - Real-time form feedback
  - Success/error handling

## 🛠️ Technologies Used

- **Frontend Framework**

  - React.js
  - React Router for navigation
  - CSS3 with modern features
  - Font Awesome for icons

- **Design Patterns**
  - Component-Based Architecture
  - Container/Presenter Pattern
  - Custom Hooks for state management
  - Context API for theme management

## 📋 Requirements

### System Requirements

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Modern web browser with CSS Grid and Flexbox support

### Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "@fortawesome/fontawesome-free": "^6.0.0"
  }
}
```

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/hotel-booking.git
```

2. Navigate to the project directory:

```bash
cd hotel-booking
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
hotel-booking/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── HotelList.js
│   │   ├── BookingForm.js
│   │   ├── Contact.js
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Design Patterns

### 1. Component-Based Architecture

- Modular components for reusability
- Separation of concerns
- Easy maintenance and testing

### 2. Container/Presenter Pattern

- Container components for logic
- Presenter components for UI
- Clean separation of data and presentation

### 3. Custom Hooks

- Form handling
- Date validation
- Price calculations
- State management

### 4. CSS Architecture

- CSS Variables for theming
- BEM naming convention
- Responsive design patterns
- Glass morphism effects

## 🔑 Key Features Implementation

### Glass Morphism Effect

```css
.glass-effect {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Responsive Design

- Mobile-first approach
- CSS Grid and Flexbox
- Media queries for breakpoints
- Fluid typography

### Form Validation

- Real-time input validation
- Custom error messages
- Form state management
- Success/error feedback

## 🎯 Future Enhancements

1. **Backend Integration**

   - Real database connection
   - User authentication
   - Payment processing

2. **Additional Features**

   - Room reviews and ratings
   - Advanced search filters
   - Multi-language support
   - Dark/Light theme toggle

3. **Performance Optimization**
   - Image optimization
   - Code splitting
   - Lazy loading
   - Caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Daniel Gidey

## 🙏 Acknowledgments

- React.js community
- Font Awesome for icons
- Unsplash for images
- All contributors and supporters
