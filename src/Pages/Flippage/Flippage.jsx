import React from 'react'
import './Flippage.css'
import Navbar2 from '../../Components/Navbar2/Navbar2'
// import Car1 from '../../Images/Car1.png'
import car from '../../Images/car.png'
import underline from '../../Images/underline.png'
import rotateimage from '../../Images/rotateimage.png'
import guyvector from '../../Images/guyvector.png'
import arrowvec from '../../Images/arrowvec.png'
import com from '../../Images/com.png'
// import geticon from '../../Images/geticon.png'
// import getval from '../../Images/getval.png'
// import getpaid from '../../Images/getpaid.png'

 const Flippage = () => {
  return (
    <div className='flippage'>
      <Navbar2/>

     <div className='flip'>
      <div className='fty'>
        <h2 className='flipping'>Flip it</h2>
        <img src ={underline} alt="underlinevector"/>
        <p className='cool'>Make cool Cash by Flipping your old, discarded <br/> or Used iron items</p>
        <p className='lorem'lass>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. </p>
      </div>
      <div className='hty'>
        <img src = {car} alt="Carimage"/>
      </div>
     </div>

     <div className='greenbg'></div>
    <div className='How'>
     <h2>How it works</h2>

     <div className='grand'>

     <div className='gvector'>
       <img src ={guyvector} />
       </div>

      <div className='arrow'>
        <img src ={arrowvec}/>
      </div>


      <div className='incomplete'>
         <img src ={com}/>
        </div>


      <div className='track'>
        {/* <img src={geticon} />
        <img src = {getval} />
        <img src = {paid} /> */}
        </div>
    
        </div>
        
    </div>
    {/* <button className='sec-cta'><img  className="playic" src= {play} alt="Playicon" /><a>Press Play</a></button>  */}

    </div>
  )
}

export default Flippage