import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
const  Contact =()=>  {
  const nevogate=useNavigate();
  const fetchdata=async (req,res)=>{
    try {
   
      const response =await axios.get('http://localhost:3000/users/contact', {
        headers:{
          "Content-Type":"application/json"
  
      },
      withCredentials:true
      });
      const data=await response.data;
      console.log(data);
      console.log("sucessfy cross the route ")

      if(!response.status==200){
    
        throw new Error('Request is failed');

      }
      

   
    } catch (error) {
      
      console.log('Error fetching contact info');
      nevogate('/login')
 
    }
  }

useEffect(() => {
  fetchdata()
}, []);


  return (

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Contact Us</h2>
          <p className="text-center text-gray-600 mb-8">We'd love to hear from you! Reach out with any questions or feedback.</p>
  
          {/* Contact Form */}
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
              Send Message
            </button>
          </form>
  
          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-center text-gray-600">Connect with us:</h3>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800 transition">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600 transition">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://instagram.com" className="text-pink-600 hover:text-pink-800 transition">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900 transition">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
  
          {/* Additional Contact Information */}
          <div className="flex justify-around mt-10 text-gray-700">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} />
              <span>+123 456 7890</span>
            </div>
          </div>
        </div>
      </div>
    );

}


export default Contact;
