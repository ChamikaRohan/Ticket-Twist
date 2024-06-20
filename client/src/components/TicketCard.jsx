import React from 'react';
import './TicketCard.css';
import { useNavigate } from 'react-router-dom';

export default function TicketCard({ ticket }) {
  const navigate = useNavigate();

  const formattedDate = (date)=>{
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } 

  const handleViewTicket = () =>{
    navigate(`/view-ticket/${ticket._id}`)
  }

  return (
    <div className="ticket-card" onClick={handleViewTicket}>
      <img src={ticket.image} alt={ticket.eventName} className="ticket-photo" />
      <div className="ticket-details">
        <h3 className="event-name">{ticket.name}</h3>
        <p className="event-date">{formattedDate(ticket.validity_date)}</p>
        <p className="event-location">{ticket.location}</p>
        <p className="ticket-price">Rs.{ticket.price_lkr}</p>
      </div>
    </div>
  );
}
