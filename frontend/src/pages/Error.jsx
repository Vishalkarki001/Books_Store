import React from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-red-600">404</h1>
      <h2 className="text-4xl font-semibold text-gray-800 mt-4">Bad Request ! </h2>
     
      <NavLink to="/signup" className="mt-6 font-medium  text-gray-700 rounded-lg  ">
        SignUp
      </NavLink>
      <NavLink to="/login" className="mt-6  font-medium text-gray-700 rounded-lg">
     login page
      </NavLink>
    </div>
  );
};

export default Error;
