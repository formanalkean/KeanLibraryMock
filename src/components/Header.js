"use client";

import React, { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#13294B] text-white">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="font-bold text-2xl">Kean University Library</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-white hover:text-[#9A8A62]">Home</a>
            <a href="/resultpage" className="text-white hover:text-[#9A8A62]">Search</a>
            <a href="/services" className="text-white hover:text-[#9A8A62]">Services</a>
            <a href="/about" className="text-white hover:text-[#9A8A62]">About</a>
            <a href="/auth" className="text-white hover:text-[#9A8A62]">Account</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-3">
              <a href="/search" className="text-white hover:text-[#9A8A62]">Search</a>
              <a href="/services" className="text-white hover:text-[#9A8A62]">Services</a>
              <a href="/resources" className="text-white hover:text-[#9A8A62]">Resources</a>
              <a href="/research" className="text-white hover:text-[#9A8A62]">Research</a>
              <a href="/about" className="text-white hover:text-[#9A8A62]">About</a>
              <a href="/resultpage" className="text-white hover:text-[#9A8A62]">Pages</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 