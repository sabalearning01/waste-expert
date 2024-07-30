import React from 'react'
import './Newuser.css'
import { useForm } from 'react-hook-form'


const Newuser = () => {
    const form = useForm();

    const {register} = form;
    


  return (
    <div className='App'>
    <form onSubmit={handleSubmit(onSubmit)}>
       <h1 className='log'>Log in</h1>

     <div className='form-control'>
      <label htmlFor='Email'>Email Address</label>
      <input type="email" id="email" placeholder='Your email address here' {...register(email)} />
      </div>


      <div className='form-control'>
      <label htmlFor='Password'>Password</label>
      <input type="password" id="password" placeholder='*****' {...register(Password)} />
      <p className='fgt'>Forgot password?</p>
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