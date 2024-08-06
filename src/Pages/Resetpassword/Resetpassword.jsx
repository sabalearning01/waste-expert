import React, { useState } from 'react'
import './Resetpassword.css'

const Resetpassword = () => {

    const [oldPassword, setoldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [message,setMessage] = useState('');
              
    const validatePassword = () => {
    if (oldPassword === newPassword){
      setMessage('The new password can not be the same with the old password.');
      return;
    }

    if (newPassword.length < 8){
      setMessage('The new password must be at least 8 characters long ');
      return;
    }

    if(!/\d/.test(newPassword)){
           setMessage('The new password must contain at least one digit');
           return;
    }


    if (!/[A-Z]/.test(newPassword)) {
      setMessage('The new password must contain at least one uppercase letter.');
      return;
    }


    if (!/[a-z]/.test(newPassword)) {
      setMessage('The new password must contain at least one lowercase letter.');
      return;
    }
    
    if(!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(newPassword)){
       setMessage('The new password must contain at least one special character.');
       return;
    }

      setMessage('The new password is valid');
    }

    const handleSubmit = (event) => {
            event.preventDefault();
            validatePassword();
    };


  return (
    <div className='newpassword'>
    <form onSubmit = {handleSubmit}>
       <div className='form-controll'>
   <h1 className='reset'>Reset Password?</h1>
   <p className='you'>You are  about to get a new password</p>
   </div> 

   <div className='form-controll'>
   <label>NewPassword</label>
   <input type="password"
    id="password"
    placeholder='*********'
    onChange={(event)=> setNewPassword(event.target.value)} />
   </div>

   <div className='form-controll'>
   <label>New Confirm Password</label>
   <input type="password" id="password"   placeholder='*********'
   onChange = {(event) => setNewPassword(event.target.value) } />
   </div>

   <button className='resetpassword' type="submit">Reset Password</button>


   </form>
    </div>
  )
}

// }
export default Resetpassword