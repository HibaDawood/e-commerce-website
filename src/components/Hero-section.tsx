import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialYoutube, TiMail } from "react-icons/ti";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="w-full">
      {/* Top Bar */}

      {/* Navigation */}
      <header className="bg-gray-100">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-4 py-4 text-sm bg-gray-900 text-white">
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
      </header>

      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[700px]  hero-img overflow-hidden ">
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 z-10 ">
          <div className="max-w-xl -mt-40">
            <span className="text-white mb-4 block">SUMMER 2020</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              NEW COLLECTION
            </h1>
            <p className="text-white text-lg mb-8">
              We know how large objects will act, but things on a small scale
            </p>
            <button className="bg-green-500 text-primary p-3 text-white font-bold tracking-wider px-6">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="absolute h-[42rem] w-full  hidden md:block">
          <Image
            src="/picture/t1.jpg"
            alt="Fashion model with shopping bags"
            width={500}
            height={700}
            className="object-cover h-[42rem] w-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}
