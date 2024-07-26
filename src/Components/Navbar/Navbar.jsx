import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo  from '../../Images/logo.png'


const Navbar = () => {
  return (
    <div className='mainnav'>

        <div className='nav'>

            <div className='logofont'>
              <div className='flexlogotext'>
               <div><img className='logo' src={logo} alt="logo" /></div>
               <div> <h4>Wastexpert</h4></div>
               </div>
            </div>

            <div className='navbutton'>
              <ul>
              <Link to='/about'><li>About Us</li></Link>
                <Link to='/services'><li>Services</li></Link>
                <Link to='/contact us'><li>Contact Us</li></Link>
                <Link to="/faq"><li>FAQ</li>FAQ</Link>
                <button className="pribtn">Dashboard</button>
                </ul>
                </div>
        </div>

    </div>
  )
}

export  default Navbar