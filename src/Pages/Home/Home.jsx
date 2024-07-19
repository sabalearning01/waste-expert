import React, {useRef, useState} from 'react'
import './Home.css'

import Navbar from '../../Components/Navbar/Navbar'
// import guyman from '../../Images/guyman.png'
import play from '../../Images/play.png'
import GCR from '../../Images/GCR.png'
import guy2 from '../../Images/guy2.png'
import  Access from '../../Images/Access.png'
import CocaCola from '../../Images/CocaCola.png'
import Jaizbank from '../../Images/Jaizbank.png'
import NigeriaBrewe from '../../Images/NigeriaBrewe.png'
import Ogunstate from '../../Images/Ogunstate.png'
import Tobaccobrand from '../../Images/Tobaccobrand.png'
import UBA from '../../Images/UBA.png'
import Nestle from '../../Images/Nestle.png'
import Factoryworker from '../../Images/Factoryworker.png'
import Arrowicon from '../../Images/Arrowicon.png'
import Footer from '../../Components/Footer/Footer'
import Circle from '../../Images/Circle.png'
import god from '../../Images/god.png'
import blackguy from '../../Images/blackguy.png'
import aluminiumplate from '../../Images/aluminiumplate.png'
import cardboardcorrugated from '../../Images/cardboardcorrugated.png'
import bottlegroup from '../../Images/bottlegroup.png'
import crushedbottles from '../../Images/crushedbottles.png'
import Accordion from '../../Components/Accordion/Accordion'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import { useNavigate } from 'react-router-dom'







 const Home = () => {
  const [showVideo, setShowVideo] = useState(false)  
const handlePlay = () =>{
  setShowVideo(true)
  videoRef.current.play()
}
const videoRef = useRef();

const handlePause = () =>{

}

const navigate = useNavigate()
const readMore = ()=>{
  navigate ('About')
}


const beCome = ()=>{
  navigate ('AgentForm')
}

const collEctor = ()=>{
  navigate ('AgentForm')
}

const seeMore = ()=>{
  navigate ('Treasure')
}

  return (
    
    <div className='app'>
       
        <Navbar2/>

        <img  className="bgimg" src={GCR} alt="backgroundimage" />  

        <div className='Hero-section'>
          
          <div className='left-col'>  
          <h3>Waste to Wealth just got better</h3>
          <p>The Waste to Wealth Mission brings scientific processing<br/> of waste to the forefront to build a zero landfill and <br/> zero waste nation.</p>
          <div className='btnflex'>
         <button className='pri-cta'><a href="#">Get Started</a></button>
          <button onClick={handlePlay} className='sec-cta'><img  className="playic" src= {play} alt="Playicon" /><a>Press Play</a></button> 
         </div>
        [ {/* {showVideo && <div onClick={() => setShowVideo(false)}>
            <video   width="520" height="240" className='video' ref={videoRef}>
            <source src = '/Videos/waste.mp4'/>
             </video>
         </div>}] */}
          </div>

          <div className='right-col'>
            <img className="guyimage" src = {guy2} alt="a-man-image"/>
          </div>

         </div> 

         {/* End of Hero section */}

    <div className='section2'>
         <div className='greenrec'> </div>

         <div className='=logosection'>
          <div className='part'>
              <h3>Partner</h3>
              <div className='line'></div>
             </div>

             <div className='companylogo'>
              <img src={CocaCola} alt="CocaCola"/>
              <img src={Jaizbank} alt="Jaiz"/>
              <img src ={Access} alt="Accessbank"/>
              <img src={Tobaccobrand} alt="Tobaccobrand"/>
              <img src = {Nestle} alt ="Nestlelogo"/>
              <img src={NigeriaBrewe} alt="NigeriaBrewery"/>
              <img src = {UBA} alt= "UBA"/>
              <img src= {Ogunstate} alt ="Ogunstate"/>
  
             </div>
         </div>
         </div>

         <div className='About'>
          <div className='lefty'>
          <img className='factoryimg' src={Factoryworker} alt="Factoryworkerimage" />
          </div>

           <div className='righty'>
            <div className='aboutflex'>
              <h3>About</h3>
              <div className='lines'></div>
            </div>
            <p>tincidunt urna non, lobortis tincidunt. Faucibus felis <br/> nulla faucibus tellus nunc. Platea risus nibh feugiat dui <br/> phasellus phasellus viverra ac leo. Pellentesque <br/> venenatis, ut risus at. dolor sit amet, consectetur <br/> adipiscing elit. Vitae, non, lobortis tincidunt. Faucibus <br/> felis nulla faucibus tellus nunc. Platea risus nibh feugiat<br/> dui phasellus phasellus viverra ac leo. Pellentesque <br/> venenatis, ut risus at. dolor sit amet, consectetur <br/> adipiscing elit. Vitae,  </p>
            <button className='readMore' onClick={seeMore}><img src={Arrowicon} alt="arrowicon" />Read More</button>
           </div>


         </div>
               
             <div className='Become'>
              <h3>Become a Partner</h3>

              <div className='boxline'>

                <div className='box'> 
                  <h4>Becoming our agent with just a few <br/> simple steps</h4>
                   
                   <div className='flexcirclep'><img src={Circle} alt="circle"/><p>Sign up, Get screened, Provide the Needed Space</p></div>
                   <div className='flexcirclep1'><img src={Circle} alt="circle"/><p>All neccessary set up kit provided</p></div>
                   <div className='flexcirclep2'><img src={Circle} alt="circle"/><p>And start earning from every kilograms you <br/>
                   provided space for </p></div>
                   <button onClick ={beCome} className='agent'>Become an agent</button>
                </div> 


                <div className='strlines'></div>

                <div className='box'>
               <h4 className='header2'> Becoming our agent is seamlessly simple with just a few simple steps</h4>
               <div className='flexcirclep3'><img src={Circle} alt="circle"/><p>Signup, Get Screened and approved</p></div>
                   <div className='flexcirclep4'><img src={Circle} alt="circle"/><p>Set up your tools</p></div>
                   <div className='flexcirclep5'><img src={Circle} alt="circle"/><p>Accept pickup request and Collect recyclables and <br/> make money from every kilograms <br/>
                   </p></div> 
                 <button onClick = {collEctor}className='collector'>Become a collector</button>
                </div>
              
              </div>
             
             </div>

            <div className='Testimonial'>

            <div className='testimonialflex'>
              <h3>Testimonial</h3>
              <div className='liness'></div>
            
             </div>

             <div className='contentimage'>
        <div className='contextbox'>
         <h4>Kolade babalola ( Uber Driver) </h4>
         <p>“tincidunt urna non, lobortis tincidunt. Faucibus felis nulla faucibus <br/>tellus nunc. Platea risus nibh feugiat dui phasellus phasellus viverra ac <br/> leo. Pellentesque venenatis, ut risus at. dolor sit amet, consectetur <br/>adipiscing elit. Vitae, faucibus tellus nunc. Platea risus nibh feugiat dui<br/> phasellus”  </p>
        </div>

        <div className='guyimage'>
         <img src={god} alt="uberdriverimage"/>
         
        </div>

      </div>


      <div className='contentimage'>
      <div className='guyimage'>
         <img src={blackguy} alt="blackguyimage"/>
         
        </div>

        <div className='contextbox'>
         <h4>Kolade babalola ( Uber Driver) </h4>
         <p>“tincidunt urna non, lobortis tincidunt. Faucibus felis nulla faucibus <br/>tellus nunc. Platea risus nibh feugiat dui phasellus phasellus viverra ac <br/> leo. Pellentesque venenatis, ut risus at. dolor sit amet, consectetur <br/>adipiscing elit. Vitae, faucibus tellus nunc. Platea risus nibh feugiat dui<br/> phasellus”  </p>
        </div>

      

      </div>
    </div>

    <div className='Treasure'>
    <div className='Treasureflex'>
              <h3>Treasures</h3>
              <div className='linex'></div>
         </div>

     <div className='boxcontainer'>
      <div className='container'><img src={aluminiumplate} alt="aluminiumicon"/><h5>Aluminium Can <br/>Containers </h5></div>
      <div className='container'><img src={cardboardcorrugated} alt="cardboard"/><h5>Discarded/ New Cartons</h5></div>
      <div className='container'><img src={bottlegroup} alt="bottles"/><h5>Glass Containers  </h5></div>
      <div className='container'><img src={crushedbottles} alt="plasticbottles"/><h5>Pet botles </h5></div>
     </div>

     <button onClick ={seeMore} className='see'>See More</button>
      {/* <Seemorebtn/>  */}
    </div>

      <Accordion/>
      <Footer/> 
    </div>
  )
}

export default Home