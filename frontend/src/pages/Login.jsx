import React, { createContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { BiSolidHide ,BiSolidShow} from "react-icons/bi";

const Login = () => {
  const [show,setShow]=useState(false)

  const togglePasswordVisibility=()=>{
    setShow(!show)
  }


  const [user,setUser]=useState({
    email:"",
    password:"",
  })
  
 
 
  const navigate=useNavigate();

 const handleinput=(e)=>{
  let name=e.target.name
  let value=e.target.value
 

 setUser({
  ...user,
  [name]:value,
 })
}

//submission of form
const submitdata=async (e)=>{
  e.preventDefault();
 

  try{
 
  const response=await axios.post('http://localhost:3000/users/login',
    user,
    {
      headers:{
        "Content-Type":"application/json"

    },

  

    //without the withcredentials true your are not able to set the cookie in broweses 
    withCredentials:true
  }
  

  
  );

  if(response.status==200){

  
       navigate("/")
    

     
      setUser({name:"",email:""})
      console.log(response);
      //passing the state varable to the next route usonf usenavaigate
  


  }
 

}
catch(error){
  navigate("/error")
  console.log(error)
}

}



  return (
   <>
   
   <div className='flex items-center px-4 justify-around min-h-screen bg-gradient-to-r from-amber-700 to-fuchsia-800  flex-col-reverse sm:flex-row'>
   <div className='w-full   max-w-sm px-3 bg-white rounded-lg flex justify-center text-md'>
        <img className='rounded-md ' src='/src/images/login.jpg'/>
      </div>
    <div className='w-full max-w-sm   bg-white   rounded-lg shadow-lg p-20'>
     
        <h2 className='text-2xl text-center font-bold'> Login</h2>
        <form onSubmit={submitdata}>
            <label htmlFor='email' className='text-md  text-black font-semibold mb-2 '>
                Email

            </label>
            <input type='text'
             id='email'
             name='email'
             value={user.email}
             onChange={handleinput}
              required 
              className='w-full px-3 mb-4 text-md border py-2 border-gray-200 outline-none  block rounded-md shadow-md  focus:ring-2 focus:ring-indigo-500 '/>

            <label htmlFor='password' className='pt-4 text-md font-semibold text-black'>
                Password
            
            </label>
      
          <div className='relative'>
            
            <input type={show ? 'text' :'password'}
            className=' w-full px-3 border border-gray-200 outline-none pr-10 focus:ring-2 focus:ring-indigo-500 py-2 rounded-md shadow-md'
            id="password"
            name='password'
            value={user.password}
            onChange={handleinput}
            
             />
            <div className=' absolute right-2 top-1/2 transform -translate-y-1/2 p-2 cursor-pointer"' onClick={togglePasswordVisibility}>
            
           {show ? <BiSolidShow/> : <BiSolidHide/>}
            </div>
            </div>
            
             
    
        
        
            <p className='text-end mt-2 text-blue-800 cursor-pointer'><NavLink to={'/forgotpassword'}>Forgot password</NavLink></p>
          <button
          type="submit"
          
          className='w-full bg-indigo-500 text-white mt-4 py-1.5 rounded-md '
          >Login
          </button>
          
          <p className='tex-md mt-4 text-center '>Dont have Account ? <NavLink to={'/signup'}><span className='text-blue-700'>Singup</span></NavLink></p>
          <p className='tex-md mt-4 text-center mb-5 '>Login With OTP ?<NavLink to={'/user/login/otp'}><span className='text-blue-700'>Click here</span></NavLink></p>
        
    
       </form>
    </div>

   </div>
   </>
  )
}

export { Login}

