import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import "./ProfilePage.css"
import { retriveUserID } from '../middlewares/RetriveUserID';
import UnknownOwner from "../assets/UnknownOwner.jpg"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ProfilePage() {
    const apiURL = import.meta.env.VITE_API_BASE_URL;

    const [owner, setOwner] = useState(null);

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pnumber, setPnumber] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(true);
    const [selectedimg, setSelectedimg] = useState("");
    const [selectedURL, setSelectedURL] = useState("")

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

    useEffect(()=>{
      const setOwnerValues = async()=>{
        setFname(owner.first_name);
        setLname(owner.last_name);
        setEmail(owner.email);
        setPnumber(owner.phone_number);
        setAddress(owner.address);
        setPassword(owner.password);
      }

      setOwnerValues();
    },[owner])

    const handleProPicChange = async(e) =>{
        e.preventDefault();
        if(!selectedimg){console.log("No file selected!");return;}
        try
        {
            const fromdata = new FormData();
            fromdata.append("file", selectedimg);

            const response = await fetch(`${apiURL}/owner/create-ownerimg`,{
                method: "POST",
                body: fromdata
            });
            const data = await response.json();
            setSelectedURL(data[["downloadURL"]]);
            handleClose();
            console.log(data.message);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdateOwner = async(e)=>{
    e.preventDefault();
    const response = await fetch(`${apiURL}/owner/update-owner`,{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({first_name: fname, last_name: lname, email, phone_number: pnumber, address, propic: selectedURL}),
      credentials: "include"
    });
    const data = await response.json();
    console.log(data);
  }

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
    <div class="card-profile">
        <img onClick={handleShow} class="img" src={selectedURL? selectedURL : (owner.propic? owner.propic :UnknownOwner)}></img>
    
        <form class="form-owner">
            <p class="form-owner-title">Hello {fname}!</p>

                <div class="form-owner-input-container">
                    
                        <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)} placeholder="Enter first name" />
                        <input type="text" value={lname} onChange={(e)=>setLname(e.target.value)} placeholder="Enter last name" />
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                        <input type="text" value={pnumber} onChange={(e)=>setPnumber(e.target.value)} placeholder="Enter phone number" />
                        <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter address" />
                
                </div>

                <button type="submit" onClick={handleUpdateOwner}class="form-owner-submit">Update my profile</button>
        </form>
    </div>}
    
    </div>
    </div>
    </section>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><span class="title">Edit profile picture image</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p class="message">Select a image to upload from your computer or device.</p>
            <div class="actions">
          <label for="file" class="button upload-btn">Choose File
            <input hidden="true" type="file" id="file" onChange={(e)=>setSelectedimg(e.target.files[0])}/>
          </label>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleProPicChange}>
            Upload Image
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  )
}
