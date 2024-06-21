import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import "./ProfilePage.css"
import { retriveUserID } from '../middlewares/RetriveUserID';
import UnknownOwner from "../assets/UnknownOwner.jpg"

export default function ProfilePage() {
    const apiURL = import.meta.env.VITE_API_BASE_URL;

    const [owner, setOwner] = useState(null);
    const [loading, setLoading] = useState(true);

    const getOwnerDetails = async () => {
        try 
        {
            const _id = await retriveUserID();
            const response = await fetch(`${apiURL}/owner/get-owner/${_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
            });
            const data = await response.json();
            setOwner(data.owner);
            setLoading(false);
        } 
        catch (error) 
        {
            console.error('Error fetching owner details:', error);
        }
        }

    useEffect(()=>{
        getOwnerDetails();
    },[]);

  return (
    <Layout>
    <section className="d-flex justify-content-center align-items-center text-center text-white">
    
    <div className="container" style={{ margin: '20px', marginLeft: "6px", marginRight: "6px", maxWidth: '600px' }}>
        <h2 className="fw-bolder display-5" style={{ color: '#f3a42f' }}>Your Profile</h2>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "40px" }}>
    
    {loading ? 
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "70px" }}>
    <div class="profile-loader"></div>
    </div>
    :
    <div class="card">
        <img class="img" src={UnknownOwner}></img>
    
        <form class="form-owner">
            <p class="form-owner-title">Hello again!</p>

                <div class="form-owner-input-container">
                    
                        <input type="text" value={owner.first_name} placeholder="Enter first name" />
                        <input type="text" value={owner.last_name} placeholder="Enter last name" />
                        <input type="email" value={owner.email} placeholder="Enter email" />
                        <input type="text" value={owner.phone_number} placeholder="Enter phone number" />
                        <input type="text" value={owner.address} placeholder="Enter address" />
                        <input type="password" value={owner.password} placeholder="Enter email" />
                
                </div>

                <button type="submit" class="form-owner-submit">
                Update Info
                </button>
        </form>

        <button>Resume</button>
    </div>}
    
    </div>
    </div>
    </section>
    </Layout>
  )
}
