
import React, { useState } from "react";
import leafgrn from "../../assets/leaf-grn.png";

const Configuration = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    package: "",
  });

  const plotData = [
    { configuration: "10 Guntas", sba: "10,890 Sq.Ft", price: "Unlock Price" },
    { configuration: "20 Guntas", sba: "21,789 Sq.Ft", price: "Unlock Price" },
    { configuration: "40 Guntas", sba: "43,260 Sq.Ft", price: "Unlock Price" },
  ];

  const handleUnlockClick = (plot) => {
    setSelectedPlot(plot);
    setFormData((prev) => ({ ...prev, package: plot.configuration }));
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlot(null);
    setFormData({ name: "", mobile: "", email: "", package: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Your request has been submitted successfully!");
    handleCloseModal();
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
              <img src={leafgrn} alt="leaf icon" className="w-5 h-5 object-contain" />
              <span className="text-black text-[15px] sm:text-[16px] font-medium">
                Configurations
              </span>
            </div>

            <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] font-medium text-black leading-tight">
              Tailored Plot Sizes to Match Your Investment Goals
            </h2>

            <p className="text-[#585858]  text-justify text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
              Arony Sandalwood Farm offers flexible plot size options designed
              to accommodate both first-time investors and seasoned agroforestry
              enthusiasts. Choose the ideal plot size that fits your investment
              scale and long-term vision.
            </p>
          </div>

          {/* Right Column - Table */}
          <div className="lg:w-[200%] mt-8 lg:mt-20">
            <div className="shadow-lg overflow-hidden border border-[#CF7A19] rounded-md">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-[#FFF6EC] border-b-2 border-[#CF7A19]">
                <div className="px-2 sm:px-4 py-3 text-center">
                  <span className="text-[#CF7A19] font-bold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                    Configuration
                  </span>
                </div>
                <div className="px-2 sm:px-4 py-3 text-center border-l-2 border-[#CF7A19]">
                  <span className="text-[#CF7A19] font-bold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                    SBA (Sq. Ft)
                  </span>
                </div>
                <div className="px-2 sm:px-4 py-3 text-center border-l-2 border-[#CF7A19]">
                  <span className="text-[#CF7A19] font-bold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                    Price
                  </span>
                </div>
              </div>

              {/* Table Body */}
              {plotData.map((plot, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 ${index !== plotData.length - 1 ? "border-b border-[#CF7A19]" : ""
                    }`}
                >
                  <div className="px-2 sm:px-4 py-4 text-center">
                    <span className="text-black font-medium text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                      {plot.configuration}
                    </span>
                  </div>
                  <div className="px-2 sm:px-4 py-4 text-center border-l-2 border-[#CF7A19]">
                    <span className="text-black font-medium text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                      {plot.sba}
                    </span>
                  </div>
                  <div className="px-2 sm:px-4 py-4 text-center border-l-2 border-[#CF7A19]">
                    <button
                      onClick={() => handleUnlockClick(plot)}
                      className="text-black underline hover:text-[#a55f14] font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] transition-colors"
                    >
                      {plot.price}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal with Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <h3 className="text-[#CF7A19] text-[22px] font-semibold mb-6 text-center">
              Let's Connect
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-[#CF7A19] focus:ring-1 focus:ring-[#CF7A19] outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-[#CF7A19] focus:ring-1 focus:ring-[#CF7A19] outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-[#CF7A19] focus:ring-1 focus:ring-[#CF7A19] outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Selected Package
                </label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-[#CF7A19] focus:ring-1 focus:ring-[#CF7A19] outline-none"
                >
                  <option value="">Select a package</option>
                  {plotData.map((plot, idx) => (
                    <option key={idx} value={plot.configuration}>
                      {plot.configuration}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="bg-[#CF7A19] text-white px-6 py-2 rounded-full hover:bg-[#b86b16] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Configuration;
