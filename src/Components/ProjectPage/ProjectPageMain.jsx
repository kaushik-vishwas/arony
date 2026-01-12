import React, { useState } from 'react'
import ProjectPageMain1 from '../../assets/ProjectPageMain1.png'
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";


const ProjectPageMain = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 font-['Instrument_Sans']">
            <div className="max-w-7xl mx-auto">

                {/* Header Section with Image */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
                    {/* Left - Text Content */}
                    <div className="flex flex-col justify-center mt-8 sm:mt-12 lg:mt-24 text-center sm:text-left">
                        {/*  Added mt-8 only for mobile */}
                        <div className="flex justify-center sm:justify-start items-center gap-2 border bg-[#035925] rounded-full px-4 py-2 transition-colors w-fit mx-auto sm:mx-0 mt-8 sm:mt-0 mb-6">
                            <span className="text-white text-[14px] sm:text-[16px] font-medium">Our Projects</span>
                        </div>

                        <h2 className="text-[28px] sm:text-4xl lg:text-[35px] font-medium text-gray-900 leading-snug sm:leading-tight lg:leading-[1.2] mb-4 sm:mb-6">
                            <span className="block">Discover Premium Managed</span>
                            <span className="block">Farmland Projects by Arony Farms</span>
                        </h2>

                        <p className="text-[#585858] text-[14px] sm:text-[16px] font-normal leading-relaxed max-w-md mx-auto sm:mx-0">
                            Own fertile, sustainable farmland managed end-to-end for effortless investment growth and ecological impact.
                        </p>
                    </div>

                    {/* Right - Image Section */}
                    <div className="relative mt-8 sm:mt-7 w-full sm:w-[90%] lg:w-[85%] rounded-md overflow-hidden shadow-2xl h-52 sm:h-[360px] lg:h-[420px] mx-auto lg:ml-auto lg:-mr-8">
                        <img
                            src={ProjectPageMain1}
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

                /* ✅ Mobile-only fixes */
                @media (max-width: 640px) {
                    .text-center {
                        text-align: center !important;
                    }
                    .mx-auto {
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    .py-16 {
                        padding-top: 3rem !important;
                        padding-bottom: 3rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProjectPageMain;