import React, { useState } from "react";
import { Section, SectionCol, Badge, Heading, Description } from "../../utils";
import leafgrn from "../../../assets/leaf-grn.png";
import leaf from "../../../assets/leaf.png";
import logo from "../../../assets/logo2.png";
import EnquiryModal from "../../Common/EnquiryModal";


const AboutDeveloper = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Section>
            <SectionCol>

                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:mb-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                            <Badge label="About Developer" />
                        </div>
                        <Heading>Managed Farmland Information</Heading>
                    </div>
                    <div className="flex-shrink-0">
                        <img
                            src={logo}
                            alt="Arony Farms Logo"
                            className="w-[240px] h-auto object-contain"
                        />
                    </div>
                    <div className="flex-1 max-w-md">
                        <Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat obcaecati veniam similique odio alias commodi consequuntur esse perspiciatis. Voluptatem facere mollitia architecto temporibus dolore, odio quibusdam voluptatum. Facere, voluptatum doloribus!
                        </Description>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-[#FFF6EC] rounded-2xl p-6 border border-orange-100">
                        <p className="text-[#CF7A19] text-[20px] sm:text-[22px] lg:text-[24px] text-center leading-tight">
                            All daily/seasonal operations watering, pest management, fertilization, and field maintenance are handled by Arony's experienced team
                        </p>
                    </div>
                    <div className="bg-[#FFF6EC] rounded-2xl p-6 border border-orange-100">
                        <p className="text-[#CF7A19] text-[20px] sm:text-[22px] lg:text-[24px] text-center leading-tight">
                            You receive periodic digital/photo reports of your plot's growth and health
                        </p>
                    </div>
                    <div className="bg-[#FFF6EC] rounded-2xl p-6 border border-orange-100">
                        <p className="text-[#CF7A19] text-[20px] sm:text-[22px] lg:text-[24px] text-center leading-tight">
                            No hidden maintenance charges; all costs are disclosed upfront
                        </p>
                    </div>
                    <div className="bg-[#FFF6EC] rounded-2xl p-6 border border-orange-100">
                        <p className="text-[#CF7A19] text-[20px] sm:text-[22px] lg:text-[24px] text-center leading-tight">
                            Fully guided legal, compliance, and sales process for peace of mind
                        </p>
                    </div>
                    <div className="bg-[#FFF6EC] rounded-2xl p-6 border border-orange-100">
                        <p className="text-[#CF7A19] text-[20px] sm:text-[22px] lg:text-[24px] text-center leading-tight">
                            Option for profit-sharing or full buyback arrangements based on current project policy
                        </p>
                    </div>
                    <div className="bg-[#FFF6EC] rounded-2xl p-6 border border-orange-100">
                        <p className="text-[#CF7A19] text-[20px] sm:text-[22px] lg:text-[24px] text-center leading-tight">
                            At maturity (12-15 years), returns paid according to government auction prices and/or facilitated direct-market sales
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-[#4BA625] border-2 border-[#4BA625] rounded-full font-medium hover:bg-green-50 transition-colors w-full sm:w-auto justify-center text-[15px] sm:text-[16px] lg:text-[17px]"
                    >
                        <img src={leafgrn} alt="" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                        Inquire Now
                    </button>

                    <button
                        className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#4BA625] text-white rounded-full font-medium hover:bg-green-700 transition-colors w-full sm:w-auto justify-center text-[15px] sm:text-[16px] lg:text-[17px]"
                    >
                        <img src={leaf} alt="" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                        Download Project Overview
                    </button>
                </div>

                <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </SectionCol>
        </Section>
    );
};

export default AboutDeveloper;