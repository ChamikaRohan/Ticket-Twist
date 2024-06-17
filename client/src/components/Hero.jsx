import React from 'react';
import "./Hero.css";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="hero-section d-flex justify-content-center align-items-center text-center text-white">
      <div className='container' style={{ margin: "60px", maxWidth: "600px" }}>
        <h1 className="fw-bolder display-5" style={{ marginBottom: "30px" }}>Welcome to TicketTwist</h1>
        <TypeAnimation
          sequence={[
            "Simplify Your Ticket Buying and Selling Experience!",
            1000,
            "Join the community of event enthusiasts",
            1000,
            "Enjoy a smooth, user-friendly experience with every transaction",
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{fontFamily: "Poppins Regular",  color: "gray",fontSize: { xs: '0.6rem', sm: '1rem', md: "1.3rem" } }}
          repeat={Infinity}
        />
        <p className="fs-6" style={{ marginTop: "30px" }}>Find tickets for concerts, sports, theater, and more. Join a community of event enthusiasts and never miss out on your favorite events</p>
        <div style={{ marginTop: "30px" ,display: "flex", gap: "30px", alignItems: "center", justifyContent: "center"}}>
          <button className='button-browse' style={{ maxWidth: "150px" }}>Browse Tickets</button>
          <button className='button-browse' style={{ maxWidth: "150px" }}>Sell Tickets</button>
        </div>
      </div>
    </section>
  );
}
