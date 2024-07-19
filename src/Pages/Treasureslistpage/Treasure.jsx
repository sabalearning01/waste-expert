import React from 'react'
import './Treasure.css'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import binbottle from '../../Images/binbottle.png'
import aluminiumplate from '../../Images/aluminiumplate.png'
import cardboardcorrugated from '../../Images/cardboardcorrugated.png'
import bottlegroup from '../../Images/bottlegroup.png'
import crushedbottles from '../../Images/crushedbottles.png'
import Plasticbottles from '../../Images/Plasticbottles.png'
import plasticcaps from '../../Images/plasticcaps.png'
import colouredpolythene from '../../Images/colouredpolythene.png'

const Treasure = () => {
  return (
    <div className='major'>
      <Navbar2/>
      <div className='moda'>
         <div className='ltf'>
            <h2>You called it waste, we call it Wealth</h2>
            <p>There is no such thing as away. when we throw something <br/> away, it must go somewhere</p>
         </div>
         <div className='rty'>
         <img src = {binbottle} alt="binbottleimage"/>
         </div>

        </div>
        <h2 className='treasure'>Treasures</h2>


        <div className='boxcontainer1'>
      <div className='container1'><h2>UBC</h2><img src={aluminiumplate} alt="aluminiumicon"/><h5>Aluminium Can <br/>Containers </h5></div>
      <div className='container1'><h2>BBC</h2><img src={cardboardcorrugated} alt="cardboard"/><h5>Discarded/ New Cartons</h5></div>
      <div className='container1'><h2>GBS</h2><img src={bottlegroup} alt="bottles"/><h5>Glass Containers  </h5></div>
      <div className='container1'><h2>PET</h2><img src={crushedbottles} alt="plasticbottles"/><h5>Pet botles </h5></div>
     </div>


     <div className='boxcontainer1'>
      <div className='container1'><h2>PC</h2><img src={Plasticbottles} alt="plastic"/><h5>Plastic</h5></div>
      <div className='container1'><h2>PB</h2><img src={colouredpolythene} alt="colouredpolythen"/><h5>Polythene Bag</h5></div>
      <div className='container1'><h2>PBC</h2><img src={plasticcaps} alt="plasticcaps"/><h5>Pet bottle Cap  </h5></div>
      <div className='container1'><h2>PET</h2><img src={crushedbottles} alt="plasticbottles"/><h5>Pet botles </h5></div>
     </div>






      </div>
  )
}
export default Treasure