import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const OtpLogin = () => {
  const [otp, setOtp] = useState({
    otp: "",
  });
  const navigate=useNavigate()
//   const fetchdata=async ()=>{
//     try {
   
//       const response =await axios.get('http://localhost:3000/users/user/login/otp/login', {
//         headers:{
//           "Content-Type":"application/json"
  
//       },
//       withCredentials:true
//       });


//       if(response.status!==200){
//         throw new Error("unauthorized")
      
//       }
//       console.log("User is authorized:", response.data);
     
      

   
//     } catch (error) {
      
//       console.log('Error fetching contact info');
//       navigate('/login')
 
//     }
// }
    


  const otphandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setOtp({
      ...otp,
      [name]: value,
    });
  };

  const submitdata = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/users/user/login/otp/login",
        otp,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        window.alert("Success to login");
      }
      navigate('/')
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
// useEffect(()=>{fetchdata()},[])
  return (
    <>
      <div className="flex items-center px-4 justify-around min-h-screen bg-gradient-to-r from-amber-400 to-fuchsia-800 flex-col-reverse sm:flex-row">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-20">
          <h2 className="text-2xl text-center font-bold">Enter the OTP</h2>
          <form onSubmit={submitdata}>
         
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp.otp}
              onChange={otphandle}
              required
              placeholder="Enter your OTP here"
              className="w-full mt-10 px-3 mb-4 text-md border py-2 border-gray-500 outline-none block rounded-md shadow-md focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white mt-4 py-1.5 rounded-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export { OtpLogin };
