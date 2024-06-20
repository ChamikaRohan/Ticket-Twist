import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer.jsx';
import TicketCard from '../components/TicketCard';
import './ExplorePage.css';
import Layout from '../components/Layout.jsx'

export default function ExplorePage() {
const apiURL = import.meta.env.VITE_API_BASE_URL;

const [tickets, setTickets] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(()=>{
    getTickets();
},[]);

const getTickets = async() =>{
    const response = await fetch(`${apiURL}/main-ticket/get-all-main-tickets`);
    const data = await response.json();
    setTickets(data);
    setLoading(false);
}

  return (
    <Layout>
    <section className="d-flex justify-content-center align-items-center text-center text-white">
      <div className="container" style={{ margin: '20px', maxWidth: '800px' }}>
        <h2 className="fw-bolder display-5" style={{ color: '#f3a42f' }}>Explore Tickets</h2>

        {loading? 
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "70px" }}>
        <div class="explore-loader"></div>
        </div>
        :
        (<div className="ticket-container">
          
          {tickets.length > 0  ?
          (tickets.map((ticket)=>(
            <TicketCard ticket={ticket} />
          ))):
          <p style={{ color: "red" }}>Currently there are no available options.</p>}

        </div>)}
      </div>
    </section>
    </Layout>
  );
}
