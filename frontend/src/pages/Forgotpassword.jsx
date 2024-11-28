import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiSolidHide ,BiSolidShow} from "react-icons/bi";

const Forgotpassword = () => {
    const[show,setShow]=useState(false);
    const setpassword=()=>{
        setShow(!show);
    }
    const [data, setdata] = useState({
        
        email:"", 
        password: ""
    });
    const navigate=useNavigate();
    const fetchdata=async ()=>{
        try {
       
          const response =await axios.get('http://localhost:3000/users/forgotpassword/verify', {
            headers:{
              "Content-Type":"application/json"
      
          },
          withCredentials:true
          });
    
    
          if(response.status!==200){
            throw new Error("unauthorized")
          
          }
          console.log("User is authorized:", response.data);
         
          
    
       
        } catch (error) {
          
          console.log('Error fetching contact info');
          navigate('/login')
     
        }
    }

  
    const handlepassowrd = (e) => {
        const { name, value } = e.target; 
        setdata({
            ...data,
            [name]: value,
        });
    };

    const submitdata = async (e) => {
        e.preventDefault();
     
        try {
   
            const response = await axios.patch("http://localhost:3000/users/forgotpassword/reset",
               data,
                {
                    headers: {
                        "Content-Type": "application/json" 
                    },
                    withCredentials: true
                }
    
            );
            if(!response.status==200){
       
          navigate("/login")
            }
            console.log(response);
            console.log("Password is now changed ")
            navigate('/')
        } catch (error) {
          
        console.log("error ho gya",error)
        }


    }
    useEffect(()=>{fetchdata()},[])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
                <form onSubmit={submitdata}>
                 
                    <div className="mb-4 mt-5">
                        <label htmlFor="email" className="block text-md font-semibold mb-2">
                          Enter the email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email" // Set name to password (new password)
                            required
                            value={data.email}
                            onChange={handlepassowrd}
                            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email"
                        />
                        
                           <label htmlFor="newPassword" className="block text-md font-semibold mb-2 mt-4">
                          Create  New Password
                        </label>
                        <div className='relative'>
                        <input
                            type={show ? "text" : "password"}
                            id="newPassword"
                            name="password" // Set name to password (new password)
                            required
                            value={data.password}
                            onChange={handlepassowrd}
                            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your new password"
                        />
                           <div className='cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 p-2  "' onClick={setpassword}>
            
            {show ?  <BiSolidHide/> : <BiSolidShow/> }
             </div>
             </div>
             
             
                        <p className='text-blue-700 text-end mt-3'><NavLink to={'/signup'}>Singn up</NavLink></p>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-200"
                    >
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Forgotpassword;

