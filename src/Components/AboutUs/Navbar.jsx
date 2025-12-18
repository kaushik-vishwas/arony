import React, { useState, useRef } from "react";
import { Menu, X, Plus } from "lucide-react";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import leaf from "../../assets/leaf.png";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);


  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1000);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#035925]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">

          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-16 w-auto cursor-pointer" />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 font-medium text-white">
            <Link to="/" className="hover:text-green-400 text-[16px]">
              Home
            </Link>
            <Link to="/about" className="hover:text-green-400 text-[16px]">
              About Us
            </Link>

            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link
                to="/project-page"
                className="flex items-center hover:text-green-400 text-[16px]"
              >
                Projects <Plus size={16} className="ml-1" />
              </Link>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-[200px] bg-white/90 text-gray-800 rounded-md shadow-lg backdrop-blur-md">
                  <Link
                    to="/project-mango"
                    className="block px-4 py-2 text-[16px] hover:bg-gray-100"
                  >
                    The Hampi Highlands
                  </Link>
                  <Link
                    to="/project-coffee-malnad-mist"
                    className="block px-4 py-2 text-[16px] hover:bg-gray-100"
                  >
                    The Malnad Mist
                  </Link>
                  <Link
                    to="/project-coffee-mountains-breath"
                    className="block px-4 py-2 text-[16px] hover:bg-gray-100"
                  >
                    The Mountain’s Breath
                  </Link>
                  <Link
                    to="/mango"
                    className="block px-4 py-2 text-[16px] hover:bg-gray-100"
                  >
                    Mango
                  </Link>
                  <Link
                    to="/coffee"
                    className="block px-4 py-2 text-[16px] hover:bg-gray-100"
                  >
                    Coffee
                  </Link>
                </div>
              )}
            </div>

            <Link to="/blog" className="hover:text-green-400 text-[16px]">
              Blogs
            </Link>
            <Link to="/events" className="hover:text-green-400 text-[16px]">
              Events
            </Link>
            <Link to="/career" className="hover:text-green-400 text-[16px]">
              Career
            </Link>
            <Link to="/contact" className="hover:text-green-400 text-[16px]">
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <Link to="/project-page">
              <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-colors ">
                <img
                  src={leaf}
                  alt="leaf icon"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-[16px]">Explore Projects</span>
              </button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ---- Mobile Dropdown Menu ---- */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md border-t border-white/20 text-gray-800">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">
            About Us
          </Link>
          <Link
            to="/project-page"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-100"
          >
            Projects <Plus size={16} />
          </Link>

          {isDropdownOpen && (
            <div className="pl-6">
              <Link
                to="/project-mango"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                The Hampi Highlands
              </Link>
              <Link
                to="/project-coffee-malnad-mist"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                The Malnad Mist
              </Link>
              <Link
                to="/project-coffee-mountains-breath"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                The Mountain’s Breath
              </Link>
              <Link
                to="/mango"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Mango
              </Link>
              <Link
                to="/coffee"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Coffee
              </Link>
            </div>
          )}

          <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">
            Blogs
          </Link>
          <Link to="/events" className="block px-4 py-2 hover:bg-gray-100">
            Events
          </Link>
          <Link to="/career" className="block px-4 py-2 hover:bg-gray-100">
            Career
          </Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">
            Contact Us
          </Link>
          <div className="flex justify-center py-3">
            <Link to="/project-page">
              <button className="bg-[#4BA625] text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-colors ">
                <img
                  src={leaf}
                  alt="leaf icon"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-[16px]">Explore Projects</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
