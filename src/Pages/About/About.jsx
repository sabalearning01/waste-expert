import React from 'react'
import './About.css'
import Navbar from '../../Components/Navbar/Navbar'
import underline from '../../Images/underline.png'
import lemonbg from '../../Images/lemonbg.png'
import wastexpectimg from '../../Images/wastexpectimg.png'
import Chinawaste from '../../Images/Chinawaste.png'
import lemonbg2 from '../../Images/lemonbg2.png'
import recyclebin1 from '../../Images/recyclebin1.png'
import recyclebin2 from '../../Images/recyclebin2.png'
import bottle from '../../Images/bottle.png'
import bin from '../../Images/bin.png'
import AboutG from '../../Images/AboutG.png'
import our from '../../Images/our.png'
import Footer from '../../Components/Footer/Footer'


 const About = () => {
  return (
    <div className='main'>
      <Navbar/>
      

      
    <div className='mother'>
    
    <div className='left'>
      <h2>About us</h2>
      <img src ={underline} alt="underlinevector"/>
      <p>Wastexpert is a waste recycling and social <br/> benefit venture borne out of sheer passion and<br/> vision to transform our environment into a zero <br/> landfill  and zero waste nation. We operates an <br/>incentive-based scheme which collects recyclable <br/> materials from enerprie and households by giving<br/> them a chance to generate value from their <br/> waste and provide a reliable supply of raw <br/> material to the local recycling industry. And in <br/> turn rewards them with “Points” which they can<br/> accumulate overtime and cash out or use to <br/> redeem/shop for household items offered through <br/> our Wastexpert- store.</p>
    </div>
    <div className='right'>
        <img src = {AboutG} alt="heroimage"/>   
      </div>

      
    </div>

      <div className='thickline'></div> 

     <div className='Waste'>
      <div className='leftimg'>
      <img src = {Chinawaste} alt="wastexpertman"/>
      </div>
      <div className='wastemenace'>
       <h2>Waste Menace</h2>
       <img src ={underline} alt="underlinevector"/>
       <p>It is a common sight to see our streets, drainages, roadsides and even dumpsites packed with recyclable packaging materials which are carelessly disposed of by users. This practice often poses environmental hazards to communities as they experience flood due to the blockage of water drainages by most of these recyclables which has become the fastest growing packaging option in the beverage and food industry. Lagos State (our pilot location) has an estimated population of 17 million people and daily generates an average of 9,000 metric tonnes of waste of which 1,200 metric tonnes are currently recycled. Recyclables form the bulk of identifiable items at refuse points in Nigeria. Often times, the drainage channels in the metropolis cities are blocked by these recyclable items and the resultant effect during the rainy season is flood and breeding ground for harmful organisms.</p>
      </div>
    </div>




    <div className='Waste2'>
      <div className='wastebin'>
       <h2>Our Solution</h2>
       <img src ={underline} alt="underlinevector"/>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. </p>
      </div>

      <div className='rightimg1'>
      <img src = {our} alt="bin"/>
      </div>
    </div>

    <div className='cont'>
      <img src = {recyclebin1} alt="recyclebin"/>
      <p>If you care about the environment and how it will affect mankind,
      then recycling shoudn’t take a second thought.</p>
      <img src = {recyclebin2} alt="recyclebin"/>
    </div>
       <h5 className='jeffery'>Jeffery Sanderson</h5>

        <Footer/> 
          
       </div>
      
  )
}

export default About