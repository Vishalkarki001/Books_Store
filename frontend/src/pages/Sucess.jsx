import React from 'react';
import { NavLink } from 'react-router-dom';

const Sucess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-green-600">200</h1>
      <h2 className="text-4xl font-semibold text-gray-800 mt-4">Request  Sucessfully Done </h2>
      <p className="text-gray-600 mt-2">
            Congrates!
      </p>
      <NavLink to="/" className="mt-6 px-4 font-semibold text-gray-600">
        Go to home  page
      </NavLink>
    </div>
  );
};

export default Sucess;
