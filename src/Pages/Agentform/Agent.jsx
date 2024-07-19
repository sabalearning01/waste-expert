import React from 'react'
import './Agent.css'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import GCR from '../../Images/GCR.png'
import AGENTIMAGE from '../../Images/AGENTIMAGE.png'
import guyimage from '../../Images/guyimage.png'
import profit from '../../Images/profit.png'
import truck from '../../Images/truck.png'
import settings from '../../Images/settings.png'
// import { Accordion } from '@mui/material'
import Footer from '../../Components/Footer/Footer'
import Accordion from '../../Components/Accordion/Accordion'

 const Agent = () => {
  return (
    <div className='mo'>
      <Navbar2/>
       {/* <img  className ="bgimg" src={GCR} alt="backgroundgimage"/>  */}
        <div className='maincontainer'>
            <div className='lft'>
             <h2>Love to Chill with the ‘BIG’ boys?</h2>
             <p>Then sign up, Get screened to be our Agent. We will provide you with all the neccessary equipment to work with, as well as Customers to transact with. Start earn immediately!</p>
             <button className='agt'><a href="#">Become an agent</a></button>
            </div> 
            <div className='rth'>
                <img src={guyimage} alt="guyimage"/>  
            </div>
        </div>

        <div className='para'>Here is why You should roll with us</div>

          <div className='parents'>
          
          <div className='child1'><img src = {profit} alt="profiticon"/>
          {/* <p>Get commission on every kilogram <br/>collected from your outlet</p> */}
          </div>

          <div className='child2'><img src = {truck} alt="truckicon"/>
          {/* <p>Get disposal traffic directed to your outlet <br/> by our collectors and individuals looking to drop-off</p> */}
          </div>

          <div className='child3'><img src = {settings} alt="settingsicon"/>
          {/* <p>Get all the tools you need to run your <br/> business with zero setup cost</p> */}
          </div>
         


         </div> 
         <div className='flextool'>
          <p>Get commission on every kilogram <br/>collected from your outlet</p>
          <p>Get disposal traffic directed to your outlet <br/> by our collectors and individuals looking to drop-off</p>
          <p>Get all the tools you need to run your <br/> business with zero setup cost</p> 
          </div>

          <div className='thic'></div> 

          <Accordion/>
          <Footer/>




    </div>
  )
}

export default Agent