import React, { useState } from 'react';
import './SignUpPage.css';
import { useNavigate } from "react-router-dom"
import { Toaster, toast } from 'react-hot-toast';
import Layout from '../components/Layout.jsx';

export default function SignUpPage() {
  const apiURL = import.meta.env.VITE_API_BASE_URL;

  const navigate =useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) =>{
    e.preventDefault();
    try
    {
      const response = await fetch(`${apiURL}/owner/signup-owner`,{
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({first_name: fname, last_name: lname, email, password, phone_number: pnumber, address})
      })

      const data = await response.json();
      
      if (response.status === 200)
      {
        console.log(data.message);
        toast.success('Sign Up successfully!', { duration: 1500 });
        setTimeout(()=>{
          navigate("/signin");
        }, 1600);
      }
      else
      {
        toast.error('Sign Up unsuccessfull!', { duration: 1500 });
        toast.error(`${data.error}`, { duration: 1500 });
        console.log(data.error);
      }
    }
    catch(error)
    {
      toast.error('Sign Up unsuccessfull!', { duration: 1500 });
      toast.error(`${error}`, { duration: 1500 });
      console.log(error);
    }
  }

  const handleSignIn = () =>{
    navigate("/signin");
  }

  return (
    <Layout>
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "black", height: "100%"}}>
      <form className="form">
        
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Let's Register!</h2>
        </div>

        <div className="flex-column">
          <label>Name</label>
        </div>
        <div style={{ gap: "10px" ,display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <div className="inputForm" style={{ width: "100%" }}>
            <input value={fname} onChange={(e)=>setFname(e.target.value)} type="text" className="input" placeholder="Enter your first name" />
          </div>
          <div className="inputForm" style={{ width: "100%" }}>
            <input value={lname} onChange={(e)=>setLname(e.target.value)} type="text" className="input" placeholder="Enter your last name" />
          </div>
        </div>


        <div className="flex-column">
          <label>Address</label>
        </div>
        <div className="inputForm">
        <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-4.962 0-9 4.038-9 9s9 15 9 15s9-10.038 9-15s-4.038-9-8-9zm0 4.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zm0 5.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
        </svg>
          <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text" className="input" placeholder="Enter your address" />
        </div>


        <div className="flex-column">
            <label>Email and Phone Number</label>
        </div>
        <div style={{ gap: "10px" ,display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <div className="inputForm" style={{ width: "100%" }}>
            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
              <g id="Layer_3" data-name="Layer 3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
              </g>
            </svg>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="input" placeholder="Enter your email" />
          </div>

          <div className="inputForm" style={{ width: "100%" }}>
            <svg height="20" viewBox="0 0 22 22" width="20" xmlns="http://www.w3.org/2000/svg">
              <g id="Layer_3" data-name="Layer 3">
              <path d="M6.62 10.79a15.53 15.53 0 0 0 6.99 6.99l2.2-2.2a1 1 0 0 1 1.11-.21 11.72 11.72 0 0 0 3.66.58 1 1 0 0 1 1 1v3.59a1 1 0 0 1-1 1C9.61 22 2 14.39 2 5.01a1 1 0 0 1 1-1H6.6a1 1 0 0 1 1 1 11.71 11.71 0 0 0 .58 3.66 1 1 0 0 1-.21 1.11l-2.2 2.2a1 1 0 0 1-.15.13z"></path>
              </g>
            </svg>
            <input value={pnumber} onChange={(e)=>setPnumber(e.target.value)} type="text" className="input" placeholder="Enter your phone number" />
          </div>
        </div>


        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
          </svg>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="input" placeholder="Enter your password" />
          <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
          </svg>
        </div>


        <button onClick={handleSignUp} className="button-submit" style={{ color: "#f3a42f" }}>Sign Up</button>
        <p className="p">Already have an account? <span className="span" onClick={handleSignIn}>Sign In</span></p>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
    </Layout>
  );
}
