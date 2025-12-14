import React, { useState } from "react";
import ProjectViewMain2 from "../../assets/ProjectViewMain2.png";
import leaf from "../../assets/leaf.png";
import { Link } from "react-router-dom";
import EnquiryModal from "../Common/EnquiryModal"; 

const ProjectViewMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-auto sm:h-auto md:h-[80vh] lg:h-screen w-full bg-cover bg-center font-['Instrument_Sans']">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ProjectViewMain2})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-screen px-4 text-center py-20 sm:py-24 md:py-0">
        <h1 className="text-[30px] sm:text-[32px] md:text-[46px] lg:text-[50px] font-semibold text-white leading-tight max-w-5xl pt-10 sm:pt-20 md:pt-36 mb-6 sm:mb-10 md:mb-16">
          The Hampi Highlands - Mango Farm
        </h1>
        <p className="text-[14px] text-justify sm:text-[15px] md:text-[16px] lg:text-[18px] text-white max-w-2xl mb-8 sm:mb-9 leading-relaxed">
          Arony Mango Farm offers investors a rare opportunity to own and profit from managed mango cultivation in India’s most sought-after agroforestry corridor. Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of
          <span className="block text-center">harvest.</span>
        </p>

        {/* Button */}
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

      {/* Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ProjectViewMain;
