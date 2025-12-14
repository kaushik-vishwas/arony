import React from "react";
import leafgrn from "../../assets/leaf-grn.png";

const Tourist = () => {
  return (
    <div className="w-full bg-[#F3F3F3] py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-10">
          <div className="flex items-center gap-2 border bg-white border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
            <img src={leafgrn} alt="leaf icon" className="w-5 h-5 object-contain" />
            <span className="text-black text-[16px] font-medium">Tourist</span>
          </div>
        </div>

        {/* Combined Content Section */}
        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-10 md:gap-16 lg:gap-20">
          {/* Left Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h2 className="text-[30px] md:text-[34px] font-semibold text-black mb-3 leading-tight">
              Arony Farm – The Best Managed Farmland Company for Your Coffee & Silver Oak Estate in Sakaleshpur
            </h2>
            <p className="text-[18px] sm:text-[20px] text-[#585858] leading-relaxed text-justify whitespace-pre-line">
              If you are searching for the right place to invest in farmland, Arony Farm is the trusted name you can rely on. 
              We are one of the leading managed farmland companies in Bangalore, offering Coffee Estate + Silver Oak managed farmlands in the naturally rich region of Sakaleshpur.

              Sakaleshpur is well known for its pleasant weather, fertile soil, and high rainfall, which together create the perfect environment for premium coffee cultivation. 
              When you own farmland here, you are not just buying land you are securing a green asset that grows in value, beauty, and income over time.

              With Coffee plants, you begin to receive seasonal harvest income once the plants mature. 
              Alongside them, Silver Oak trees are planted strategically to provide shade for coffee and also become valuable timber over the years. 
              This means your investment works in two ways: Short-term yield income + Long-term wealth growth.
            </p>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h2 className="text-[30px] md:text-[34px] font-semibold text-black mb-6">
              Why Sakaleshpur is the Perfect Coffee Farmland Location
            </h2>
            <ul className="space-y-6 text-[#585858] text-[18px] sm:text-[20px] leading-relaxed">
              <li>
                <strong className="text-black">Ideal Coffee Climate:</strong> Sakaleshpur has a naturally cool, misty, and humid climate, which is exactly what coffee plants need to grow rich, aromatic beans.
              </li>
              <li>
                <strong className="text-black">Fertile Soil for Strong Growth:</strong> The region is blessed with red loamy soil, known for its excellent drainage and nutrient content ensuring healthy coffee plants and well-rooted Silver Oak trees.
              </li>
              <li>
                <strong className="text-black">High Rainfall Zone:</strong> Sakaleshpur receives abundant rainfall, maintaining natural moisture in the soil. This reduces irrigation needs and supports consistent, quality coffee yield.
              </li>
              <li>
                <strong className="text-black">Western Ghats Tourism & Development:</strong> Located along the Western Ghats tourism circuit, Sakaleshpur sees continuous growth in eco-tourism, homestays, and nature retreats, increasing land demand and future value.
              </li>
              <li>
                <strong className="text-black">Peaceful Weekend Farm Destination:</strong> Surrounded by hills, greenery, fresh air, and quiet landscapes Sakaleshpur is an ideal weekend escape from the busy city lifestyle.
              </li>
              <li>
                <strong className="text-black">Eco-Stay & Coffee Homestay Potential:</strong> The region offers excellent opportunities for future:
                <ul className="mt-3 ml-6 list-disc space-y-2">
                  <li>Coffee Estate Stays</li>
                  <li>Eco Resorts</li>
                  <li>Nature Retreats</li>
                  <li>Weekend Farmhouse Experiences</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourist;
