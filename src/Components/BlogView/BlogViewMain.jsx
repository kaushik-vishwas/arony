import React, { useState } from 'react'
import blogmain from '../../assets/BlogView.png'
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";

const BlogViewMain = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className=" py-16  px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Section with Image */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Left - Text Content */}
                    <div className="flex flex-col mt-24 justify-center">
                        <div className="flex items-center gap-2 border mb-6 bg-[#035925] rounded-full px-4 py-2 transition-colors w-fit">
                            <span className="text-white text-[16px] font-medium">Sustainable Farming</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-medium text-gray-900 leading-snug sm:leading-tight lg:leading-[1.2] mb-6">
                            <span className="whitespace-nowrap">Sandalwood Farming:</span><br />
                            <span className="whitespace-nowrap">Nature’s Gold, Grown <br /> </span>
                            <span className="whitespace-nowrap">Sustainably </span>
                        </h2>


                        <p className="text-[#585858] text-[16px] font-normal leading-relaxed max-w-lg">
                            We spotlight how agronomists are key crop health, resource use,
                            and sustainability on farms of all sizes.
                        </p>
                    </div>

                    {/* Right - Image Section */}
                    <div className="relative mt-7 w-[95%] sm:w-[90%] lg:w-[85%] rounded-md overflow-hidden shadow-2xl h-64 sm:h-[360px] lg:h-[420px] ml-auto lg:-mr-8">
                        <img
                            src={blogmain}
                            alt="Professional"
                            className="w-full h-full object-cover"
                        />



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

export default BlogViewMain;
