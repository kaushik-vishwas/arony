import React, { useState } from 'react'
import blogmain from '../../assets/blogmain.png'
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";

const BlogMain = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className="bg-neutral-50 py-16  px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Section with Image */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Left - Text Content */}
                    <div className="flex flex-col mt-24 justify-center">
                        <div className="flex items-center gap-2 border mb-6 border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                            <img
                                src={leafgrn}
                                alt="leaf icon"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-black text-[16px] font-medium">Blog</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-medium text-gray-900 leading-snug sm:leading-tight lg:leading-[1.2] mb-6">
                            <span className="whitespace-nowrap">Cultivating Ideas for a</span><br />
                            <span className="whitespace-nowrap">Greener Tomorrow</span>
                        </h2>


                        {/* <p className="text-[#585858] text-[16px] font-normal leading-relaxed max-w-lg">
                            At Arony Farms, our mission is to make ethical and sustainable farmland ownership accessible to everyone. We believe farmland is more than just an asset — it’s a living ecosystem that must be nurtured responsibly.
                        </p> */}
                    </div>

                    {/* Right - Image Section */}
                    <div className="relative mt-7 w-[95%] sm:w-[90%] lg:w-[85%] rounded-md overflow-hidden shadow-2xl h-64 sm:h-[360px] lg:h-[420px] ml-auto lg:-mr-8">
                        <img
                            src={blogmain}
                            alt="Professional"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute bottom-4 sm:bottom-6 left-3 right-3 sm:left-6 sm:right-6 grid grid-cols-2 sm:grid-cols-2 lg:flex justify-center gap-2 sm:gap-3">
                            {["Sustainable", "Transparent", "Impactful"].map((label, i) => (
                                <button
                                    key={i}
                                    className="backdrop-blur-md bg-white/20 text-white font-medium px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center space-x-1 sm:space-x-2 text-[12px] sm:text-[15px]"
                                >
                                    <img
                                        src={leaf}
                                        alt="leaf icon"
                                        className="w-3 h-3 sm:w-5 sm:h-5 object-contain"
                                    />
                                    <span>{label}</span>
                                </button>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
        </div>
    );
};

export default BlogMain;


