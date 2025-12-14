import { Section, SectionCol, Heading, Description, Badge } from "../../utils";
import imageOne from "../../../assets/NewChanges/ownershipOne.jpg";
import imageTwo from "../../../assets/NewChanges/ownershipTwo.jpg";
import imageThree from "../../../assets/NewChanges/ownershipThree.jpg";


const Ownership = () => {

    return (
        <div>
            <Section className="bg-[#FFF6EC]">
                <SectionCol>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="space-y-4 lg:flex-1 lg:max-w-[45%]">
                            <Badge label="Crops / Plantation Details" />
                            <Heading className="lg:leading-tight">
                                Crops / Plantation Details
                            </Heading>
                        </div>
                        <div className="lg:flex-1 lg:max-w-[55%]">
                            <Description>
                                The estate is spread over several acres, thoughtfully divided into 10, 20, and 30 gunta plots. Each plot is demarcated with internal roads, drainage, and prime plantation zones.
                            </Description>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <div className="rounded-2xl p-6 transition-all duration-300 bg-gradient-to-br from-[#C77220] via-[#D98A33] to-[#E7B05A] hover:from-[#B6681D] hover:via-[#CC7F2E] hover:to-[#DAA249]">
                            <p className="text-white text-[18px] leading-snug">
                                Plantation: <br />
                                Santalum album (Indian Coffee)
                            </p>
                        </div>

                        <div className="rounded-2xl p-6 transition-all duration-300 bg-gradient-to-br from-[#C77220] via-[#D98A33] to-[#E7B05A] hover:from-[#B6681D] hover:via-[#CC7F2E] hover:to-[#DAA249]">
                            <p className="text-white text-[18px] leading-snug">
                                Advanced pairing with suitable host plants for enhanced growth
                            </p>
                        </div>

                        <div className="rounded-2xl p-6 transition-all duration-300 bg-gradient-to-br from-[#C77220] via-[#D98A33] to-[#E7B05A] hover:from-[#B6681D] hover:via-[#CC7F2E] hover:to-[#DAA249]">
                            <p className="text-white text-[18px] leading-snug">
                                Plots managed on a rotation for pest, irrigation, and optimal soil rejuvenation
                            </p>
                        </div>
                    </div>
                </SectionCol>
            </Section>

            <Section className="bg-[#F4F4F4]">
                <SectionCol>

                    <Badge label="Ownership" />

                    <Heading className="lg:leading-tight">
                        Ownership / Management Model
                    </Heading>

                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mt-4 mb-4">
                        <img
                            src={imageOne}
                            alt=""
                            className="w-full md:w-[30%] aspect-[4/3] rounded-xl object-cover"
                        />
                        <div className="flex-1">
                            <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold text-[#111]">
                                Farmhouse Construction Collaboration
                            </h3>
                            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#555] leading-relaxed mt-2">
                                The construction of the farmhouse will be managed by the owner, while we will
                                provide the necessary designs.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-4">
                        <img
                            src={imageTwo}
                            alt=""
                            className="w-full md:w-[30%] aspect-[4/3] rounded-xl object-cover"
                        />
                        <div className="flex-1">
                            <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold text-[#111]">
                                Long-term Legal Support
                            </h3>
                            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#555] leading-relaxed mt-2">
                                We offer legal assistance for any property document issues for up to 15 years.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <img
                            src={imageThree}
                            alt=""
                            className="w-full md:w-[30%] aspect-[4/3] rounded-xl object-cover"
                        />
                        <div className="flex-1">
                            <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold text-[#111]">
                                Comprehensive Documentation Services
                            </h3>
                            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#555] leading-relaxed mt-2">
                                All documentation tasks will be handled by our company.
                            </p>
                        </div>
                    </div>
                </SectionCol>
            </Section>
        </div>
    );
};

export default Ownership;