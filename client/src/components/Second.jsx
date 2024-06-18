import React from 'react'
import "./Second.css"

export default function Second() {
  return (
    <section id="next-section" className="second-section d-flex justify-content-center align-items-center text-center text-dark bg-white">
        <div className='container' style={{ margin: "60px", maxWidth: "600px" }}>
        <div className="content-container">
          <h2>About TicketTwist</h2>
          <p className="lead">
            TicketTwist is your ultimate destination for buying and reselling event tickets. Whether you're into concerts, sports, theater, or any other live events, we have got you covered.
          </p>
          <p>
            Our platform is designed to make the ticketing process as seamless and enjoyable as possible. Join our community of event enthusiasts and ensure your tickets find their way to eager attendees. Experience the excitement of live events with ease and peace of mind.
          </p>
        </div>
        </div>
    </section>
  )
}
