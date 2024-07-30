import React from 'react'
import './Navbar2.css'
import logo  from '../../Images/logo.png'
import { Link } from 'react-router-dom'
import Hamburger from '../../Images/Hamburger.png'

const Navbar2 = () => {
 



  return (
    <div>
        <div className='mainnav'>

<div className='nav'>

    <div className='logofont'>
      <Link to='/' style={{textDecoration: 'none'}}>
        <div className='flexlogotext'>
        <div><img className='logo' src={logo} alt="logo" /></div>
        <div> <h4>Wastexpert</h4></div>
        </div>
      </Link>
    </div>

    <div className='navbutton'>
        <Link to='/about'>About Us</Link>
        <Link to='/services'>Services</Link>
        {/* <a href="#">Services</a> */}
        <a href="#">Contact Us</a>
        <a href="#">FAQ</a>
        <button className="pribtn">Login</button>
        </div>


                           <div className='hamburger'> 
                  <img src={Hamburger} />
                </div> 
</div>
    </div>
    </div>
  )
}

export default Navbar2