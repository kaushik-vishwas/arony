import React from 'react'
import leafgrn from "../../assets/leaf-grn.png";
import { useLocation } from 'react-router-dom';

const AreaLayout = () => {

  const location = useLocation();

  const acresValue = (() => {
    if (location.pathname === "/project-mango") return "100 Acres";
    if (location.pathname === "/project-coffee-malnad-mist") return "120 Acres";
    if (location.pathname === "/project-coffee-mountains-breath") return "60 Acres";
    return "130 Acres";
  })();

  const stats = [
    {
      value: acresValue,
      label: 'Total Land Area'
    },
    // {
    //   value: '6000 sq.ft',
    //   label: 'Aroha & Amara'
    // },
    {
      value: '2',
      label: 'Treehouses'
    },
    {
      value: '24/7',
      label: 'On-Site Team'
    }
  ];


  return (
    <div className="bg-[#F4F4F4] py-12 px-4 sm:px-6 lg:px-8">
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
                  Total Area & Layout
                </span>
              </div>

              <h2 className="text-[34px] sm:text-4xl lg:text-[34px] font-medium text-black">
                Total Area and layout
              </h2>
            </div>

            {/* Right - Description beside h2 */}
            <p className="text-[#585858] text-[16px] sm:text-lg leading-relaxed lg:w-[60%]">
              The estate is spread over several acres, thoughtfully divided into PL 20, and 30 gunta plots. Each plot is demarcated with internal roads, drainage, and prime plantation zones.
            </p>
          </div>
        </div>


        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 transition-all duration-300 bg-gradient-to-br from-[#4CA625] to-[#8CA625] hover:from-[#3F8F20] hover:to-[#7EB824]"
            >
              <div className="space-y-2 text-start">
                <h3 className="text-[28px] sm:text-3xl font-semibold text-white">
                  {stat.value}
                </h3>
                <p className="text-white text-[18px] sm:text-base">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AreaLayout