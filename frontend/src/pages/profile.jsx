
import { NavLink } from "react-router-dom";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // State for file upload and form data
  const [file, setFile] = useState(null);

  const fetchdata=async ()=>{
    try {
      const response=await axios.get("http://localhost:3000/users/profile/user",{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      }
   
      )
      if(response.status!==200){
        navigate('/login')
      }


  
    } catch (error) {
      navigate('/login')
    }
  }



  // Submit form to add a book

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file); // Ensure the key matches your backend

    try {
      const response = await axios.post("http://localhost:3000/users/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        console.log("File uploaded successfully:", response.data);
        navigate("/home");
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  useEffect(()=>{fetchdata()},[])


  return (
    <div className="bg-zinc-500 w-full min-h-screen mb-4">
      {/* File Upload Section */}
      <input
        className="mt-4"
        type="file"
        name="image"
        onChange={handleFileChange}
      />
      <button
        onClick={handleFileUpload}
        className="mt-4 p-2 bg-blue-500 text-white"
      >
        Upload
      </button>
      <div className="mt-4">
      <NavLink className='text-white font-semibold text-xl'
       to='/user/admin'>Add books</NavLink>
      </div>
  

   
    </div>
  );
};

export default Profile;
