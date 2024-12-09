import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram,FaLinkedin, FaFacebookSquare} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { TiSocialYoutube, TiMail } from "react-icons/ti";
import { FiPhone } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";

export default function Pages1() {
    interface TeamMember {
        name: string;
        profession: string;
        image: string;
        bgColor: string;
      }
      
      const teamMembers: TeamMember[] = [
        {
          name: "Username",
          profession: "Profession",
          image: "/picture/ab-4.png",
          bgColor: "bg-yellow-400",
        },
        {
          name: "Username",
          profession: "Profession",
          image: "/picture/ab-10.jpg",
          bgColor: "bg-gray-100",
        },
        {
          name: "Username",
          profession: "Profession",
          image: "/picture/ab-5.png",
          bgColor: "bg-blue-500",
        },
        {
          name: "Username",
          profession: "Profession",
          image: "/picture/ab-3.png",
          bgColor: "bg-blue-500",
        },
        {
          name: "Username",
          profession: "Profession",
          image: "/picture/ab-7.png",
          bgColor: "bg-blue-500",
        },
        {
          name: "Username",
          profession: "Profession",
          image: "/picture/ab-1.jpg",
          bgColor: "bg-blue-500",
        },
        {
          name: "Username",
          profession: "Profession",
          image: "/picture/ab-2.png",
          bgColor: "bg-blue-500",
        },
        {
          name: "Username",
          profession: "Profession",
          image: "/picture/ab-8.png",
          bgColor: "bg-blue-500",
        },
        {
          name: "Username",
          profession: "Profession",
          image: "/picture/ab-9.png",
          bgColor: "bg-blue-500",
        },
      ];
  return (
    <div>
    
    <header className="bg-gray-100">
        {/* Top Bar */}
        <div className="flex sm:hidden lg:flex justify-between items-center px-4 py-4 text-sm bg-green-700 text-white">
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




    <section className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center mb-12">
        <p className="text-gray-500 uppercase tracking-wide mb-4 font-semibold">
          WHAT WE DO
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
          Innovation tailored for you
        </h2>
        <nav className="mt-4">
          <ul className="flex justify-center gap-6">
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-semibold">Home</a>
            </li>
           <span className="text-2xl text-gray-400"><IoIosArrowForward /></span> 
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-600">Team</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Large image on the left */}
        <div className="relative aspect-[4/4] bg-red-600">
          <Image
            src="/picture/p-1.png"
            alt="Fashion model in floral dress"
            fill
          />
        </div>

        {/* 2x2 grid on the right */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square bg-gray-200">
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white bg-black bg-opacity-30">
              TAGS
            </div>
            <Image
              src="/picture/p-2.png"
              alt="Fashion photo 1"
              fill
        
            />
          </div>
          <div className="relative aspect-square bg-gray-200">
            <Image
              src="/picture/p-3.png"
              alt="Fashion photo 2"
              fill
             
            />
          </div>
          <div className="relative aspect-square bg-gray-200">
            <Image
              src="/picture/p-4.png"
              alt="Fashion photo 3"
              fill
            
            />
          </div>
          <div className="relative aspect-square bg-gray-200">
            <Image
              src="/picture/p-5.png"
              alt="Fashion photo 4"
              fill
            />
          </div>
        </div>
      </div>
    </section>



     {/* Team Members Grid */}
     <h1 className="text-3xl text-center font-semibold text-gray-800 mt-10">Meet Our Team</h1>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center w-[23rem] mx-auto h-[25rem]">
            {/* Image Container */}
            <div
              className={`w-full aspect-[3/4] mb-4 overflow-hidden ${member.bgColor}`}
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Member Info */}
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-gray-600 mb-4">{member.profession}</p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 transition-colors text-2xl"
              >
                <FaFacebook />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 transition-colors text-2xl"
              >
                <FaInstagram />

                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 transition-colors text-2xl"
              >
                <FaTwitter />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        ))}
      </div>


{/* LAST PAGE & NEW PAGE */}

<section className="container mx-auto px-4 py-16 max-w-xl text-center">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Start your 14 days free trial
        </h2>

        <p className="text-gray-600 max-w-md mx-auto">
          Met minim Mollie non desert Alamo est sit clique dolor do met sent.
          RELIT official consequent.
        </p>

        <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors">
          Try it free now
        </button>

        <div className="flex items-center justify-center gap-6 pt-4 text-2xl">
          <a href="#" className="text-blue-400 hover:text-blue-600">
            <FaTwitter />
          </a>

          <a href="#" className="text-blue-900 hover:text-blue-950">
            <FaFacebookSquare />
          </a>

          <a href="#" className="text-black hover:text-gray-800">
            <FaInstagram />
          </a>

          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>

    </div>
  )
}

