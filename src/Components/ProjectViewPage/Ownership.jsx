import React from 'react'
import leafgrn from "../../assets/leaf-grn.png";
import ownership1 from "../../assets/ownership4.png";
import ownership2 from "../../assets/ownership2.png";
import ownership3 from "../../assets/ownership3.png";

const Ownership = () => {
  const features = [
    {
      title: 'Farmhouse Construction Collaboration',
      description:
        'The construction of the farmhouse will be managed by the owner, while we will provide the necessary designs.',
      image: ownership1,
    },
    {
      title: 'Long-term Legal Support',
      description:
        'We offer legal assistance for any property document issues for up to 15 years.',
      image: ownership2,
    },
    {
      title: 'Comprehensive Documentation Services',
      description:
        'All documentation tasks will be handled by our company.',
      image: ownership3,
    },
  ];

  return (
    <div className="bg-[#F4F4F4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
            <img
              src={leafgrn}
              alt="leaf icon"
              className="w-5 h-5 object-contain"
            />
            <span className="text-black text-[16px] font-medium">Ownership</span>
          </div>

          <h2 className="text-[34px] sm:text-4xl lg:text-[34px] font-medium text-black">
            Ownership / Management Model
          </h2>
        </div>

        {/* Features */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-center gap-8"
            >
              {/* Image Section (40%) */}
              <div className="w-full md:w-[40%]">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content Section (60%) */}
              <div className="w-full md:w-[60%] flex flex-col justify-center space-y-4">
                <h3 className="text-[28px] sm:text-3xl font-medium text-black">
                  {feature.title}
                </h3>
                <p className="text-[#585858] text-[16px] sm:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ownership;
