import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Home (){
  return (
  <div className='main-page'>
   <div className="upper-main">
   <div className="book">
    <div className='dd'>
    <h1>Book Your Stay</h1>
     <Link to="/rooms" className="book-button">Book Now</Link>
    </div>
     </div>
    <div className="things-hotel">
      <p>
        step into a world where elegance meets comfort.
        Our hotel blends timeless luxury with modern charm, offering exquisite rooms,
        curated experiences, and a heartfelt hospitality crafted to turn your stay 
        into a story worth remembering.
      </p>
    </div>
   </div>
   <div className="middle-main">
    <p>
      Your comfort is our priority. Enjoy your 
      family holiday with everything you need to make lasting memories.
    </p>
    <div className="exp">
      <h3>Experience elegance and comfort</h3>
    </div>
    <div className="exp2">
      <h3>
        Relax, Refresh, Rejuvenate
      </h3>
    </div>
   </div>
 <div className="lower-main">
 <div className="room-sax">
    <p>
      enjoy comfort and style with extra space, modern design, and elegant 
      decor to make yor stay unforgattable.
    </p>
    <div className="img-sax">
      <img src="/images/hotel.jpg" alt="" className='sax-pic' />
      <h3>Deluxe Room</h3>
      <h3>Birr 1500/Night</h3>
    </div>
  </div>
  <div className="room-sax">
    <p>
     Experience true luxury with separate living and sleeping areas,
      perfect for families or guests seeking more privacy.
      </p>
    <div className="img-sax">
      <img src="/images/hotel3.jpg" alt=""  className='sax-pic' />
      <h3>Suite Room</h3>
      <h3>Birr 2500/Night</h3>
    </div>
  </div>
  <div className="room-sax">
    <p>
     Designed for business travellers with access to exclusive services,
     workspace, and premium amenities.
    </p>
    <div className="img-sax">
      <img src="/images/hotel5.png" alt="" className='sax-pic' />
      <h3>Execute Room</h3>
      <h3>Birr 2000/Night</h3>
    </div>
  </div>
 </div>

  </div>
  )
}

export default Home;