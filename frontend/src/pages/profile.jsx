import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [user, setUser] = useState();  // State to store user data

  // Fetch user data

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
    formData.append("image", file); 

    try {
      const response = await axios.post("http://localhost:3000/users/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        console.log("File uploaded successfully:", response.data);
     

        // Refetch user data to update the profile picture

       navigate('/')

      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users/profile/user", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const data = response.data.user;
      setUser(data);
    } catch (error) {
      console.error("Error fetching user data:", error); // Log error if fetching fails
      navigate("/login");  // Redirect to login in case of error
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 


  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-3/4 md:w-1/2 mb-8">
        <div className="flex flex-col items-center mb-4">
          {/* Display image after fetching user data */}
          <img
            src={user?.image || "/src/images/profile.jpg"}  // If no image, use a default image
            alt="Profile"
        
            className="w-28 h-28 rounded-full mb-4 transition-all duration-200"
          />
          <h1 className="text-2xl font-semibold text-gray-800 mb-2 uppercase">{user?.name || "Loading..."}</h1>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-3/4 md:w-1/2 mb-8">
        <h3 className="text-xl font-semibold text-black mb-4 ">Profile Details</h3>
        <div className="space-y-4 text-black text-xl">
          <div className="flex justify-between">
            <label className="font-semibold">Name:</label>
            <span className="font-semibold text-xl ">{user?.name || "Loading..."}</span>
          </div>
          <div className="flex justify-between text-black font-semibold text-xl">
            <label className="">Email:</label>
            <span className="">{user?.email || "Loading..."}</span>
          </div>
          <div className="flex justify-between font-semibold text-xl">
            <label>Number:</label>
            <span >{user?.number || "Loading..."}</span>
          </div>
        </div>
      </div>

      {/* File Upload Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-3/4 md:w-1/2 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Upload Profile Image</h3>
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          className="mb-4 border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
        <button
          onClick={handleFileUpload}
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Upload
        </button>
      </div>
      <div className= " w-1/2 sm:w-1/2 md:w-1/2 mb-4  bg-orange-400  p-6 rounded-lg shadow-md">
          <NavLink to="/user/profile/update/user" className="text-white font-semibold text-lg hover:underline">
            Update User
          </NavLink>
        </div>

   
        {/* Other Features Section */}
        <div className= " w-full sm:w-3/4 md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <NavLink to="/user/admin" className="text-indigo-600 font-semibold text-lg hover:underline">
            Add books
          </NavLink>
        </div>
      </div>
    
  );
};

export default Profile;
