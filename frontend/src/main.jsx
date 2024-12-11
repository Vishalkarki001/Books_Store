import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import {Login} from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Error from './pages/Error.jsx'
import Sucess from './pages/Sucess.jsx'
import Forgotpassword from './pages/Forgotpassword.jsx'
import Books from './pages/Books.jsx'
import Admin from './pages/Admin.jsx'

import Profile from './pages/profile.jsx'
import { OTP } from './pages/Otp.jsx'
import { OtpLogin } from './pages/OTPLOGIN.jsx'
import { Logout } from './pages/Logout.jsx'
import Updateuser from "./pages/Updateuser.jsx"


import { createBrowserRouter,RouterProvider,createRoutesFromElements, Route, Routes} from 'react-router-dom'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path="error" element={<Error/>}/>
      <Route path="sucess" element={<Sucess/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path='/user/password/forgotpassword' element={<Forgotpassword/>}/>
      <Route path='forgotpassword' element={<Forgotpassword/>}/>
      <Route path="books" element={<Books/>}/>
      <Route path="/user/admin" element={<Admin/>}/>
      <Route path="/user/login/otp" element={<OTP/>}/>
      <Route path='/user/login/otp/login' element={<OtpLogin/>}/>
      <Route path='/users/user/account/logout' element={<Logout/>}/>
      <Route path ="/user/profile/update/user" element={<Updateuser/>}/>
    

    
      
   
      
    


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,

)