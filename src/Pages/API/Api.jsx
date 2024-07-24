import React from 'react'
import { useEffect, useState } from 'react'
import'./Api.css'
import axios from 'axios'
import { json } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import { CiSearch } from "react-icons/ci";

const Api = () => {
    
     const [data, setData] = useState([])
     const [inputValue, setInputValue] = useState('')
    //  const [apiPost, setapiPost] = useState([])

     const handleInputChange = (event)=>{
           setInputValue(event.target.value)
           console.log(inputValue)
     };


     useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {
        console.log(response)
        // setapiPost(response.data)
           setData(response.data)
      });
    

     },[]);
     
    //  if (!post) return null;
    
    
        
  return (
    <div>
      <div className='wrapper'></div>
         <h1>3rd Challenge Data</h1> 
        
        <input type = 'text'  value={inputValue} onChange={handleInputChange} placeholder='Search'/>
        <button onClick={()=>{
          alert('Searching!')
        }}>Search</button>
        <p>Current Input Value:{inputValue}</p>

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