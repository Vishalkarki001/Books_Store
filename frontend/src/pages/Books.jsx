import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Books = () => {
  const navigate=useNavigate();
  const [books,setBooks]=useState([]);
  useEffect(()=>{
    const fetchdata=async ()=>{
      try {

        const response= await axios.get("http://localhost:3000/users/books",

          {
            withCredentials:true
          }
        )
        const data=response.data;
        setBooks(data);
        console.log(data)
    
        if(response.status!==200){
          console.log("request failed")

        }
      } catch (error) {
        console.log("something went wrong ")
        navigate('/login')

        
      }
    }
    fetchdata();

  },[])
  
  return (
<>
<div className=' min-h-screen'>
    <div className='bg-gradient-to-r from-blue-400 to-sky-500 p-20 text-center mb-4 text-white '>
        <h1 className='text-center text-white text-4xl font-semibold mb-2'>Here are the some books</h1>
        <p className='text-xl font-semibold mb-4'>Just one small positive thought in the morning can change your whole day.</p>

    </div>
    <div className=' flex justify-center  gap-10  flex-wrap mt-14 items-center text-md text-center mb-2  '>
       {books.map((item)=>(
        <div key={item.name} className='bg-white shadow-md  items-center rounded-lg max-w-xs font-semibold p-6 transform hover:scale-105 cursor-pointer ' >
              <NavLink to={"https://www.wikipedia.org/"} target='_blank'>
          <img 
          src={item.image}
          className='rounded-lg object-cover w-60 h-72 mb-2  mx-auto'
          />
          </NavLink>
          <p>{item.name}</p>
          <p>{item.authore}</p>

          </div>

       ))}
       
    </div>
    


</div>
</>
  )
}

export default Books