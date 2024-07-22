import React from 'react'
import { useEffect, useState } from 'react'
import'./Api.css'
import axios from 'axios'
import { json } from 'react-router-dom'

const Api = () => {
    
 function fetchApi (){

     const [data, setapiData] = useState(null)

     fetch('https://jsonplaceholder.typicode.com/posts')
     .then((response)=> response.json())
     .then ((json) =>{
      console.log(json);
      setapiData(json);
     });
 
    }
    
        
  return (
    <div>

        <button className='cta' onClick={fetchApi}>Click Now</button>
       <pre> {JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Api