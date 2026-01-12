import React from 'react'
import leafgrn from "../../assets/leaf-grn.png";

const Location = () => {
    return (
        <div className="min-h-screen bg-neutral-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">

                {/* Header Section */}
                <div className="text-center space-y-5 sm:space-y-6">
                    <h2 className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-semibold text-black leading-snug md:leading-tight max-w-5xl mx-auto">
                        Arony Mango Farm offers investors a rare opportunity to own and profit from managed mango cultivation in India’s most sought-after agroforestry corridor.
                    </h2>

                    <p className="text-[#585858] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-tight font-medium max-w-3xl mx-auto">
                        Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.
                    </p>
                </div>

                {/* Feature Boxes */}
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
                    <div className="bg-[#FFF6EC] rounded-2xl p-5 sm:p-6 text-center">
                        <p className="text-[#CF7A19] font-medium leading-tight text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
                            Own freehold land, not just a<br />share in a crop
                        </p>
                    </div>

                    <div className="bg-[#FFF6EC] rounded-2xl p-5 sm:p-6 text-center">
                        <p className="text-[#CF7A19] font-medium leading-tight text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
                            Long-term, high-value growth and<br />sustainability in one package
                        </p>
                    </div>
                </div>

                {/* Map Section */}
                <div className="grid lg:grid-cols-6 gap-6 sm:gap-8 items-start">
                    {/* Left - Map Info */}
                    <div className="lg:col-span-2 space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                            <img
                                src={leafgrn}
                                alt="leaf icon"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-black text-[16px] font-medium">Location</span>
                        </div>

                        <h3 className="text-[34px] sm:text-3xl md:text-4xl font-medium text-black leading-snug">
                            Mango<br />Interactive Map
                        </h3>





                        <p className="text-[#585858]  text-[16px] sm:text-[15px] md:text-[16px] leading-relaxed">
                            <ul>
                          <li>  Nearest Town / City Gangavathi -15km </li>

                            <li>  Highways / Roads : Hospet Highway</li>

                             <li> Railway / Airport Access : Gangavathi Railway Station / Huballi Airport</li>

                            <li>  Essential Services : Hospitals, schools, markets within <br /> 5 km</li>

                             <li> Tourist Attractions : Hampi -35km and Anjanadri 25km</li>
                            </ul>
                        </p>
                    </div>

                    {/* Right - Map */}
                    <div className="lg:col-span-4">
                        <div className="rounded-md overflow-hidden shadow-lg border border-gray-200 h-56 sm:h-64 md:h-80 lg:h-80">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7686.770290433378!2d76.41832534999999!3d15.571057849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb827b53e0783ff%3A0xecd2433db057049c!2sKanakagiri%2C%20Karnataka%20583283!5e0!3m2!1sen!2sin!4v1768136604143!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Sandalwood Farm Location"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location
