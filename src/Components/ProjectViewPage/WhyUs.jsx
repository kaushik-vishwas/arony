import React from 'react'
import leafgrn from "../../assets/leaf-grn.png";
import leafs from "../../assets/leafs.png";
import WhyUss from "../../assets/WhyUs.png";


const WhyUs = () => {
  const reasons = [
    {
      text: 'Completely managed, zero-hassle premium agroforestry: You Own, We Farm'
    },
    {
      text: 'Transparent periodic updates, open site visitation'
    },
    {
      text: 'World-class security for plots and produce'
    },
    {
      text: 'Legal guidance, plantation registration, and government compliance handled by experts'
    },
    {
      text: 'High resale and intergenerational wealth creation potential'
    },
    {
      text: 'Proven management with industry-best, ethical, and sustainable practices'
    }
  ]

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={WhyUss}
          alt="Farm sunset landscape"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-green-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-left space-y-4">
            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
              <img
                src={leafgrn}
                alt="leaf icon"
                className="w-5 h-5 object-contain"
              />
              <span className="text-black text-[16px] font-medium">Why us</span>
            </div>

            <h2 className="text-[34px] sm:text-5xl lg:text-[34px] font-medium text-white leading-tight">
              Why Choose Arony<br />Sandalwood Farm?
            </h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <img src={leafs} alt="" />
                  </div>

                 
                </div>
                 {/* Text */}
                  <p className="text-[#585858] lg:text-[20px] font-medium sm:text-base leading-relaxed">
                    {reason.text}
                  </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs