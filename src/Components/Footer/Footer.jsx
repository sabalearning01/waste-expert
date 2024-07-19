import React, { useState } from 'react'
import './Footer.css'
import Wasteexpertlogo from '../../Images/Wasteexpertlogo.png'
import facebook from '../../Images/facebook.png'
import instagram from '../../Images/instagram.png'
import M from '../../Images/M.png'
import twitter  from '../../Images/twitter.png'
import linkedln from '../../Images/linkedin.png'

 const Footer = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const handleChange =(e) =>{
    setData(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (data === ""){
      setError("Email can't be empty");
    }else if(!emailRegex.test(data)){
      setError("Enter a valid email");
    }else{
      alert("Subscribed")
    }
  }
    
  const top =()=>{
    window.scrollTo(0,0);
  };

  return (
    <div className='Footer'>
          <div className='logoinput'>
            <div className='image'>
            <img src = {Wasteexpertlogo} alt="wastexpertlogo"/>
            </div>
          
      
            <label>
               
                <p className='Sub'>Subscribe to our Newsletter</p>
                {/* <form onSubmit={handleSubmit}> */}
                <input type="text" placeholder='Enter your email address here' value={data} onChange={handleChange} />
                {/* {error && <p  style={{color: "red"}}>{error}</p>} */}
                {/* </form> */}
              <button className='signup'>Sign Up</button>
               
                </label>
              
          </div>

         <div className='paralinks'>
          <div className='paragraph'>
            <p>Wastexpert is a waste recycling and social <br/> benefit venture borne out of sheer passion and <br/> vision to transform our environment into a zero <br/> landfill and zero waste nation. We operates an <br/> incentive-based scheme which collects recyclable <br/> materials from post consumers and in turn <br/> rewards them with “Points” which they can <br/> accumulate overtime and cash out or use to <br/> redeem/shop for household items offered through <br/> our Wastexpert store.</p>
            </div>
             
             <div className='Abt'>
              <h4>About</h4>
              <p>Our Mission</p>
              <p>Vision</p>
              <p>Solution</p>
              <p>Teams</p>
             </div>

             <div className='Contact'>
              <h4>Contact</h4>
              <p>Our Mission</p>
              <p>Vision</p>
              <p>Solution</p>
              <p>Teams</p>
             </div>

             <div className='Service'>
              <h4>Service</h4>
              <p>Waste to wealth pick up</p>
              <p>Flip-it</p>
              <p>Waste drop off point</p>
              <p>Corporate Recycling</p>
             </div>
         </div>

         <hr></hr>

         <div className='footericon'>
          <h4>Copyright © 2020, Created by Wastexpert Team</h4>
          <div className='footericons'>
           <img src = {facebook} alt="facebookicon" />
           <img src = {instagram} alt="instagramicon" />
           <img src = {twitter} alt="twittericon" />
           <img src = {linkedln} alt="linkedinicon" />
           <img src = {M} alt="Micon" />

          </div>
         </div>

    </div>
  )
}

export default Footer