import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialYoutube, TiMail } from "react-icons/ti";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";




export default function About() {
  return (
    <div>
      {/* Main Navigation */}
      <header className="bg-gray-100">
        {/* Top Bar */}
        <div className="flex sm:hidden justify-between items-center px-4 py-4 text-sm bg-green-700 text-white">
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
        <nav className="sm:flex-none lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center px-4 lgpy-4 shadow-md">
          <div className="text-2xl font-bold text-gray-800">Bandage</div>
          <ul className="sm:flex-none sm:mb-8 sm:ml-36 lg:flex space-x-6 md:space-x-2 text-gray-600 md:flex-wrap justify-center sm:space-x-4">
            <li className="hover:text-blue-600 sm:ml-4">
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
              <a href="/Pricing">Pricing</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="/Pages">Pages</a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
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



     
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 lg:ml-28 lg:-mt-20 ">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-600">
              ABOUT COMPANY
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              ABOUT US
            </h2>
            <p className="text-lg text-gray-600">
              We know how large objects will act,
              <br />
              but things on a small scale
            </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-md">
            Get Quote Now
          </button>
        </div>
        <div className="relative lg:-mt-20">
          <div className="absolute inset-0 bg-pink-100 rounded-full transform scale-90 translate-x-4"></div>
          <div className="relative">
            <Image
              src="/picture/about-1.png"
              alt="Shopping woman"
              width={500}
              height={600}
              className="relative z-10"
            />
          </div>
          <div className="absolute top-10 right-10 w-4 h-4 bg-purple-400 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-4 h-4 bg-purple-400 rounded-full"></div>
        </div>
      </div>
    </section>
    </div>
  )
}

