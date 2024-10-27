import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Analytics Dashboard</h1>
      <div className="flex space-x-4">
        <Link to="/upload" className="p-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-opacity duration-300 opacity-75 hover:opacity-100">
          Upload
        </Link>
        <Link to="/search" className="p-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-700 transition-opacity duration-300 opacity-75 hover:opacity-100">
          Search
        </Link>
        <Link to="/analytics" className="p-4 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-opacity duration-300 opacity-75 hover:opacity-100">
          Analytics
        </Link>
      </div>
    </div>
  );
}

export default Home;