import React from 'react'
import './Dashcomp.css'
import { GiHamburgerMenu } from "react-icons/gi";
import logowhite from '../../Images/logowhite.png'
import blackdude from '../../Images/blackdude.png'
import bell from '../../Images/bell.png'
import Beardgang from '../../Images/Beardgang.png'
import volunteer from '../../Images/volunteer.png'
import smile from '../../Images/smile.png'
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
    


    <div className='main'>
        <div className='leftcont'>
               <h1>Welcome on board, Johnson</h1>
               <p>Here is what is Happening in your wastexpect account today</p>
               </div>

        <div className='rightcont'>
             <div className='flexing'>
            <div>
             <img className='blk' src ={blackdude} alt="blackdude" />
             </div>
             <div className='kunle'>
             <h3>kunle Johnson</h3>
             <p>KingJohnson44@gmail.com</p>
             </div>
                <img src ={bell} alt="bell"/>
                
        </div>
        </div>

    </div>


    <p className='let'>Lets show you around and how to set up your profile.</p>

    





    </div>
  )
}

export default Dashcomp