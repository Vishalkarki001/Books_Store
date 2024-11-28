import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  return (
<>
<div className=" ">
   
     <div className='p-4 font-semibold mx-auto flex gap-4 items-center justify-between text-xl '>
          <div className='flex items-center gap-3 '>
     
          <img className='mix-blend-multiply  h-14 w-14 rounded-full  cursor-pointer  transition transform hover:scale-110' src='/src/images/books.jpg'/>
           <span className='font-semibold text-orange-500'>BookStore</span>
         
          </div>
          <div className='gap-2 items-center flex  md:hidden'>
   <TiThMenu />
   </div>
        
   <div className='  gap-10  ml-10 hidden  md:flex'>
     <ul  >
        <NavLink to='/'
        className={({isActive})=>`  ${isActive ? "text-orange-600" : "text-gray-500 "}`}>Home</NavLink>
 </ul>
 <ul>
        <NavLink to='About'
        className={({isActive})=>`  ${isActive ? "text-orange-600" : "text-gray-500"}`}>About</NavLink>
</ul>
<ul>
        <NavLink to='Books'
        className={({isActive})=>` ${isActive ? "text-orange-600" : "text-gray-500"}`}>Books</NavLink>
        
   </ul>

<ul>
        <NavLink to='Contact'
        className={({isActive})=>` ${isActive ? "text-orange-600" : "text-gray-500"}`}>Contact</NavLink>
        
   </ul>
 
   <ul>
        <NavLink to='Signup'
        className={({isActive})=>` ${isActive ? "text-orange-600" : "text-gray-500"}`}>Signup</NavLink>
        
   </ul>
   <ul>
        <NavLink to='profile'
        className={({isActive})=>` ${isActive ? "text-orange-600" : "text-gray-500"}`}>profile</NavLink>
        
   </ul>
 

   </div>
   </div>
 


</div>
</>
  )
}

export default Navbar