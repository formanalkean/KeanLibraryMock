"use client";

import React, { useState } from 'react';

export default function SearchBox() {
  const [searchType, setSearchType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would redirect to search results or call an API
    console.log(`Searching for "${searchQuery}" in ${searchType}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-3xl">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="search-type" className="block text-sm font-medium text-gray-700 mb-1">
            Search in
          </label>
          <select
            id="search-type"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#13294B] focus:border-[#13294B]"
          >
            <option value="all">Everything</option>
            <option value="catalog">Library Catalog</option>
            <option value="articles">Articles & Journals</option>
            <option value="ebooks">E-Books</option>
            <option value="databases">Databases</option>
            <option value="website">Library Website</option>
          </select>
        </div>
        
        <div className="flex">
          <input
            type="text"
            id="search-query"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for books, articles, journals..."
            className="flex-1 py-3 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-[#13294B] focus:border-[#13294B]"
          />
          <button
            type="submit"
            className="bg-[#13294B] text-white py-3 px-6 rounded-r-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#13294B]"
          >
            Search
          </button>
        </div>
        
        <div className="mt-3 text-xs text-gray-600">
          <p>Need help? <a href="/search-help" className="text-[#13294B] hover:underline">Search tips</a> or <a href="/ask-librarian" className="text-[#13294B] hover:underline">Ask a Librarian</a></p>
        </div>
      </form>
    </div>
  );
} 