import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Admin = () => {
  const [data,setData]=useState({
    name:"",
    authore:"",
    image:"",
  })
  const [remove, setRemove] = useState({
    name: "",
  });
  
  const deletebook = (e) => {
    const { name, value } = e.target;
    setRemove((previous) => ({
      ...previous,
      [name]: value,
    }));
  };
  
const    inputhandle =(e)=>{
let name=e.target.name
let value =e.target.value

 setData((prevdata)=>({
  ...prevdata,
  [name]:value,

 }))
}



   const navigate=useNavigate();
   const submitform=async (e)=>{
       e.preventDefault(); 

    
        try {
          const response = await axios.post("http://localhost:3000/users/user/admin/add",data, {
            headers: {
              "Content-Type": "application/json"
            },
            withCredentials: true,
          });
      
          console.log("Response Status:", response.status); // Log the status code
          console.log("Response Data:", response.data); // Log the response data
  
      if(response.status==200){
        navigate('/books')
      }
     
        } catch (error) {
          console.error("Error occurred:", error);
        
        }
      };

      const deleteform=async(e)=>{
        e.preventDefault()
        try {
          const res=await axios.post("http://localhost:3000/users/user/admin/delete",remove,
            {
              headers:{
                "Content-Type":"application/json"
              },
              withCredentials:true
      
          })
      
          if(res.status==200){
            navigate('/books')
          }
        } catch (error) {
          console.log(error)
          
        }
      }
      useEffect(()=>{
        const datafetch=async ()=>{
         try {
          const res=await axios.get("http://localhost:3000/users/user/admin",
            {
            headers:{
              "Content-Type":"application/json"

            },
            withCredentials:true
          }
          )
          if (res.status == 200) {
            console.log("sucess");
          }
          
         } catch (error) {
          navigate('/login');
          
         }
        }
        datafetch()

      },[])

  
      
       
    


  return (
    <>
  <div className="min-h-screen bg-gray-300 flex items-center justify-center">


      <div className="bg-gray-500 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
         Handle books here
        </h2>
        
     
        <h1 className='text-lg font-semibold'>Manage The  books</h1>
        <div className="flex flex-row gap-4">
       
          <div className=" bg-slate-600 outline-none p-2 rounded-md shadow">
            
            <h3 className="text-lg font-semibold mb-2 text-black  ">Fill details for Add books</h3>
            <form  onSubmit={submitform}>
                <input  className='rounded-lg  px-6 p-2 border-2 outline-none border-slate-200'
                type='text'
                name='name'
                placeholder='Enter the book name'
                id='name'
                value={data.name}
                onChange={inputhandle}
                >
                </input>
                <input  className='rounded-lg p-2 mt-2 outline-none border-2 px-6 border-slate-200'
                type='text'
                name='authore'
                placeholder='Enter the Authore name'
                id='name'
                value={data.authore}
                onChange={inputhandle}
                >
                </input>
                <input  className='rounded-lg px-6 p-2 mt-2 outline-none border-2 border-slate-200'
                type='text'
                name='image'
                placeholder='Enter the Image url'
                id='image'
                value={data.image}
                onChange={inputhandle}
                >
                </input>
             <input className='flex mt-4 text-center bg-green-400 px-6 rounded-lg shadow-2xl font-semibold text-xl text-white cursor-pointer '
             type='submit'
             value="Add"/>
            
           
            </form>
           
            
          </div>
          <form onSubmit={deleteform}>

          {/* Second Inner Div */}
          <div className=" bg-slate-600 shadow-lg p-2 rounded-md ">
            <h3 className="text-lg font-semibold mb-2">This is for remove the books </h3>
            <input className='rounded-lg  mb-4 px-6 p-2 border-2 outline-none border-slate-600' 
            type='text'
            placeholder='Enter the book name'
            name='name'
            value={remove.name}
            onChange={deletebook}

            />
        
            <input className='p-2 bg-red-400  mt-4 rounded-lg font-semibold text-md text-white'
            type='submit'
            value="Delete"
            

            />
        

          </div>
          </form>
        </div>
      </div>
    </div>


    </>
  )
}

export default Admin