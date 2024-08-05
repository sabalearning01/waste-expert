import React from 'react'
import './Resetpassword.css'

const Resetpassword = () => {
  // const [formdata, setFormdata] = useState({
  //   email:'',
  //   password:'',
  // })


  //    function handleChange(event){
  //     const { name, value} = event.target;
  //     setFormdata({
  //       ...formdata, [name] : value
  //     })
  //   }

  //   const handleSubmit = (event)=>{
  //     event.preventDefault()
  //     const validationErrors ={}
  //     if(!formdata.email.trim()){
  //       validationErrors.email = "email address is required"
  //     }else if (/\S+@\S\.S+/.test(formdata.email)){
  //         validationErrors.email = "email address is not valid"
  //     }


  //     if(!formdata.password.trim()){
  //       validationErrors.password = "password is required"
  //     }else if (formdata.password.length < 6){
  //         validationErrors.password = "password should be at least 6 characters"
  //     }

  return (
    <div className='newpassword'>
    <form>
       <div className='form-controll1'>
   <h1 className='reset'>Reset Password?</h1>
   <p className='you'>You are  about to get a new password</p>
   </div> 

   <div className='form-controll'>
   <label>NewPassword</label>
   <input type="password" id="password" placeholder='*********' />
   </div>

   <div className='form-controll'>
   <label>New Confirm Password</label>
   <input type="password" id="password"   placeholder='*********' />
   </div>

   <button className='resetpassword' type="submit">Reset Password</button>


   </form>
    </div>
  )
}

// }
export default Resetpassword