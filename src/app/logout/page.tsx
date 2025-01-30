"use client";

import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialYoutube, TiMail } from "react-icons/ti";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";

const LogOut = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };
  return (
    <div
      style={{
        fontFamily: "Prompt",
      }}
    >
      {/* Top Bar */}
      <header className="bg-gray-100">
        {/* Top Bar */}
        <div
          className="lg:flex xs:hidden md:flex sm:hidden  justify-between lg:justify-between 
              g:items-center items-center px-4 py-4 text-sm bg-gray-900
             text-white sm:w-full md:w-full"
        >
          <div className="flex space-x-4">
            <span className="flex">
              <span className="text-lg">
                <FiPhone />
              </span>
              (231) 555-0110
            </span>
            <span>|</span>
            <span className="flex">
              <span className="text-2xl -mt-1">
                <TiMail />
              </span>
              michael.s@example.com
            </span>
          </div>
          <h1 className="text-center md:text-left">
            Follow us and get a chance to win 80% off
          </h1>
          <div className="flex items-center space-x-4">
            <span>Follow us:</span>
            <div className="flex space-x-4 text-2xl pr-4">
              <a href="#" className="hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-400">
                <TiSocialYoutube />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav
          className="lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center px-4
              shadow-md"
        >
          <div className="text-2xl font-bold text-gray-800">Bandage</div>
          <ul
            className="xs:inline-flex sm:inline-flex xs:my-5 sm:my-5 xs:space-x-2 sm:space-x-2 
              xs:text-[15px] sm:text-[15px] lg:mt-4 md:flex
                lg:flex lg:space-x-6 md:space-x-2 text-gray-600 md:flex-wrap justify-center"
          >
            <li className="hover:text-blue-600">
              <a href="/">Home</a>
            </li>

            <li className="hover:text-blue-600 flex xs:flex-none sm:flex-none">
              <a href="/Shop">Shop</a>
              <span className="pt-1 pl-2 pr-1 -mr-4">
                <MdKeyboardArrowDown />
              </span>
            </li>

            <li className="hover:text-blue-600">
              <a href="/About">About</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="/Contact">Contact</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="/Pricing">Pricing</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="/Pages">Pages</a>
            </li>
          </ul>
          <div className="flex items-center space-x-4 sm:mb-2 xs:mb-2">
            <span className="text-lg pr-2">
              <GoPerson />
            </span>

            <a
              href="/logout"
              className="text-gray-600 hover:text-blue-600 pr-5"
            >
              Logout
            </a>
            <div className="flex text-xl space-x-4 pr-5 font-semibold">
              <IoIosSearch />
              <IoCartOutline />
              <CiHeart />
            </div>
          </div>
        </nav>
      </header>
      <div
        className=" flex flex-col items-center justify-center bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/picture/login.png')" }}
      >
        <div className="bg-[#d4edfda1] items-center flex flex-col p-6">
          <h1 className="text-5xl font-bold mb-4">👋🏻 You have logged out!</h1>
          <p className="mb-4 text-xl">We hope to see you again soon.</p>
          <button
            onClick={handleLogout}
            className="py-2 px-5 border border-transparent rounded-md shadow-sm text-lg font-medium
  text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2
   focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
