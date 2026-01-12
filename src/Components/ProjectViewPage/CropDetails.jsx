import React from 'react'
import leafgrn from "../../assets/leaf-grn.png"

const CropDetails = () => {
  const features = [
    {
      title: 'Plantation:',
      subtitle: 'Santalum album (Indian Sandalwood)'
    },
    {
      title: 'Advanced pairing with suitable host plants for enhanced growth'
    },
    {
      title: 'Plots managed on a rotation for pest, irrigation, and optimal soil rejuvenation'
    }
  ]

  return (
    <div className="bg-[#FFF6EC] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className=" gap-8 items-start">
          {/* Left - Title and Description in one row */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                <img
                  src={leafgrn}
                  alt="leaf icon"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-black text-[16px] font-medium">
                  Crops / Plantation Details
                </span>
              </div>

              <h2 className="text-[34px] sm:text-4xl lg:text-[34px] font-medium text-black">
                Crops / Plantation Details
              </h2>
            </div>

            {/* Right - Description beside h2 */}
            <p className="text-[#585858] text-[16px] sm:text-lg leading-relaxed lg:w-[60%]">
              The estate is spread over several acres, thoughtfully divided into 10, 20, and 30 gunta plots. Each plot is demarcated with internal roads, drainage, and prime plantation zones.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-[#EFB26C] to-[#D07A17] hover:opacity-90 rounded-md p-6 transition-all duration-300"
            >
              <div className="space-y-1">
                <h3 className="text-white font-semibold text-[20px] sm:text-lg">
                  {feature.title}
                </h3>
                {feature.subtitle && (
                  <p className="text-white/95 font-semibold text-[20px] sm:text-lg">
                    {feature.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CropDetails