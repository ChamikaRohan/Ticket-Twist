import React from 'react'
import Layout from '../components/Layout.jsx'

export default function ViewTicketPage() {
  return (
    <Layout>
    <section className="d-flex justify-content-center align-items-center text-center text-white">
      <div className="container" style={{ margin: '20px', maxWidth: '800px' }}>
        <h2 className="fw-bolder display-5" style={{ color: '#f3a42f' }}>View Ticket Details</h2>
      </div>
    </section>
    </Layout>
  )
}
