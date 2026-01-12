import React from "react";
import Grassland from "../../assets/grassland.png";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[90vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0) 100%), url(${Grassland})`,
        backgroundBlendMode: "darken",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-8 lg:gap-10 items-center pt-16 lg:pt-20">
        {/* Left Content */}
        <div className="text-white">
          <div className="inline-block bg-gradient-to-r from-[#D0F24B]/20 to-transparent backdrop-blur-sm px-4 py-1 rounded-full text-sm mb-4 border border-white/30">
            India's Premium Managed Farmland Platform
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[65px] font-medium leading-[1.15] sm:leading-[1.12] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            The Natural Way <br className="hidden sm:block" /> to Compound Your Wealth
          </h1>

          <p className="text-base sm:text-lg text-gray-200 mb-6 max-w-xl">
            Invest in premium farmland. We manage it. You earn stable returns
            and watch your wealth grow.
          </p>

          <button className="bg-[#D0F24B] text-black px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition text-sm sm:text-base">
            Enquire now
          </button>
        </div>

        {/* Right Stats */}
        <div className="flex justify-end items-end h-full mt-8 lg:mt-auto">
          <div className="flex flex-col gap-3 w-full lg:w-auto">
            {/* Stats Badge */}
            <div className="relative w-full lg:w-auto">
              <div className="bg-gradient-to-r from-[#D0F24B]/20 to-transparent backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-white/30 w-full lg:w-auto">
                <p className="text-2xl sm:text-3xl font-bold text-white text-left">₹100Cr+</p>
                <p className="text-sm sm:text-lg font-semibold text-white mt-1 text-left">
                  Assets Under Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;