import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Hero from '../components/Hero';
import Second from '../components/Second';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      {/* Full-Screen Hero Section */}
      <Hero/>

      {/* Full-Screen Second Section */}
      <Second/>

      <Footer/>
    </div>
  )
}
