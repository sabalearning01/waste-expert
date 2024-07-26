import React from 'react'
import './Services.css'
import IMG from '../../Images/IMG.png'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import underline from '../../Images/underline.png'
import play from '../../Images/play.png'
import IMG2 from '../../Images/IMG2.png'
import GCRRecycling from '../../Images/GCRRecycling.png'
import newbg from '../../Images/newbg.png'
import Footer from '../../Components/Footer/Footer'
import  waste from '../../Images/waste.png'
import flip from '../../Images/flip.png'


 const Services = () => {
  return (
    <div>
      <Navbar2/>
      <div className='foster'>

        <div className='lside'>
          <h2 className='pick'>Pick Up</h2>
          <img src = {underline} alt="line"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna.</p>
         <div className='btnflex1'>
          <button className='pri-cta1'><a href="">Pick Up Request</a></button> <button className='sec-cta1'><img  className="playic" src= {play} alt="Playicon" /><a>Watch Video</a></button> 
         </div>
       
        </div>

        <div className='rside'>
        <img src = {IMG} alt="truck"/>
        </div>
      </div>

      <div className='motherhood'>
        <div className='dispose'>
           <img src = {IMG2} alt="disposable"/>
        </div>

        <div className='dropoff'>
          <h2 className='dropofftext'>Drop Off</h2>
          <img src ={underline} alt='underlineicon'/>
          <p className='lett'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna.</p>
          <div className='btnflex2'>
          <button className='pri-cta2'><a href="">View locations</a></button> <button className='sec-cta2'><img  className="playic" src= {play} alt="Playicon" /><a>Watch Video</a></button> 
         </div>
        </div>
      </div>


      <img  className="new" src={newbg} alt="wastebackground"/>
      
      <div className='Other'>
         <h1>Other Services</h1> 
         <img src ={underline} alt="line"/>

         <div className='boxcontainers'>
      <div className='containers'><img src={waste} alt="wasteimage"/><h4>Corporate</h4>  <p>Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. consectetur adipiscing elit. Mollis leo auctor a</p><button className='getcta'>Get Started</button> </div>
      <div className='containers'><img src={flip} alt="flipimage"/><h4>Flip it</h4><p>Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. consectetur adipiscing elit. Mollis leo auctor a</p><button className='getcta'>Get Started</button></div>
      <div className='containers'> <img src={waste} alt="wasteimage"/> <h4>Recce</h4><p>Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. consectetur adipiscing elit. Mollis leo auctor a</p><button className='getcta'>Get Started</button> </div>
      
     </div>

 <Footer/> 


      </div>
     





    </div>
  )
}

export default Services