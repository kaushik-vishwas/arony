import React from 'react'
import leafgrn from "../../assets/leaf-grn.png";

const Benefits = () => {
  const benefits = [
    { text: 'Annualized return potential of 20–25% at maturity, driven by global demand and short supply' },
    { text: 'Agricultural income is tax-exempt under current Indian law' },
    { text: 'Recession-proof, inflation-hedged tangible asset, outperforming most markets' },
    { text: 'Government-facilitated sales, minimal marketing risk' },
    { text: 'Promotes biodiversity and landscape resilience' },
    { text: 'Excellent carbon offset/ESG investment' },
    { text: 'Passive income, weekend retreat potential, and connection with nature' },
    { text: 'Supports rural employment and ecosystem conservation' }
  ];

  return (
    <div className="bg-[#EEFFE7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border bg-white border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
            <img
              src={leafgrn}
              alt="leaf icon"
              className="w-5 h-5 object-contain"
            />
            <span className="text-black text-[16px] font-medium">Benefits</span>
          </div>

          <h2 className="text-[34px] sm:text-4xl lg:text-[34px] font-medium text-black">
            Investment Benefits
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 text-left"
            >
              {/* Checkmark Icon on Left */}
              <div className="w-8 h-8 bg-[#4BA625] rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Text */}
              <p className="text-[#1E1E1E] font-medium text-[17px] sm:text-[20px] lg:text-[20px] leading-normal">
                {benefit.text}
              </p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
