import { Heading, Section, SectionCol } from "../utils";


const Openings = () => {

    return (
        <Section>
            <SectionCol>

                <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 sm:gap-10 md:gap-12">

                    <div className="border-t border-gray-300 pt-10" />
                    <Heading>Openings</Heading>

                    <div className="grid grid-cols-2 text-left text-[14px] sm:text-[16px] font-medium text-black">
                        <span>Role</span>
                        <span className="text-right">Location</span>
                    </div>

                    <div className="w-full flex flex-col gap-6">
                        <div>
                            <div className="flex items-center justify-between py-4 border-b border-gray-300">
                                <p className="text-[14px] sm:text-[18px] text-[#333]">Lorem ipsum dolor sit amet consectetur</p>
                                <span className="px-3 py-1 bg-gray-100 rounded-full whitespace-nowrap text-[12px] sm:text-[14px] text-[#444]">Mumbai, IND</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between py-4 border-b border-gray-300">
                                <p className="text-[14px] sm:text-[18px] text-[#333]">Lorem ipsum dolor sit amet consectetur</p>
                                <span className="px-3 py-1 bg-gray-100 rounded-full whitespace-nowrap text-[12px] sm:text-[14px] text-[#444]">Delhi, IND</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between py-4 border-b border-gray-300">
                                <p className="text-[14px] sm:text-[18px] text-[#333]">Lorem ipsum dolor sit amet consectetur</p>
                                <span className="px-3 py-1 bg-gray-100 rounded-full whitespace-nowrap text-[12px] sm:text-[14px] text-[#444]">Bangalore, IND</span>
                            </div>
                        </div>
                    </div>
                </div>

            </SectionCol>
        </Section>
    );
};

export default Openings;