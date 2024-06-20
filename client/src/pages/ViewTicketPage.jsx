import React, { useState } from 'react'
import Layout from '../components/Layout.jsx'
import { useParams } from 'react-router-dom';

export default function ViewTicketPage() {
  const apiURL = import.meta.env.VITE_API_BASE_URL;

  const [mainTicket, setMainTicket] = useState();

  const { _id } = useParams();

  const getTicketDetails = async() =>{
    try
    {
      const response = await fetch(`${apiURL}/main-ticket/get-main-ticket/${_id}`);
      const data = await response.json();
      setMainTicket(data);
    }
    catch(error)
    {
      console.log(error);
    }
  }

  const getOwnerDetails = async() =>{
    try
    {
      const {owner_id} = mainTicket;
      const response = await fetch(`${apiURL}/main-ticket/get-main-ticket/${owner_id}`);
      const data = await response.json();
      setMainTicket(data);
    }
    catch(error)
    {
      console.log(error);
    }
  }
  
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
