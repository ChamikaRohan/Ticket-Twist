import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer-section text-white bg-black">
      <div className="container text-center py-5">
        <div className="footer-content">
          <h4>Contact Us</h4>
          <p>Email: support@tickettwist.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: PO Bo: 130, TRI, Hanthana, Kandy</p>
        </div>
        <div className="social-media">
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <p className="mt-4" style={{ color: '#f3a42f' }}>&copy; {new Date().getFullYear()} TicketTwist. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
