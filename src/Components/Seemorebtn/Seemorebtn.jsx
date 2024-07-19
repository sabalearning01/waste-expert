import React from 'react'
import './Seemorebtn.css'
import {useState, useEffect} from 'react'


const paragraphStyles = {
          WebkitLineClamp:1,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          display:'-webkit-box',
}




const Seemorebtn = () => {
    const [isOpen, setisOpen] = useState(false)
  return (
    <div>
        <p class="pa" style={isOpen ? null : paragraphStyles}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
          Aperiam minus enim quidem atque impedit. Ratione odio maiores<br/> 
          ipsa corrupti saepe eligendi voluptatibus, <br/>
          alias placeat nisi aperiam amet ducimus corporis perspiciatis.<br/>
        </p>

         <button className='act' onClick={()=>{
            setisOpen(!isOpen) }}>{isOpen ?'See Less' : 'See More...'}</button>
        </div>
  )
}

export default Seemorebtn