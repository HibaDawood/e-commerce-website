'use client'

import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline, IoCall  } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";



export default function ContactUs() {
  return (
    <div>
     {/* Main Navigation */}
     <nav className="flex justify-between items-center px-4 py-4 shadow-md">
     <div className="text-2xl font-bold text-gray-800">Bandage</div>
     <ul className="flex space-x-6 text-gray-600 pr-72">
       <li className="hover:text-blue-600">
         <a href="/">Home</a>
       </li>

       <li className="hover:text-blue-600 flex">
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
         <a href="#">Pages</a>
       </li>
     </ul>
     <div className="flex">
       <span className="text-lg pr-2">
         <GoPerson />
       </span>

       <a href="#" className="text-gray-600 hover:text-blue-600 pr-5">
         Login / Register
       </a>
       <div className="flex text-xl space-x-4 pr-5 font-semibold">
         <IoIosSearch />
         <IoCartOutline />
         <CiHeart />
       </div>
     </div>
   </nav>
    <div className="container mx-auto px-4 py-8 md:flex md:items-center md:justify-between">
      {/* Text Section */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium uppercase text-gray-500">Contact Us</h4>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Get in touch today!
        </h1>
        <p className="text-gray-600">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="space-y-1 text-gray-700">
          <p>
            <strong>Phone :</strong> +451 215 215
          </p>
          <p>
            <strong>Fax :</strong> +451 215 215
          </p>
        </div>
        <div className="mt-4 flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative mt-8 md:mt-0 md:w-1/2">
        <div className="absolute inset-0 -z-10 rounded-full bg-pink-100"></div>
        <Image
          src="/picture/contact-1.png" 
          alt="Family Shopping"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>





    <div className="container mx-auto px-4 py-16 text-center">
      {/* Header Section */}
      <div className="mb-16 space-y-4">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-600">Visit our office</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          We help small businesses
          <br />
          with big ideas
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Phone Card */}
        <div className="border-0 shadow-none">
          <div className="flex flex-col items-center space-y-4 p-6">
            <div className="rounded-full bg-blue-50 p-3">
            <IoCall />
            </div>
            <div className="space-y-2 text-sm">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Get Support</p>
              <button className="rounded-full">
                Submit Request
              </button>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="border-0 bg-gray-900 text-white shadow-none">
          <div className="flex flex-col items-center space-y-4 p-6">
            <div className="rounded-full bg-gray-800 p-3">
       
            </div>
            <div className="space-y-2 text-sm">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Get Support</p>
              <button className="rounded-full text-white hover:bg-gray-800">
                Submit Request
              </button>
            </div>
          </div>
        </div>

        {/* Email Card */}
        <div className="border-0 shadow-none">
          <div className="flex flex-col items-center space-y-4 p-6">
            <div className="rounded-full bg-blue-50 p-3">
          
            </div>
            <div className="space-y-2 text-sm">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Get Support</p>
              <button className="rounded-full">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-20 space-y-4">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-600">
          We can&apos;t wait to meet you
        </p>
        <h2 className="text-3xl font-bold">Let&apos;s Talk</h2>
        <button className="mt-4 rounded-full bg-blue-500 px-8 hover:bg-blue-600">
          Try it free now
        </button>
      </div>
    </div>
  

    </div>
  )
}
