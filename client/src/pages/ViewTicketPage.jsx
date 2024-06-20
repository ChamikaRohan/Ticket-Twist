import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout.jsx'
import { useParams } from 'react-router-dom';

export default function ViewTicketPage() {
  const apiURL = import.meta.env.VITE_API_BASE_URL;

  const [mainTicket, setMainTicket] = useState();
  const [ticketowner, setTicketowner] = useState();

  const { _id } = useParams();

  useEffect(() => {
    const getTicketDetails = async () => {
      try 
      {
        const response = await fetch(`${apiURL}/main-ticket/get-main-ticket/${_id}`);
        const data = await response.json();
        setMainTicket(data);
      } 
      catch (error) 
      {
        console.log(error);
      }
    };

    getTicketDetails();
  }, [_id]);

  useEffect(() => {
    const getOwnerDetails = async () => {
      if (mainTicket && mainTicket.owner_id) {
        try 
        {
          const { owner_id } = mainTicket;
          const response = await fetch(`${apiURL}/owner//get-owner/${owner_id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            }
          });
          const data = await response.json();
          setTicketowner(data);
        }
        catch (error) 
        {
          console.log(error);
        }
      }
    };

    getOwnerDetails();
  }, [mainTicket]);

  console.log(ticketowner);
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
