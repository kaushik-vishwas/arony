import React from "react";
import { FaLeaf, FaChartLine, FaDollarSign, FaShieldAlt } from "react-icons/fa";

const WhyFarmlandSection = () => {
  const circleColor = "#05571bff";

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block bg-[#D0F24B] px-4 py-1 rounded-full text-sm mb-4">
          The investment case
        </span>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left */}
          <div className="text-left">
            {/* Updated heading with Poppins font */}
            <h2 
              className="text-3xl sm:text-4xl lg:text-[40px] font-normal mb-6 lg:mb-12 leading-[1.15] sm:leading-[1.12] tracking-normal"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Why Smart Investors <br className="hidden sm:block" /> Choose Farmland
            </h2>

            <ul className="space-y-4 sm:space-y-6 mb-6">
              {[
                { icon: <FaLeaf />, title: "Stable Asset", desc: "Land is a tangible, finite resource with historically stable returns." },
                { icon: <FaShieldAlt />, title: "Long-term Appreciation", desc: "Farmland values typically appreciate over time with growing demand." },
                { icon: <FaChartLine />, title: "Sustainable Income", desc: "Generates consistent returns through crop yields and rental income from land." },
                { icon: <FaDollarSign />, title: "Inflation Hedge", desc: "Land values and agricultural produce prices tend to rise with inflation, protecting your investment." },
              ].map((item, index) => (
                <li key={index} className="text-left text-gray-700">
                  <div className="flex items-start gap-3">
                    <span
                      className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center rounded-[8px] text-white mt-1"
                      style={{ backgroundColor: circleColor }}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <span className="font-poppins font-medium text-lg sm:text-xl lg:text-[24px] leading-[136%] tracking-normal block">
                        {item.title}
                      </span>
                      <p className="font-poppins font-light text-sm sm:text-base lg:text-[18px] leading-[136%] tracking-normal text-gray-500 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Stats */}
          <div className="text-left">
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
              Diversify your portfolio with an asset class that has delivered consistent returns for generations.
            </p>

            {/* Updated grid for 2 cards in a row on mobile */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { value: "25%", label: "Returns on Invested Amount" },
                { value: "280+", label: "Acres Managed" },
                { value: "200+", label: "Happy Investors" },
                { value: "100+", label: "Experienced People" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#345B4E] text-white rounded-lg p-4 sm:p-5 flex flex-col items-start justify-center aspect-[4/3] min-h-[120px] sm:min-h-[140px]"
                >
                  {/* Larger font for numeric values */}
                  <p className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[50px] leading-[112%] tracking-normal mb-2">
                    {stat.value}
                  </p>
                  <p className="font-poppins font-light text-base sm:text-lg lg:text-[24px] leading-[136%] tracking-normal text-left opacity-90">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFarmlandSection;