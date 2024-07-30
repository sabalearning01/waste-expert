import React from 'react'
import './Newuser.css'
import { useForm } from 'react-hook-form'

const Newuser = () => {
    const {register, handleSubmit , errors} = useForm ();

    const onSubmit = (data) =>{
        console.log(data);
    };


  return (
    <div className='App'>
    <form onSubmit={handleSubmit(onSubmit)}>
       <h1 className='log'>Login</h1>

     <div className='form-control'>
      <label>Email Address</label>
      <input type="email" placeholder='Your email address here' name='email' />
      </div>


      <div className='form-control'>
      <label>Password</label>
      <input type="password" placeholder='*****' name='password' />
      <p>Forgot password</p>
      </div>



      <div className='form-control'>
      <label></label>
     <button type="submit">login</button>
      </div>

      

    </form>

    </div>
  )
}

export default Newuser