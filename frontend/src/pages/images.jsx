// Profile.js
import React, { useContext } from 'react';
import { UserContext } from './Usercontext';

const Profilee = () => {
  const { user } = useContext(UserContext); // Accessing user data from context

  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      {/* Display other user properties if needed */}
    </div>
  );
};

export default Profilee;
