import React, { useState } from "react";
import { searchDocuments } from "./api"; // Import the searchDocuments function

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await searchDocuments(query); // Use the searchDocuments function
      setResults(data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Search Page</h1>
      <div className="w-full max-w-md">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button
          onClick={handleSearch}
          className="w-full bg-blue-500 text-white p-3 rounded-lg shadow hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </div>
      <div className="w-full max-w-md mt-8">
        <p className="text-lg font-semibold text-gray-700 mb-4">
          Results: {results.length}
        </p>
        <ul className="space-y-4">
          {results.map((result) => (
            <li key={result.id} className="p-4 bg-white rounded-lg shadow">
              {Object.entries(result._source).map(([key, value]) => (
                <p key={key} className="text-sm">
                  <span className="font-semibold">{key}:</span> 
                  {typeof value === 'object' ? JSON.stringify(value) : value}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
