"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBox from '../components/SearchBox';
import ResourceCard from '../components/ResourceCard';
import AnnouncementBanner from '../components/AnnouncementBanner';
import ChatBot from '../components/ChatBot';

// Icons for our resource cards
const Icons = {
  Books: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
    </svg>
  ),
  Database: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
      <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
      <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
    </svg>
  ),
  Calendar: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
    </svg>
  ),
  Room: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
    </svg>
  ),
  Help: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
  ),
  Laptop: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
    </svg>
  )
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBanner
        message="Extended hours during finals week: Open until midnight December 10-16."
        link="/hours"
        linkText="View schedule"
      />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#13294B] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Kean University Library</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Your gateway to Research, Learning, and Academic Success
            </p>
            
            {/* Search Box */}
            <div className="flex justify-center">
              <SearchBox />
            </div>
          </div>
        </section>
        
        {/* Quick Links */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-[#13294B]">Resources & Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard
                title="Books & E-Books"
                description="Search our extensive collection of print books and e-books on a wide range of subjects."
                icon={Icons.Books}
                link="/books"
              />
              
              <ResourceCard
                title="Research Databases"
                description="Access scholarly articles, journals, and digital resources for your research needs."
                icon={Icons.Database}
                link="/databases"
              />
              
              <ResourceCard
                title="Events & Workshops"
                description="Join library events, workshops, and training sessions to enhance your skills."
                icon={Icons.Calendar}
                link="/events"
              />
              
              <ResourceCard
                title="Study Spaces"
                description="Reserve study rooms, find quiet spaces, and utilize collaboration areas."
                icon={Icons.Room}
                link="/spaces"
              />
              
              <ResourceCard
                title="Research Help"
                description="Get assistance from librarians for your research questions and needs."
                icon={Icons.Help}
                link="/help"
              />
              
              <ResourceCard
                title="Technology Services"
                description="Borrow laptops, print documents, and use specialized software and equipment."
                icon={Icons.Laptop}
                link="/technology"
              />
            </div>
          </div>
        </section>
        
        {/* Featured Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4 text-[#13294B]">Got Research Questions?</h2>
                <p className="text-gray-600 mb-6">
                  Our librarians are here to help you with research assistance, citation help, finding sources, and more.
                </p>
                <div className="space-y-4">
                  <a href="/ask-librarian" className="btn-primary inline-block">Ask a Librarian</a>
                  <a href="/research-guides" className="ml-4 text-[#13294B] hover:text-[#9A8A62] font-medium">
                    View Research Guides
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-[#13294B]">Library Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Thursday</span>
                      <span>8:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Friday</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span>1:00 PM - 9:00 PM</span>
                    </div>
                  </div>
                  <a href="/hours" className="block mt-4 text-[#13294B] hover:text-[#9A8A62] font-medium">
                    View full schedule
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
} 