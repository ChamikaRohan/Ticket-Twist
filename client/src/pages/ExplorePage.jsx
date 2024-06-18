import React from 'react';
import Footer from '../components/Footer.jsx';
import TicketCard from '../components/TicketCard';
import './ExplorePage.css';

const ticket = {
  photo: 'https://via.placeholder.com/150',
  eventName: 'Rock Concert',
  date: 'June 30, 2024',
  location: 'Madison Square Garden, NY',
  price: '99.99',
};

export default function ExplorePage() {
  return (
    <section className="d-flex justify-content-center align-items-center text-center text-white">
      <div className="container" style={{ margin: '20px', maxWidth: '800px' }}>
        <h2 className="fw-bolder display-5" style={{ color: '#f3a42f' }}>Explore Tickets</h2>
        <div className="ticket-container">
          <TicketCard ticket={ticket} />
          <TicketCard ticket={ticket} />
          <TicketCard ticket={ticket} />
          <TicketCard ticket={ticket} />
        </div>
        <Footer />
      </div>
    </section>
  );
}
