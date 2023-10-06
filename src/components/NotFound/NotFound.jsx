import React from 'react';
import { Link } from 'react-router-dom'; 

const NotFound = () => {
  return (
    <div className="notfound-min-height flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600">Sorry, the page you are looking for does not exist.</p>
     
      <Link to="/" className="text-blue-500 hover:underline mt-4">Back to Home</Link>
    </div>
  );
};

export default NotFound;
