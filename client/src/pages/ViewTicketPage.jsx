import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoneyBill1, faCalendarDays } from '@fortawesome/free-regular-svg-icons';

library.add(faMoneyBill1, faCalendarDays);
import { faPhone, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './ViewTicketPage.css'; // Make sure to import your CSS file

export default function ViewTicketPage() {
  const apiURL = import.meta.env.VITE_API_BASE_URL;

  const [mainTicket, setMainTicket] = useState(null);
  const [ticketOwner, setTicketOwner] = useState(null);
  const [loading, setLoading] = useState(true);
  const { _id } = useParams();

  useEffect(() => {
    const getTicketDetails = async () => {
      try {
        const response = await fetch(`${apiURL}/main-ticket/get-main-ticket/${_id}`);
        const data = await response.json();
        setMainTicket(data);
      } catch (error) {
        console.error('Error fetching ticket details:', error);
      }
    };

    if (_id) {
      getTicketDetails();
    }
  }, [_id, apiURL]);

  useEffect(() => {
    const getOwnerDetails = async () => {
      if (mainTicket && mainTicket.owner_id) {
        try {
          const { owner_id } = mainTicket;
          const response = await fetch(`${apiURL}/owner/get-owner/${owner_id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const data = await response.json();
          setTicketOwner(data.owner);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.error('Error fetching owner details:', error);
        }
      }
    };

    if (mainTicket) {
      getOwnerDetails();
    }
  }, [mainTicket, apiURL]);

  console.log(ticketOwner);

  return (
    <Layout>
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bolder text-center mb-4" style={{ color: '#f3a42f' }}>View Ticket Details</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
            {loading? 
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "70px" }}>
              <div class="view-ticket-loader"></div>
              </div>
              :
              (<div className="card shadow position-relative glowing-border">
                  <img src={mainTicket.image} className="img-fluid rounded-top ticket-image" alt="Ticket Image" />
                  <div className="card-body">
                    <h4 className="card-title">{mainTicket.name}</h4>
                    <p className="card-text">{mainTicket.description}</p>
                    <p className="card-text">
                      This ticket is for a <strong>{mainTicket.category}</strong> event 
                      taking place at <strong>{mainTicket.location}</strong>. 
                      The seat is <strong>{mainTicket.seat_number}</strong> in the <strong>{mainTicket.section}</strong> section, 
                      and it is a <strong>{mainTicket.ticket_type}</strong> ticket.
                    </p>

                    <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
                      <a class="playstore-button" href="#">
                        <FontAwesomeIcon icon="fa-regular fa-money-bill-1" size="2x"/>
                        <span class="texts">
                          <span class="text-1">Get for</span>
                          <span class="text-2" style={{ color: "red" }}>{mainTicket.price_lkr}LKR</span>
                        </span>
                      </a>

                      <a class="playstore-button" href="#">
                        <FontAwesomeIcon icon="fa-regular fa-calendar-days" size="2x"/>
                        <span class="texts">
                          <span class="text-1">Valid on</span>
                          <span class="text-2" style={{ color: "red" }}>{new Date(mainTicket.validity_date).toLocaleDateString()}</span>
                        </span>
                      </a>
                    </div>
   

                  </div>
                </div>)}

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
