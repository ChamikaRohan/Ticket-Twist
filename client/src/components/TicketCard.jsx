import React from 'react';
import './TicketCard.css';

export default function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      <img src={ticket.photo} alt={ticket.eventName} className="ticket-photo" />
      <div className="ticket-details">
        <h3 className="event-name">{ticket.eventName}</h3>
        <p className="event-date">{ticket.date}</p>
        <p className="event-location">{ticket.location}</p>
        <p className="ticket-price">${ticket.price}</p>
      </div>
    </div>
  );
}
