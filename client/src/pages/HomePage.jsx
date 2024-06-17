import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import "./HomePage.css"

export default function HomePage() {
  return (
    <div>
      {/* Full-Screen Hero Section */}
      <section className="hero-section d-flex justify-content-center align-items-center text-center text-white">
        <div>
          <h1 className="display-4">Welcome to Our Website</h1>
          <p className="lead">We are glad to have you here.</p>
          <a href="#next-section" className="btn btn-light">Learn More</a>
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
