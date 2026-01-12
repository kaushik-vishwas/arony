import React from "react";

import inhousePlant1 from "../../assets/inhousePlant1.png";
import inhousePlant2 from "../../assets/inhousePlant2.png";
import inhousePlant3 from "../../assets/inhousePlant3.png";
import inhousePlant4 from "../../assets/inhousePlant4.png";

const NurseryAdvantage = () => {
  return (
    <section className="w-full bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <div className="flex justify-center mb-4 md:mb-6">
          <span className="bg-lime-300 text-green-900 px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium">
            Our Nursery Advantage
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-2xl md:text-[40px] font-normal leading-[112%] tracking-[0%] text-center text-gray-900 mb-3 md:mb-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          High-Quality Plants from Our In-House Nursery
        </h2>

        {/* Subheading */}
        <p
          className="text-sm md:text-[20px] font-light leading-[136%] tracking-[0%] text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-14 px-4 md:px-0"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Every farmland project we undertake is powered by premium-quality
          planting material. We cultivate
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-10 md:mb-16">
          <div className="overflow-hidden rounded-2xl md:rounded-3xl">
            <img
              src={inhousePlant1}
              alt="Nursery plants"
              className="rounded-2xl md:rounded-3xl object-cover w-full h-[140px] md:h-[260px] transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg cursor-pointer"
            />
          </div>
          <div className="overflow-hidden rounded-2xl md:rounded-3xl">
            <img
              src={inhousePlant2}
              alt="Plant rows"
              className="rounded-2xl md:rounded-3xl object-cover w-full h-[160px] md:h-[320px] transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg cursor-pointer"
            />
          </div>
          <div className="overflow-hidden rounded-2xl md:rounded-3xl">
            <img
              src={inhousePlant3}
              alt="Sprinkler irrigation"
              className="rounded-2xl md:rounded-3xl object-cover w-full h-[140px] md:h-[260px] transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg cursor-pointer"
            />
          </div>
          <div className="overflow-hidden rounded-2xl md:rounded-3xl">
            <img
              src={inhousePlant4}
              alt="Saplings"
              className="rounded-2xl md:rounded-3xl object-cover w-full h-[150px] md:h-[300px] transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* Left Text - 1/3 width */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed md:col-span-1">
            Every farmland project we undertake is powered by premium-quality
            planting material. We cultivate{" "}
            <span className="font-semibold text-gray-900">
              Chikku, Mango, Guava, and Sandalwood plants
            </span>{" "}
            in our own nursery, ensuring
          </p>

          {/* Right Checklist - 2/3 width */}
          <div className="md:text-right md:col-span-2">
            <ul className="space-y-2 md:space-y-3 text-gray-700">
              {[
                "Healthy root systems",
                "Disease-free growth",
                "Better adaptability to farmland conditions",
                "Higher survival and yield potential",
              ].map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-2 md:gap-3 md:justify-end"
                >
                  <span className="text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-3 md:mt-4 font-medium text-green-800 text-sm md:text-base md:text-right">
              Nursery-grown. Crop-specialised. Professionally planted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NurseryAdvantage;