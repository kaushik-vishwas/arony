import React, { useState } from "react";
import { GreenButton } from "../../utils";
import EnquiryModal from "../../Common/EnquiryModal";



const Banner = ({ heading, description, banner }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative h-auto sm:h-auto md:h-[80vh] lg:h-screen w-full bg-cover bg-center">

            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="relative z-10 mt-24 py-12 sm:py-14 md:py-16 lg:py-20 flex flex-col items-center justify-between min-h-[70vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-screen text-center gap-10 sm:gap-12 md:gap-14">
                <h1 className="text-[30px] sm:text-[32px] md:text-[46px] lg:text-[50px] font-semibold text-white leading-tight max-w-5xl">
                    {heading || "Loading..."}
                </h1>

                <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8">
                    <p className="text-[14px] text-center sm:text-[15px] md:text-[16px] lg:text-[18px] w-[80%] text-white leading-relaxed">
                        {description || "Loading..."}
                    </p>
                    <GreenButton onClick={() => setIsModalOpen(true)} label="Enquire Now" className="bg-[#4BA625]" />
                </div>
            </div>

            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default Banner;