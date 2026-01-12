import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Plus } from "lucide-react";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import leaf from "../../assets/leaf.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isInWorkTogether, setIsInWorkTogether] = useState(false);

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

  // Observe when user is in WorkTogether section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInWorkTogether(true);
        } else {
          setIsInWorkTogether(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Target the WorkTogether section
    const workTogetherSection = document.getElementById("work-together");
    
    if (workTogetherSection) {
      observer.observe(workTogetherSection);
    }

    return () => {
      if (workTogetherSection) {
        observer.unobserve(workTogetherSection);
      }
    };
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

  // Determine nav link color based on conditions
  const getNavLinkColor = () => {
    // When in WorkTogether section, always use white
    if (isInWorkTogether) {
      return "text-[#C68642]";
    }
    // Otherwise use the original color
    return "text-[#C68642]";
  };

  const getNavLinkHoverColor = () => {
    // When in WorkTogether section, use lighter white for hover
    if (isInWorkTogether) {
      return "hover:text-gray-200";
    }
    // Otherwise use the original hover color
    return "hover:text-green-300";
  };

  const getButtonTextColor = () => {
    // When in WorkTogether section, use white for button text
    if (isInWorkTogether) {
      return "text-[#C68642]";
    }
    // Otherwise use the original color
    return "text-[#C68642]";
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        navbarScrolled || isInWorkTogether
          ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg"
          : "bg-transparent backdrop-blur-md"
      }`}
      style={{
        background:
          navbarScrolled || isInWorkTogether
            ? "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo - Moved MUCH MORE to left */}
          <div className="flex items-center ">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-auto cursor-pointer drop-shadow-lg"
              />
            </Link>
          </div>

          {/* Nav Links - Adjusted to fill available space */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-3 lg:space-x-4 xl:space-x-5 font-medium text-[#C68642] max-w-3xl mx-4">
              <Link
                to="/"
                className={`${getNavLinkColor()} ${getNavLinkHoverColor()} text-[15px] lg:text-[16px] transition-colors duration-200 drop-shadow-sm whitespace-nowrap`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${getNavLinkColor()} ${getNavLinkHoverColor()} text-[15px] lg:text-[16px] transition-colors duration-200 drop-shadow-sm whitespace-nowrap`}
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
                  className={`flex items-center ${getNavLinkColor()} ${getNavLinkHoverColor()} text-[15px] lg:text-[16px] transition-colors duration-200 drop-shadow-sm whitespace-nowrap`}
                >
                  Projects <Plus size={14} className="ml-1" />
                </Link>

                {isDropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 w-[200px] rounded-lg shadow-2xl border border-white/20 z-50"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    <Link
                      to="/project-mango"
                      className="block px-4 py-3 text-[15px] text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
                    >
                      The Hampi Highlands
                    </Link>
                    <Link
                      to="/project-coffee-malnad-mist"
                      className="block px-4 py-3 text-[15px] text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
                    >
                      The Malnad Mist
                    </Link>
                    <Link
                      to="/project-coffee-mountains-breath"
                      className="block px-4 py-3 text-[15px] text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
                    >
                      The Mountain's Breath
                    </Link>
                    {/* <Link
                      to="/mango"
                      className="block px-4 py-3 text-[15px] text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
                    >
                      Mango
                    </Link>
                    <Link
                      to="/coffee"
                      className="block px-4 py-3 text-[15px] text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200"
                    >
                      Coffee
                    </Link> */}
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                className={`${getNavLinkColor()} ${getNavLinkHoverColor()} text-[15px] lg:text-[16px] transition-colors duration-200 drop-shadow-sm whitespace-nowrap`}
              >
                Blogs
              </Link>
              <Link
                to="/events"
                className={`${getNavLinkColor()} ${getNavLinkHoverColor()} text-[15px] lg:text-[16px] transition-colors duration-200 drop-shadow-sm whitespace-nowrap`}
              >
                Events
              </Link>
              <Link
                to="/career"
                className={`${getNavLinkColor()} ${getNavLinkHoverColor()} text-[15px] lg:text-[16px] transition-colors duration-200 drop-shadow-sm whitespace-nowrap`}
              >
                Career
              </Link>
              <Link
                to="/contact"
                className={`${getNavLinkColor()} ${getNavLinkHoverColor()} text-[15px] lg:text-[16px] transition-colors duration-200 drop-shadow-sm whitespace-nowrap`}
              >
                Contact Us
              </Link>
              <Link
                to="/farmland-investment"
                className={`${getNavLinkColor()} ${getNavLinkHoverColor()} text-[15px] lg:text-[16px] transition-colors duration-200 drop-shadow-sm whitespace-nowrap`}
              >
                Farmland Investment
              </Link>
              <Link
                to="/plant-nursery"
                className={`${getNavLinkColor()} ${getNavLinkHoverColor()} text-[15px] lg:text-[16px] transition-colors duration-200 drop-shadow-sm whitespace-nowrap`}
              >
                Plant Nursery
              </Link>
            </div>
          </div>

          {/* Explore Projects Button - Moved slightly left */}
          <div className="hidden md:flex items-center mr-4 lg:mr-8">
            <Link to="/project-page">
              <button
                className={`${getButtonTextColor()} font-medium px-5 py-2.5 lg:px-6 lg:py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg`}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                <img
                  src={leaf}
                  alt="leaf icon"
                  className="w-4 h-4 lg:w-5 lg:h-5 object-contain drop-shadow-sm"
                />
                <span className={`${getButtonTextColor()} text-[14px] lg:text-[16px] drop-shadow-sm whitespace-nowrap`}>
                  Explore Projects
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile menu button - Positioned more to right */}
          <div className="md:hidden flex items-center -mr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#C68642] hover:text-green-300 focus:outline-none transition-colors duration-200"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "8px",
                padding: "8px",
                border: "1px solid rgba(255,255,255,0.2)",
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
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
            backdropFilter: "blur(20px)",
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
          <Link
            to="/farmland-investment"
            className="block px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
          >
            Farmland Investment
          </Link>
          <Link
            to="/plant-nursery"
            className="block px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100/50"
          >
            Plant Nursery
          </Link>

          <div className="flex justify-center p-6">
            <Link to="/project-page">
              <button
                className="text-[#C68642] font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(75, 166, 37, 0.9) 0%, rgba(3, 89, 37, 0.8) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                <img src={leaf} alt="leaf icon" className="w-5 h-5 object-contain" />
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