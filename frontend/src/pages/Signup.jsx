import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";
import { BiSolidHide ,BiSolidShow} from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Signup = () => {
 const [suc,setsuc]=useState("false")
 const[show,setShow]=useState(false)

 const showandhide=()=>{
  setShow(!show)
 }
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
   number:"",
   
  });

  const navigate=useNavigate(); 

 const handleinput=(e)=>{
 
  let name=e.target.name
  let value=e.target.value
  

  setUser({
    ...user,
    [name]:value,
  })



  }
 
  //submisiion of form

  const haldleform=async (e)=>{
    e.preventDefault(); 


    try {
      const response = await axios.post('http://localhost:3000/users/singup', 
        user, // Data to be sent in the request body
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      if(response.ok){
        //to set token in localstorage
        const res_data=await response.data;
        console.log(res_data)
   
      

       
      
    
      }
      if(response.status==200){
        setUser({...user,name:"" ,email:"",password:""});
      }
      navigate('/')
      console.log(response)
   



    } catch (error) {
       console.log(error)
   
      
       
      
    }
   
 
  }




  

  return (
   <>
    <div className="flex   items-center  min-h-screen   bg-gradient-to-l from-sky-400 to-teal-400 justify-around flex-col-reverse sm:flex-row">
    <div className='w-full  max-w-sm bg-white rounded-lg shadow-lg mt-4 flex-col'>
          <img className='mix-blend-multiply rounded-lg shadow-lg bg-transparent ' src='/src/images/signup.jpg'/>
        </div>
      <div className="w-full  max-w-sm bg-white p-8 rounded-lg shadow-md">
    
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
        <form onSubmit={haldleform}>
          <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            
            <input
              type="text"
              id="name"
              name='name'
              autoComplete='off'
              value={user.name}
             onChange={handleinput}
              placeholder='Enter your name'
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name='email'
              autoComplete='off'
              placeholder='Enter your E-mail'
              value={user.email}
              onChange={handleinput}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className=" mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className='relative'>
            <input
              type={show ? "text" : "password"}
              id="password"
              name='password'
              placeholder='Enter your password'
              autoComplete='off'
              value={user.password}
              onChange={handleinput}
             
        
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            <div className='absolute right-2 top-1/2 transform -translate-y-1/2 p-2 cursor-pointer' onClick={showandhide}>
            {show ? <BiSolidShow/> : <BiSolidHide/>}

            </div>
            </div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-2 mt-4">
              Contact Number
            </label>
            <input
              type="number"
              id="number"
              name='number'
              autoComplete='off'
              placeholder='Enter your Contact number'
              value={user.number}
              onChange={handleinput}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
        

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Signup
          </button>
          <p className='tex-md mt-4 text-center '> Already Have Account ?  <NavLink to={'/Login'}><span className='text-blue-700'>Login</span></NavLink></p>
        </form>
        
      </div>
    </div>


   </>
  )
}

export default Signup