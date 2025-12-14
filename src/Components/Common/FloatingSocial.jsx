import { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const FloatingSocial = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 left-6 z-50 flex flex-col items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Wrapper with glow effect and shaded dark background */}
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-2xl -z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
        
        <div className={`relative overflow-hidden shadow-2xl shadow-blue-500/10 group-hover:shadow-blue-500/20 transition-all duration-300 ${
          open ? "rounded-xl" : "rounded-xl"
        }`}>
          
          {/* Instagram - Top icon */}
          <div
            className={`transition-all duration-300 ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 pointer-events-none"
            }`}
          >
            <div className={`w-16 h-16 bg-gradient-to-br from-gray-900/90 to-gray-800/90 flex items-center justify-center ${
              open ? "border-b border-gray-700/30" : ""
            }`}>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-pink-500/30"
              >
                <FaInstagram size={12} />
              </a>
            </div>
          </div>

          {/* Facebook */}
          <div
            className={`transition-all duration-300 delay-75 ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 pointer-events-none"
            }`}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gray-900/90 to-gray-800/90 flex items-center justify-center border-b border-gray-700/30">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-blue-500/30"
              >
                <FaFacebookF size={11} />
              </a>
            </div>
          </div>

          {/* Twitter */}
          <div
            className={`transition-all duration-300 delay-150 ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 pointer-events-none"
            }`}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gray-900/90 to-gray-800/90 flex items-center justify-center border-b border-gray-700/30">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-cyan-500/30"
              >
                <FaTwitter size={11} />
              </a>
            </div>
          </div>

          {/* WhatsApp + Contact Us (Always visible) */}
          <div className={`w-16 bg-gradient-to-br from-gray-900/90 to-gray-800/90 flex flex-col items-center py-2 ${
            open ? "" : "rounded-xl"
          }`}>
            <a 
              href="#"
              className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-green-500/30 mb-1"
            >
              <FaWhatsapp size={14} />
            </a>
            <span className="text-[7px] text-white/90 tracking-wide font-medium">
              CONTACT US
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingSocial;