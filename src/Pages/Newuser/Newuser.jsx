import React, { useState } from 'react'
import './Newuser.css'



    const Newuser = () => {
  
    const [formdata, setFormdata] = useState({
      email:'',
      password:'',
    })


    const [errors, setError] = useState({

    })

       function handleChange(event){
        const { name, value} = event.target;
        console.log(handleChange)
        setFormdata({
          ...formdata, [name] : value
        })
       }

      const handleSubmit = (event)=>{
        event.preventDefault()
        const validationErrors ={}
        if(!formdata.email.trim()){
          validationErrors.email = "email address is required"
        }else if (/\S+@\S+\.\S+/.test(formdata.email)){
            validationErrors.email = "email address is not valid"
        }


        if(!formdata.password.trim()){
          validationErrors.password = "password is required"
        }else if (formdata.password.length < 6){
            validationErrors.password = "password should be at least 6 characters"
        }

        setError(validationErrors)

        if (Object.keys(validationErrors). length===0){
          alert("Form Submitted Successfully")
        }
      }

  return (
    <div className='App'>
    <form onSubmit={handleSubmit}>
       <h1 className='log'>Log in</h1>

     <div className='form-control1'>
      <label htmlFor='Email'>Email Address</label>
      <input type="email" id="email" placeholder='Your email address here' onChange={handleChange} />
      {errors.email && <span>{errors.email}</span>}
      </div>


      <div className='form-control2'>
      <label htmlFor='Password'>Password</label>
      <input type="password" id="password" placeholder='*****' onChange={handleChange}  />
      <p className='fgt'>Forgot password?</p>
      {errors.password && <span>{errors.password}</span>}
      </div>



      <div className='form-control'>
      <label></label>
     <button className='submitted' type="submit">login</button>
      </div>

      

    </form>

    </div>
  )
}

export default Newuser