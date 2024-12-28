"use client"

import Image from "next/image"
import { MdKeyboardArrowDown } from "react-icons/md";

import { FaTwitter, FaInstagram } from "react-icons/fa";
import { TiSocialYoutube, TiMail } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";


export default function Pricing1() {

  const brands = [
    { name: "Hooli", logo: "/picture/fa1.png" },
    { name: "Hooli", logo: "/picture/fa2.png" },
    { name: "Lyft", logo: "/picture/fa3.png" },
    { name: "Stripe", logo: "/picture/fa4.png" },
    { name: "AWS", logo: "/picture/fa5.png" },
    { name: "Reddit", logo: "/picture/fa6.png" },
  ];

  return (
    <div>
     {/* Main Navigation */}
      <header className="bg-gray-100 mb-10">
            {/* Top Bar */}
            <div className="flex xs:hidden sm:hidden justify-between items-center px-4 py-4 text-sm bg-green-700 text-white">
              <div className="flex space-x-4">
                <span className="flex">
                  <span className="text-lg ">
                    <FiPhone />
                  </span>
                  (231) 555-0110
                </span>
                <span>|</span>
                <span className="flex">
                  {" "}
                  <span className="text-2xl -mt-1">
                    <TiMail />
                  </span>{" "}
                  michael.s@example.com
                </span>
              </div>
              <h1>Follow us and get a chance to win 80% off</h1>
              <div className="flex items-center space-x-4">
                <span>Follow us:</span>
                <div className="flex space-x-4 text-2xl pr-4 ">
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
          <div className="sm:flex md:flex lg:flex xs:py-2 sm:gap-28 xs:flex-none xs:ml-24 ">
            <p className="lg:mt-2 lg:mr-12 md:mr-20 text-blue-500 xs:mt-2 sm:mt-2 font-bold">
              Login
            </p>
            <button
              className="md:text-sm sm:w-[400px] sm:text-center sm:tracking-tighter sm:p-1 xs:p-1
          sm:h-12 sm:text-[15px] md:px-5 md:py-2.5 sm:mb-3 xs:mb-3
          md:tracking-tighter md:w-44 md:-ml-11 lg:w-44 lg:px-6 lg:py-3 bg-blue-500 text-white 
          lg:text-sm rounded-md"
            >
              Become a member ➡️{" "}
            </button>
          </div>
        </nav>
          </header>



    <div className="max-w-6xl mx-auto px-4 py-16">

      {/* Header */}
      <div className="text-center mb-16 py-5 bg-gray-50">
        <p className="text-sm text-gray-500 font-semibold uppercase mb-4">PRICING</p>
        <h1 className="text-5xl font-bold mb-7">Simple Pricing</h1>
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-black font-semibold">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-500 font-semibold">Pricing</span>
        </div>
      </div>

      {/* Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Pricing</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

   

      {/* Trust Badge */}
      <div className="flex justify-center gap-5 mb-32">
      <div className="text-center  text-black font-semibold mt-2">
        Monthly
      </div>
      <div>
        <Image src={"/picture/button.png"} alt="on / off" width={40} height={40} className="mt-2.5"/>
      </div>
      <div className="text-center text-black font-semibold  mt-2">
        Yearly
      </div>
      <button className="bg-blue-300 p-2 px-5 text-blue-700 rounded-3xl font-medium">save 25%</button>
    </div>


<div className="lg:flex lg:justify-center md:flex md:justify-center">
    <Image src={"/picture/image3.png"} width={300} height={600} alt="fsss" className="h-[20rem] sm:mx-1 xs:mx-1">
    </Image>
    <Image src={"/picture/image2.png"} width={320} height={700} alt="fsss" className="h-[23rem] xs:mr-3 sm:-mx-1 -mt-10">
    </Image>
    <Image src={"/picture/image1.png"} width={300} height={600} alt="fsss" className="h-[20rem] xs:mx-1 sm:mx-1">
    </Image>
</div>

    </div>

<h1 className="text-xl font-bold text-gray-700 text-center mt-10">Trusted By Over 4,000 Big Companies</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center py-12 pt-32">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={50}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
    
    </div>
  )
}
