import React from 'react'
import './Resetpassword.css'

const Resetpassword = () => {
  return (
    <div className='newpassword'>
    <form>
       <div className='form-controll'>
   <h1 className='reset'>Reset Password?</h1>
   <p className='you'>You are  about to get a new password</p>
   </div> 

   <div className='form-control'>
   <label>NewPassword</label>
   <input type="password" id="password" placeholder='*********' />
   </div>

   <div className='form-control'>
   <label>New Confirm Password</label>
   <input type="password" id="password"   placeholder='*********' />
   </div>

   <button className='resetpassword' type="submit">Reset Password</button>


   </form>
    </div>
  )
}

export default Resetpassword