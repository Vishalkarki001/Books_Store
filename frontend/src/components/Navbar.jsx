import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const goToProfile = () => {
    navigate('/profile');
  };
  const goToHome = () => {
     navigate('/');
   };


  return (
    <>
      <div>
        <div className='p-4 font-semibold mx-auto flex gap-4 items-center justify-between text-xl'>
          <div className='flex items-center gap-3'>
            <img
              className='mix-blend-multiply h-14 w-14 rounded-full cursor-pointer transition transform hover:scale-110'
              src='/src/images/books.jpg'
              alt="BookStore Logo"
              onClick={goToHome}
            />
            <span className='font-semibold text-orange-500'>BookStore</span>
          </div>

          <div className='gap-2 items-center flex md:hidden'>
            <TiThMenu />
          </div>

          <div className='gap-10 ml-10 hidden md:flex items-center'>
            {/* Navigation Links */}
            <ul>
              <NavLink
                to='/'
                className={({ isActive }) => `${isActive ? "text-orange-600" : "text-gray-500"}`}
              >
                Home
              </NavLink>
            </ul>
            <ul>
              <NavLink
                to='About'
                className={({ isActive }) => `${isActive ? "text-orange-600" : "text-gray-500"}`}
              >
                About
              </NavLink>
            </ul>
            <ul>
              <NavLink
                to='Books'
                className={({ isActive }) => `${isActive ? "text-orange-600" : "text-gray-500"}`}
              >
                Books
              </NavLink>
            </ul>
            <ul>
              <NavLink
                to='Contact'
                className={({ isActive }) => `${isActive ? "text-orange-600" : "text-gray-500"}`}
              >
                Contact
              </NavLink>
            </ul>

   
            <div className='relative'>
              <button
                onClick={toggleDropdown}
                className='text-gray-500 hover:text-orange-600 focus:outline-none'
              >
               Register
              </button>
              {isDropdownOpen && (
                <div className='absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg'>
                  <NavLink
                    to='Signup'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Signup
                  </NavLink>
                  <NavLink
                    to='Login'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Login 
                  </NavLink>
                  <span>
                         <NavLink
                    to='/users/user/account/logout'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Logout
                  </NavLink>
                  
                  </span>
                  
                  
                </div>
              )}
            </div>

   
            <div>
              <img
                onClick={goToProfile}
                className='h-10 w-10 rounded-full cursor-pointer border-2 border-slate-200  transition transform hover:scale-110'
                src='/src/images/profile.jpg'
                alt="Account Avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
