import React from 'react'
import './TreasureTable.css'
// import { TableContainer,Table, TableHead,TableBody,TableRow,TableCell, Paper } from '@mui/material'
import Navbar2 from '../Navbar2/Navbar2'
import Table from 'react-bootstrap/Table';





const TreasureTable = () => {
    return (
      <Table className="contable">
        <thead>
          <tr>
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
    );
  }
    
  

export default TreasureTable