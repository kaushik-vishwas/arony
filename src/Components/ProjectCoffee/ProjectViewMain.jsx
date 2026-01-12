import React, { useState } from "react";
import ProjectViewMain3 from "../../assets/ProjectViewMain3.png";
import leaf from "../../assets/leaf.png";
import EnquiryModal from "../Common/EnquiryModal";
import { useLocation } from "react-router-dom";


const ProjectViewMain = () => {

  const location = useLocation();

  const pageName = (() => {
    if (location.pathname === "/project-coffee-malnad-mist") return "The Malnad Mist, Sakleshpur – Coffee Estate";
    if (location.pathname === "/project-coffee-mountains-breath") return "The Mountain’s Breath, Chikkamagaluru – Coffee Estate";
    return "Arony Farms - Coffee Estate";
  })();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-auto sm:h-auto md:h-[80vh] lg:h-screen w-full bg-cover bg-center font-['Instrument_Sans']">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ProjectViewMain3})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-screen px-4 text-center py-20 sm:py-24 md:py-0">
        <h1 className="text-[30px] sm:text-[32px] md:text-[46px] lg:text-[50px] font-semibold text-white leading-tight max-w-5xl pt-10 sm:pt-20 md:pt-36 mb-6 sm:mb-10 md:mb-16">
          {pageName || "Loading..."}
        </h1>
        <p className="text-[14px] text-justify sm:text-[15px] md:text-[16px] lg:text-[18px] text-white max-w-2xl mb-8 sm:mb-9 leading-relaxed">
          Arony Coffee Farm offers investors a rare opportunity to own and profit from managed coffee cultivation in India’s most sought-after agroforestry corridor. Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of
          <span className="block text-center">harvest.</span>
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-full px-4 py-2 bg-[#4BA625] text-white transition-colors w-fit mx-auto hover:bg-[#3d8d1f]"
        >
          <img
            src={leaf}
            alt="leaf icon"
            className="w-5 h-5 object-contain"
          />
          <span className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium">
            Enquire Now
          </span>
        </button>
      </div>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ProjectViewMain;
