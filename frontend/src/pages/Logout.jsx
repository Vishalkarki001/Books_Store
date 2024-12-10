import React, { useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';

const Logout = () => {
  const navigate=useNavigate();


    const fetchdata=async ()=>{
      try{
        const response=await axios.get("http://localhost:3000/users/user/account/logout",{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        })
        if(response.status==200){
          navigate('/')
        }
    
      }catch(error){
       console.log(error)
    
         
      }
   
       
    }
    useEffect(()=>{fetchdata()},[])
  return (
<h1>You must login first</h1>
  )
}


export { Logout}