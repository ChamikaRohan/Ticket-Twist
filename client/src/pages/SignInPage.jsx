import React, { useState } from 'react';
import './SignInPage.css';
import { useNavigate } from "react-router-dom"

export default function SignInPage() {
  const apiURL = import.meta.env.VITE_API_BASE_URL;

  const navigate =useNavigate();

  const [emailornum, setEmailornum] = useState("");
  const [password, setPassword] = useState("");

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    return /^\+?\d+$/.test(phone);
  };

  const handleSignIn = async(e)=> {
    try
    {
      e.preventDefault();
      const isemail = isValidEmail(emailornum);
      const isnum = isValidPhoneNumber(emailornum);
      var data;
      if (isemail && !isnum)
      {
        const response = await fetch(`${apiURL}/owner/signin-owner`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({email: emailornum, password})
        });
        const data = await response.json();

        if (response.status === 200)
        {
          console.log(data);
          navigate("/");
        }
        else
        {
          console.log(data.error);
        }

      }
      else if ( isnum && !isemail )
      {
        const response = await fetch(`${apiURL}/owner/signin-owner`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({phone_number: emailornum, password})
        });
        const data = await response.json();
        
        if (response.status === 200)
        {
          console.log(data);
          navigate("/");
        }
        else
        {
          console.log(data.error);
        }

      }
    }
    catch(error)
    {
      console.log(error.error);
    }
  }

  const handleSignUp = () =>{
    navigate("/signup");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "black", height: "100%"}}>
      
      <form className="form">

        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Hello there!</h2>
        </div>
      
        <div className="flex-column">
          <label>Email or Phone Number</label>
        </div>
        <div className="inputForm">
          <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
            <g id="Layer_3" data-name="Layer 3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
            </g>
          </svg>
          <input value={emailornum} onChange={(e)=>setEmailornum(e.target.value)} type="text" className="input" placeholder="Enter your email or phone number" />
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



        <div className="flex-row">
          <div>
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <span className="span">Forgot password?</span>
        </div>
        <button onClick={handleSignIn} className="button-submit">Sign In</button>
        <p className="p">Don't have an account? <span className="span" onClick={handleSignUp}>Sign Up</span></p>
        <p className="p line">Or With</p>
        <div className="flex-row">
          <button className="btn google">
            <svg version="1.1" width="20" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xml:space="preserve">
              <path style={{fill: '#FBBB00'}} d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456C103.821,274.792,107.225,292.797,113.47,309.408z"></path>
              <path style={{fill: '#518EF8'}} d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"></path>
              <path style={{fill: '#28B446'}} d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.994,99.039,142.53,99.039c27.48,0,53.165-7.354,75.188-20.174L416.253,455.624z"></path>
              <path style={{fill: '#F14336'}} d="M419.404,58.936l-82.933,67.896c-23.66-13.935-51.333-21.832-80.471-21.832c-65.036,0-120.88,41.347-142.689,99.358l-82.997-67.939h-0.014C73.79,54.966,159.755,0,256,0C318.115,0,374.187,22.126,419.404,58.936z"></path>
            </svg>
            Sign in with Google
          </button>
          <button className="btn facebook">
            <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.04C6.477 2.04 2 6.517 2 12.04c0 4.866 3.657 8.87 8.438 9.805v-6.93h-2.54v-2.875h2.54v-2.193c0-2.505 1.492-3.89 3.774-3.89 1.094 0 2.24.195 2.24.195v2.48h-1.26c-1.242 0-1.628.771-1.628 1.562v1.846h2.773l-.443 2.875h-2.33V21.84C18.343 20.907 22 16.905 22 12.04c0-5.522-4.477-10-10-10z"/>
            </svg>
            Sign in with Facebook
          </button>
        </div>
      </form>
    </div>
  );
}
