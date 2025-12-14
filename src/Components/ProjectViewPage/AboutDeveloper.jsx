import React, { useState } from "react";
import leafgrn from "../../assets/leaf-grn.png";
import leaf from "../../assets/leaf.png";
import logo from "../../assets/logo2.png";
import EnquiryModal from "../Common/EnquiryModal";


const AboutDeveloper = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
          {/* Left: Title */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                <img
                  src={leafgrn}
                  alt="leaf icon"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-black text-[16px] font-medium">About Developer</span>
              </div>
            </div>
            <h1 className="text-[34px] sm:text-4xl lg:text-[34px] font-medium text-black mb-2">
              Managed Farmland
            </h1>
            <h2 className="text-[34px] sm:text-4xl lg:text-[34px] font-medium text-black">
              Information
            </h2>
          </div>

          {/* Center: Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Arony Farms Logo"
              className="w-[240px] h-auto object-contain"
            />
          </div>

          {/* Right: Description */}
          <div className="flex-1 max-w-md">
            <p className="text-[#585858]  text-justify text-[20px] leading-tight">
              Every project is designed to give landowners a hassle-free farming experience with planned development, scientific cultivation, and continuous on-ground monitoring. Our team ensures the right soil preparation, irrigation systems, plantation methods, and seasonal care for healthy crop growth. With clear documentation, upfront costing, and consistent updates.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Benefit 1 */}
          <div className="bg-[#FFF6EC] rounded-2xl p-6 border border-orange-100">
            <p className="text-[#CF7A19] text-[24px] text-center leading-tight">
              All daily/seasonal operations watering, pest management, fertilization, and field maintenance are handled by Arony's experienced team
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-[#FFF6EC] rounded-2xl p-6 border border-orange-100">
            <p className="text-[#CF7A19] text-[24px] text-center leading-tight">
              You receive periodic digital/photo reports of your plot's growth and health
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-[#FFF6EC] rounded-2xl p-6 border border-orange-100">
            <p className="text-[#CF7A19] text-[24px] text-center leading-tight">
              No hidden maintenance charges; all costs are disclosed upfront
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-[#FFF6EC] rounded-2xl p-6 border border-orange-100">
            <p className="text-[#CF7A19] text-[24px] text-center leading-tight">
              Fully guided legal, compliance, and sales process for peace of mind
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="bg-[#FFF6EC] rounded-2xl p-6 border border-orange-100">
            <p className="text-[#CF7A19] text-[24px] text-center leading-tight">
              Option for profit-sharing or full buyback arrangements based on current project policy
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="bg-[#FFF6EC] rounded-2xl p-6 border border-orange-100">
            <p className="text-[#CF7A19] text-[24px] text-center leading-tight">
              At maturity (12-15 years), returns paid according to government auction prices and/or facilitated direct-market sales
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-8 py-3 bg-white text-[#4BA625] border-2 border-[#4BA625] rounded-full font-medium hover:bg-green-50 transition-colors w-full sm:w-auto justify-center">
            <img src={leafgrn} alt="" className="w-5 h-5 object-contain" />
            Inquire Now
          </button>

          <button className="flex items-center gap-2 px-8 py-3 bg-[#4BA625] text-white rounded-full font-medium hover:bg-green-700 transition-colors w-full sm:w-auto justify-center">
            <img src={leaf} className="w-5 h-5 object-contain" alt="" />
            Download Project Overview
          </button>

        </div>

        {/* Enquiry Modal */}
        <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default AboutDeveloper;