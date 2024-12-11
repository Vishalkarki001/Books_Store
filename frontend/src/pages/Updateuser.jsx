import React, { useState } from 'react'
import { BiSolidHide ,BiSolidShow} from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
const Updateuser = () => {
    const [show,setShow]=useState(false);
    const  showandhide=()=>{
        setShow(!show)
    }
    const [user,setUser]=useState({
        name:"",
        password:"",
        email:"",
        number:"",

    });
    const handleinput=(e)=>{
        let name = e.target.name;
        let value=e.target.value;
        setUser(
            {...user,
                [name]:value,
            }
        )

    }
    const handleform=async (e)=>{
        e.preventDefault(); 
        console.log(user)
        try {
            const response=axios.post("http://localhost:3000/users/user/update/profile",user,{
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            })
         
      
            
        } catch (error) {
            console.log(error)
            
        }

    }
  return (
  <>
   <div className="flex   items-center  min-h-screen   bg-gradient-to-l from-orange-400 to-blue-400 justify-around flex-col-reverse sm:flex-row">
    <div className='w-full  max-w-sm bg-white rounded-lg shadow-lg mt-4 flex-col'>
          <img className='w-full mix-blend-multiply rounded-lg shadow-lg bg-transparent ' src='/src/images/update.jpg'/>
        </div>
      <div className="w-full  max-w-sm bg-white p-8 rounded-lg shadow-md">
    
        <h2 className="text-2xl font-bold text-center mb-6">Update User </h2>
        <form onSubmit={handleform} >
          <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            
            <input
              type="text"
              id="name"
              name='name'

              onChange={handleinput}
              placeholder='Enter your name'
              value={user.name}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
  
            />
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name='email'
        
              placeholder='Enter your E-mail'
              onChange={handleinput}
              value={user.email}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            
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
              onChange={handleinput}
              placeholder='Enter your password'
           
              value={user.password}
     
             
        
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            
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
              onChange={handleinput}
       
              placeholder='Enter your Contact number'
              value={user.number}
          
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
       
            />
          </div>
        

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Update
          </button>
          <p className='tex-md mt-4 text-center '> Make another account ?  <NavLink to={'/signup'}><span className='text-blue-700'>Signup</span></NavLink></p>
        </form>
        
      </div>
    </div>

  </>
  )
}

export default Updateuser