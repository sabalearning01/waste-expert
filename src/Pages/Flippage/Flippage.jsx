import React from 'react'
import './Flippage.css'
import Navbar2 from '../../Components/Navbar2/Navbar2'
// import Car1 from '../../Images/Car1.png'
import car from '../../Images/car.png'
import underline from '../../Images/underline.png'
import rotateimage from '../../Images/rotateimage.png'

 const Flippage = () => {
  return (
    <div className='flippage'>
      <Navbar2/>

     <div className='flip'>
      <div className='fty'>
        <h2>Flip it</h2>
        <img src ={underline} alt="underlinevector"/>
        <p className='cool'>Make cool Cash by Flipping your old, discarded <br/> or Used iron items</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. </p>
      </div>
      <div className='hty'>
        <img src = {car} alt="Carimage"/>
      </div>
     </div>

     <div className='greenbg'></div>
    <div className='How'>
     <h2>How it works</h2>

    </div>

    </div>
  )
}

export default Flippage