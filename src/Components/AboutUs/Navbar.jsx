import React, { useState, useRef } from "react";
import { Menu, X, Plus } from "lucide-react";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import leaf from "../../assets/leaf.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  // Add scroll effect to make navbar more solid when scrolled
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        navbarScrolled 
          ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg' 
          : 'bg-transparent backdrop-blur-md'
      }`}
      style={{
        background: navbarScrolled 
          ? 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-16 w-auto cursor-pointer drop-shadow-lg" 
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 font-medium text-white">
            <Link 
              to="/" 
              className=" text-[#C68642] hover:text-green-300 text-[16px] transition-colors duration-200 drop-shadow-sm"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="  text-[#C68642] hover:text-green-300 text-[16px] transition-colors duration-200 drop-shadow-sm"
            >
              About Us
            </Link>

            <div 
              className="relative" 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/project-page"
                className="flex items-center  text-[#C68642] hover:text-green-300 text-[16px] transition-colors duration-200 drop-shadow-sm"
              >
                Projects <Plus size={16} className="ml-1" />
              </Link>

              {isDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-[200px] rounded-lg shadow-2xl border border-white/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <Link
                    to="/project-mango"
                    className="block px-4 py-3 text-[16px] text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
                  >
                    The Hampi Highlands
                  </Link>
                  <Link
                    to="/project-coffee-malnad-mist"
                    className="block px-4 py-3 text-[16px] text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
                  >
                    The Malnad Mist
                  </Link>
                  <Link
                    to="/project-coffee-mountains-breath"
                    className="block px-4 py-3 text-[16px] text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
                  >
                    The Mountain's Breath
                  </Link>
                  <Link
                    to="/mango"
                    className="block px-4 py-3 text-[16px] text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
                  >
                    Mango
                  </Link>
                  <Link
                    to="/coffee"
                    className="block px-4 py-3 text-[16px] text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200"
                  >
                    Coffee
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/blog" 
              className=" text-[#C68642] hover:text-green-300 text-[16px] transition-colors duration-200 drop-shadow-sm"
            >
              Blogs
            </Link>
            <Link 
              to="/events" 
              className=" text-[#C68642] hover:text-green-300 text-[16px] transition-colors duration-200 drop-shadow-sm"
            >
              Events
            </Link>
            <Link 
              to="/career" 
              className=" text-[#C68642] hover:text-green-300 text-[16px] transition-colors duration-200 drop-shadow-sm"
            >
              Career
            </Link>
            <Link 
              to="/contact" 
              className=" text-[#C68642] hover:text-green-300 text-[16px] transition-colors duration-200 drop-shadow-sm"
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <Link to="/project-page">
              <button 
                className="text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                }}
              >
                <img
                  src={leaf}
                  alt="leaf icon"
                  className="w-5 h-5 object-contain drop-shadow-sm"
                />
                <span className=" text-[#C68642] text-[16px] drop-shadow-sm">Explore Projects</span>
              </button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-300 focus:outline-none transition-colors duration-200"
              style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '8px',
                padding: '8px',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div 
          className="md:hidden border-t border-white/20"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <Link 
            to="/" 
            className="block px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="block px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
          >
            About Us
          </Link>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex justify-between items-center px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
          >
            Projects <Plus size={16} />
          </button>

          {isDropdownOpen && (
            <div className="pl-8 bg-white/30">
              <Link
                to="/project-mango"
                className="block px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50 text-sm"
              >
                The Hampi Highlands
              </Link>
              <Link
                to="/project-coffee-malnad-mist"
                className="block px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50 text-sm"
              >
                The Malnad Mist
              </Link>
              <Link
                to="/project-coffee-mountains-breath"
                className="block px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50 text-sm"
              >
                The Mountain's Breath
              </Link>
              <Link
                to="/mango"
                className="block px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50 text-sm"
              >
                Mango
              </Link>
              <Link
                to="/coffee"
                className="block px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 text-sm"
              >
                Coffee
              </Link>
            </div>
          )}

          <Link 
            to="/blog" 
            className="block px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
          >
            Blogs
          </Link>
          <Link 
            to="/events" 
            className="block px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
          >
            Events
          </Link>
          <Link 
            to="/career" 
            className="block px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
          >
            Career
          </Link>
          <Link 
            to="/contact" 
            className="block px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
          >
            Contact Us
          </Link>
          <div className="flex justify-center p-6">
            <Link to="/project-page">
              <button 
                className="text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(75, 166, 37, 0.9) 0%, rgba(3, 89, 37, 0.8) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                }}
              >
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