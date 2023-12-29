import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import {useNavigate } from "react-router-dom";
//import {useNavigate } from "react-router-dom";
import '../index.css'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuTransitionDuration = 500;
  const navigate = useNavigate();
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const handleLogout = () => {
		localStorage.removeItem("token");
    navigate('/login')
   
	};
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 z-50 w-full h-[70px] flex justify-between items-center px-4 text-gray-300 ${isScrolled ? "bg-black" : "bg-transparent"}`} style={{ transition: "background-color 0.1s ease-in-out" }}>
    <div className="text-4xl inline-flex items-center">
      
    </div>
      <div className="md:hidden" onClick={handleMenuClick}>
        {!showMenu ? (
          <svg
            className="h-6 w-6 text-white cursor-pointer svg-transition"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 text-white cursor-pointer svg-transition"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 8.586l3.536-3.536 1.414 1.414L11.414 10l3.536 3.536-1.414 1.414L10 11.414l-3.536 3.536-1.414-1.414L8.586 10 5.05 6.464l1.414-1.414L10 8.586z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <div className={`${showMenu ? "left-0" : "-left-full"} md:hidden h-screen w-1/2 bg-black fixed top-0 z-50 `} style={{ transition: `left ${menuTransitionDuration}ms ease-in-out` }}>
        <div className="h-full flex flex-col justify-center items-center">
          <div className="flex flex-col items-center mb-8">
           
            <span > My <span className="text-red-500">BooStore</span></span>
          </div>
          <button className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-500 hover:text-white mx-2">
                <Link to="contact" smooth={true} duration={500} onClick={handleLogout}>   
                   
                Log out
                </Link>
              </button>
        </div>
      </div>
    <div className="justify-center hidden md:inline-flex">
    
    </div>
      <div className="hidden md:inline-flex">
        <div className="hidden md:flex">
          <button className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-500 hover:text-white mx-2 transition-colors duration-500 transform-gpu hover:scale-105">
            <Link to="contact" smooth={true} duration={500} onClick={handleLogout}>
              Log out
            </Link>
      </button>
      
      </div>
      </div>
    </div>
  );
};

export default Navbar;