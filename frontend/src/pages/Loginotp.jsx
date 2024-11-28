import React, { createContext, useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router'


const otplogin = () => {
  const [otp,setOtp]=useState({
    otp:"",
  
  })
  
 
 


//submission of form
const submitdata=async (e)=>{
  e.preventDefault();
 

  try{
 
  const response=await axios.post('http://localhost:3000/users/user/login/otp/login',
    otp,
    {
      headers:{
        "Content-Type":"application/json"

    },

  

    //without the withcredentials true your are not able to set the cookie in broweses 
    withCredentials:true
  }
  
  

  
  );
  console.log(response)
}
catch(error){
  //navigate("/error")
  console.log(error)
}

}

  return (
   <>
   
   <div className= 'flex items-center px-4 justify-around min-h-screen bg-gradient-to-r from-amber-400 to-fuchsia-800  flex-col-reverse sm:flex-row'>
  
    <div className='w-full max-w-sm   bg-white   rounded-lg shadow-lg p-20'>
     
        <h2 className='text-2xl text-center font-bold'>Enter the OTP</h2>
        <form onSubmit={submitdata}>
            <label htmlFor='email' className='text-md  text-black font-semibold mb-2 '>
             

            </label>
            <input type="number"
             id='number'
             name='otp'
             value={otp.otp}
             onChange={(e)=setOtp(e.target.value)}
              required
              placeholder='Enter your email here'
              className='w-full mt-10 px-3 mb-4 text-md border py-2 border-gray-500 outline-none  block rounded-md shadow-md  focus:ring-2 focus:ring-indigo-500 '/>

          <button
          type="submit"
          
          className='w-full bg-indigo-500 text-white mt-4 py-1.5 rounded-md '
          >Login
          </button>
          
          
        </form>
       
    </div>

   </div>
   </>
  )
}

export { otplogin}

