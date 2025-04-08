"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl">
          <h2 className="text-center text-3xl font-extrabold text-[#13294B]">
            {isLogin ? "Sign in" : "Create a new account"}
          </h2>

          <form className="mt-8 space-y-6">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-[#13294B] focus:border-[#13294B]"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your kean email"
                required
                className="mt-1 block w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-[#13294B] focus:border-[#13294B]"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                required
                className="mt-1 block w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-[#13294B] focus:border-[#13294B]"
              />
            </div>

            {isLogin && (
              <div className="text-sm text-right">
                <a href="#" className="font-medium text-[#13294B] hover:text-[#9A8A62]">
                  Forgot your password?
                </a>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#13294B] text-white rounded-full hover:bg-[#0A1A38] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#13294B]"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-[#13294B] hover:text-[#9A8A62]"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
