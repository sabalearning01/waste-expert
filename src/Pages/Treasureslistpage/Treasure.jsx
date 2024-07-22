import React from 'react'
import { TableContainer,Table, TableHead,TableBody,TableRow,TableCell, Paper } from '@mui/material'
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
import Footer from '../../Components/Footer/Footer'



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
       
       <h1 className='recycle'>Recycle Points Earning Charts</h1>

       <Table className="tablecont">
        <thead className='contable'>
          <tr className='trow'>
            <th>S/N</th>
            <th>Description of Recyclables</th>
            <th>Acronym</th>
            <th>Weight</th>
            <th>Quantity (Pce)</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>PET Plastic Bottles</td>
            <td>PET</td>
            <td>9.9 grams</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Used Beverage Can ( Aluminum)</td>
            <td>UBC</td>
            <td>14 gram</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Pure Water Sachets</td>
            <td>Pure Water Sachets</td>
            <td>10 kg</td>
            <td>10</td>
            <td>1</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Old Newspaper</td>
            <td>Old Newspaper</td>
            <td>50kg</td>
            <td>5</td>
            <td>1</td>
          </tr>

          <tr>
            <td>5</td>
            <td>Brown Corrugated Cartons</td>
            <td>BBC</td>
            <td>11kg</td>
            <td>10</td>
            <td>1</td>
          </tr>


          <tr>
            <td>6</td>
            <td>Glass Bottle ( Flint/ Amber/ Green Only</td>
            <td>GBS</td>
            <td>10grams</td>
            <td>10</td>
            <td>1</td>
          </tr>
         
        </tbody>
      </Table>

      <h4 className='points'>Points which are accumulated overtime can be withdrawn or use to redeem/shop <br/>for household items offered through our Wastexpert store.</h4>
    
     <Footer/> 
      </div>
  )
}
export default Treasure