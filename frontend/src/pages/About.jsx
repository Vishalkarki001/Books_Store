import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  const[books,setBooks]=useState([]);
  useEffect(()=>{
  const fetchdata=async ()=>{
    
try {
  const response=await axios.get("http://localhost:3000/users/about",
    {
      withCredentials:true
    }
  )

    
  setBooks(response.data)
  
} catch (error) {
console.log("error")
  
}
  }
fetchdata()


  },[])
  return (
    <div className="min-h-screen bg-gray-100 text-gray-700">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-xl mx-auto text-lg">
          We are a team of passionate individuals dedicated to bringing the best solutions to our clients.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-5 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Our mission is to provide innovative and reliable solutions that empower businesses and individuals to achieve their goals. We believe in excellence, integrity, and commitment to delivering value to our clients.
        </p>
      </section>

   
      <section className="py-20 px-5 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gray-800">Some Famouse Books</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {books.map((item) => (
            <div key={item.name} className='bg-white rounded-lg text-md font-semibold shadow-md p-6 max-w-xs'>
              <NavLink to={"https://www.wikipedia.org/"}>
              <img
              src={item.image}
              className='w-48 h-48 mx-auto rounded-md object-cover mb-4 cursor-pointer'
              
              />
              </NavLink>
              <p>{item.name} </p>
              <p>{item.authore}</p>
            </div>

          ))}
      
          </div>
          
        
      
      </section>
      
      {/* Call to Action */}
      <section className="py-17 p-3  px-2 bg-indigo-600 text-white text-center">
        <h2 className="text-xl font-semibold mb-4">Join Us on Our Journey</h2>
    
        <button className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-full transition transform hover:scale-105">
          Contact Us
        </button>
      </section>
    </div>
  );
};

// Sample team members data


export default About;
