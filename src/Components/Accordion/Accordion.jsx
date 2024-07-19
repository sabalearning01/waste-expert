
 import './Accordion.css'


import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function AccordionUsage() {
  return (
    <>
    <h2>Frequently asked questions</h2>
    <div className="tainer">
      
      <Accordion elevation={4}>
        <AccordionSummary className='summary'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <p> How much does it cost to be a wastexert agent?</p>
        </AccordionSummary>
        <AccordionDetails className='details'>
          It is initially totally free as we provide you with everything you
          need to get set up. After the first month when you must have started
          making money with us, a monthly charge of 5000 is charged for the
          first year after which it becomes 2000 monthly.
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={4}>
        <AccordionSummary className='summary'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p>What is the payment plan of wastexpert like? </p>
        </AccordionSummary>
        <AccordionDetails className='details'>
          It is initially totally free as we provide you with everything you
          need to get set up. After the first month when you must have started
          making money with us, a monthly charge of 5000 is charged for the
          first year after which it becomes 2000 monthly.
          
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded elevation={4}>
        <AccordionSummary className='summary'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
        <p> As a new wastexpert Agent/ collector, will i be trained on how to
          transacts on wastexpert?</p>
        </AccordionSummary>
        <AccordionDetails className='details'>
          It is initially totally free as we provide you with everything you
          need to get set up. After the first month when you must have started
          making money with us, a monthly charge of 5000 is charged for the
          first year after which it becomes 2000 monthly.
        </AccordionDetails>

        <Accordion elevation={4}>
          <AccordionSummary className='summary'
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
           <p> What is the size of space i need?</p>
          </AccordionSummary>
          <AccordionDetails className='details'>
            It is initially totally free as we provide you with everything you
            need to get set up. After the first month when you must have started
            making money with us, a monthly charge of 5000 is charged for the
            first year after which it becomes 2000 monthly.
          </AccordionDetails>
        </Accordion>

        <Accordion elevation={4}>
          <AccordionSummary className='summary'
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <p>Can anyone work as agent or collector, Also, can i operate from
            anywhere in Nigeria?</p>
          </AccordionSummary>
          <AccordionDetails className='details'>
            It is initially totally free as we provide you with everything you
            need to get set up. After the first month when you must have started
            making money with us, a monthly charge of 5000 is charged for the
            first year after which it becomes 2000 monthly.
          </AccordionDetails>
        </Accordion>
      </Accordion>
      
      
    </div>
    <div className='question'>
       <h2>Still have a questions?</h2>
       <p>If you cannot find answer to your question in our FAQ, <br/>
you can always Contact us. <br/>
we will get back to you shortly!</p>
    <button className='btncontact'><a>Contact Us</a></button>

    </div>
    </>
   
  );
}
