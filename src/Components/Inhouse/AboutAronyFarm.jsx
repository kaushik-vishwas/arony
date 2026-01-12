import React from "react";
import futureAgri from "../../assets/futureAgri.png"; // Make sure to import your image

export default function AboutAronyFarms() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="rounded-full bg-lime-300 px-6 py-2 text-sm font-medium text-gray-900">
            About Arony Farms
          </span>
        </div>

        {/* Heading with exact font specifications */}
        <h2 
          className="text-center text-gray-900 mb-4"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '40px',
            lineHeight: '112.00000000000001%',
            letterSpacing: '0%',
            leadingTrim: 'none',
          }}
        >
          The Future of Agricultural Investment
        </h2>

        {/* Description */}
          <p className="font-poppins font-normal text-[20px] leading-[136%] tracking-normal text-center text-gray-600 mx-auto  mb-14">


          Arony Farms offers a unique managed farmland model where you own
          premium agricultural land while our team of experts handles all
          farming operations. You get the benefits of land ownership and
          agricultural returns without the complexity of farm management.
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image - using the imported image */}
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <img
              src={futureAgri} // Using the imported image
              alt="The Future of Agricultural Investment"
              className="h-[340px] w-full object-cover"
            />
          </div>

          {/* Feature list */}
          <div className="space-y-4">
            {["Professional farm management by agricultural experts",
              "Legal ownership with clear documentation",
              "Focus on high-value crops: Mango & Coffee orchards",
              "Regular updates on your farm performance",
              "Transparent operations with farm visit opportunities",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-100 px-6 py-4 text-gray-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}