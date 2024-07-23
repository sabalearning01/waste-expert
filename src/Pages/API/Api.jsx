import React from 'react'
import { useEffect, useState } from 'react'
import'./Api.css'
import axios from 'axios'
import { json } from 'react-router-dom'

const Api = () => {
    
     const [data, setData] = useState([])


     useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {
        console.log(response)
           setData(response.data)
      });

     },[]);
     
    //  if (!post) return null;
    
    
        
  return (
    <div>
         <h1>3rd Challenge Data</h1> 
         {data.map((data)=>{
          return (
            
           <div className='data-card' key={data.id}>
            
            <h3 className="data-title">{data.title}</h3>
             <p className="data-body">{data.body}</p>
             <p className='data-comment'>{data.comment}</p>
             <div className="button">
                <div className="delete-btn">Delete</div>
             </div>
          </div>
          );
          })}
    </div>
  )
  
}


export default Api