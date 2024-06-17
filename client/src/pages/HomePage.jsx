import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import "./HomePage.css"

export default function HomePage() {
  return (
    <div>
      {/* Full-Screen Hero Section */}
      <section className="hero-section d-flex justify-content-center align-items-center text-center text-white">
        <div className='container' style={{ margin: "60px", maxWidth: "600px" }}>
        <h1 className="display-4">Welcome to TicketTwist</h1>
        <p className="display-6">Buy and Sell Event Tickets Easily!</p>
        <p className="fs-6" >Find tickets for concerts, sports, theater, and more. Join a community of event enthusiasts and never miss out on your favorite events...</p>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center"}}>
            <button className='button-browse' style={{ maxWidth: "150px"}} variant="light">Browse Tickets</button>
            <button className='button-browse' style={{ maxWidth: "150px"}} variant="light">Sell Tickets</button>
          </div>
        </div>
      </section>

      {/* Full-Screen Second Section */}
      <section id="next-section" className="second-section d-flex justify-content-center align-items-center text-center text-dark bg-white">
        <div>
          <h2>About Us</h2>
          <p className="lead">We are a company that values excellence.</p>
        </div>
      </section>
    </div>
  )
}
