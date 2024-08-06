import React from 'react'
import './Dashcomp.css'
import { GiHamburgerMenu } from "react-icons/gi";
import logowhite from '../../Images/logowhite.png'
import { CiSearch } from "react-icons/ci";

const Dashcomp = () => {
  return (
    <div className='Dashcomp'>
     <div className='header'>
         <div className='navi'>
            <div className='navigation'>
         <GiHamburgerMenu className='ham' />
         <img src ={logowhite} alt="logo"/>
         <div className='links'>
         <a>About Us</a>
         <a>Services</a>
         <a>Contact us</a>
         <a>FAQ</a>
         </div>

         <label>
            <input className='what' type="text" placeholder='What type of waste are you looking for?'/>
            <button className='search' type="submit"><CiSearch /></button>
         </label>
           


         </div>
         </div>


     </div>
    








    </div>
  )
}

export default Dashcomp