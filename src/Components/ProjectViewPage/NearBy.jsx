import React from 'react'
import leafgrn from "../../assets/leaf-grn.png";

const NearBy = () => {
  const attractions = [
    'Close to Lepakshi Temple and eco-tourism parks',
    'Approximately 95 minutes from Bangalore International Airport',
    'Key highways, towns like Chikkaballapur and tourist landmarks within 30-45 km',
    'Access to restaurants, markets, healthcare, and hospitality facilities',
    'Bangalore airport: 95-minute drive',
    'Nearest town: 15 km',
    'National highway: 10 km',
    "Local markets, schools, and basic amenities: within 30 minutes' drive"
  ];

  return (
    <div className="bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        
        {/* Left Column - Title */}
        <div className="w-full lg:w-[40%] space-y-4">
          <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
            <img
              src={leafgrn}
              alt="leaf icon"
              className="w-5 h-5 object-contain"
            />
            <span className="text-black text-[16px] font-medium">NearBy</span>
          </div>

          <h2 className="text-[34px] sm:text-4xl lg:text-[34px] font-medium text-black leading-tight">
            Nearby Attractions &<br />Time Highlights
          </h2>
        </div>

        {/* Right Column - Attractions List */}
        <div className="w-full lg:w-[60%] space-y-4">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4 last:border-b-0 last:pb-0 hover:border-green-500 transition-colors duration-300"
            >
              <p className="text-[#585858] text-[18px] sm:text-lg font-medium leading-relaxed">
                {attraction}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default NearBy;
