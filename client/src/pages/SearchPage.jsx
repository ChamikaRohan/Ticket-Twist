import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer.jsx';
import TicketCard from '../components/TicketCard';
import './SearchPage.css';
import Layout from '../components/Layout.jsx';
import ticketSearch from "../assets/ticket.svg";

export default function SearchPage() {
  const apiURL = import.meta.env.VITE_API_BASE_URL;

  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchStatus, setSearchStatus] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchTickets = async () => {
    setSearchStatus(true);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${apiURL}/main-ticket/get-tickets-by-category/${searchQuery}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTickets(data);
      setLoading(false);
      setSearchStatus(false);
    } catch (error) {
      setLoading(false);
      setSearchStatus(false);
      setError(error.message || 'Failed to fetch tickets');
      console.error('Error fetching tickets:', error);
    }
  };

  return (
    <Layout>
      <section className="d-flex justify-content-center align-items-center text-center text-white">
        <div className="container" style={{ margin: '20px', maxWidth: '800px' }}>
          <h2 className="fw-bolder display-5" style={{ color: '#f3a42f' }}>Search Tickets</h2>

          <div className="ticket-search">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              className="ticket-search__input"
              placeholder="Search a ticket"
            />
            <button className="ticket-search__button" onClick={handleSearchTickets}>
              <svg className="ticket-search__icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
            </button>
          </div>

          {searchStatus && (
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "70px" }}>
              <div className="explore-loader"></div>
            </div>
          )}

          {error && <p>Error: {error}</p>}

          {!loading && !searchStatus && tickets.length === 0 && (
            <img src={ticketSearch} alt="Ticket search icon" style={{ width: "100px", marginTop: "80px" }} />
          )}

          {tickets.length > 0 && (
            <div className="ticket-container">
              {tickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          )}

        </div>
      </section>
    </Layout>
  );
}
