"use client";

import React, { useState } from "react";

export default function SearchBox() {
  const [searchType, setSearchType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for "${searchQuery}" in ${searchType}`);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Filter + Search */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-4 space-y-4 sm:space-y-0">
          {/* Filter Dropdown with custom arrow */}
          <div className="w-full sm:max-w-[200px] relative">
            <label
              htmlFor="search-type"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Search in
            </label>
            <div className="relative">
              <select
                id="search-type"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="appearance-none w-full py-2 pl-4 pr-12 text-sm text-gray-800 bg-gray-50 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#13294B] focus:border-[#13294B] transition"
              >
                <option value="all">Everything</option>
                <option value="catalog">Library Catalog</option>
                <option value="articles">Articles & Journals</option>
                <option value="ebooks">E-Books</option>
                <option value="databases">Databases</option>
                <option value="website">Library Website</option>
              </select>

              {/* 🔽 Custom Down Arrow */}
              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Search Field */}
          <div className="relative w-full">
            <input
              type="text"
              id="search-query"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books, articles, journals..."
              className="w-full py-4 px-6 rounded-full bg-gray-50 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13294B] focus:border-[#13294B] text-sm shadow-inner pr-28"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#13294B] hover:bg-[#0A1A38] text-white rounded-full px-5 py-2 shadow-lg transition"
            >
              Search
            </button>
          </div>
        </div>

        {/* Help Links */}
        <div className="text-xs text-gray-500 text-center">
          Need help?{" "}
          <a
            href="/search-help"
            className="text-[#13294B] hover:text-[#9A8A62] hover:underline"
          >
            Search tips
          </a>{" "}
          or{" "}
          <a
            href="/ask-librarian"
            className="text-[#13294B] hover:text-[#9A8A62] hover:underline"
          >
            Ask a Librarian
          </a>
        </div>
      </form>
    </div>
  );
}
