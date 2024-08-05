import React from 'react'
import './Forgotpassword.css'
import { useState } from 'react'

const Forgotpassword = () => {
 

  const [formdetail, setFormdetail] = useState({
    email:'',
  
  })


  const [error, setErrors] = useState({

  })
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


  function userChange(event){
    const { name, value} = event.target;
    setFormdetail({
      ...formdetail, [name] : value
    })
   }

  const handleSubmit = (event)=>{
    event.preventDefault()
    const validationErrors ={}
    if(!formdata.email.trim()){
      validationErrors.email = "email address is required"
    }else if (!emailRegex.test(formdata.email)){
        validationErrors.email = "email address is not valid"
    }
  }

   
  return (
    <div className='forgot'>
      <h1>Forgot Password?</h1>
      <p>Don’t worry, it happens sometimes. <br/>
      Let’s get you another one</p>

      <form onSubmit>
        <label>Email Address</label>
        <input type="email" placeholder='Your email address here' />

        <button className='sub-btn'>Submit</button>
      </form>

    </div>
  )
    }
export default Forgotpassword