import tree from "../../assets/NewChanges/tree.png";
import group from "../../assets/NewChanges/group.png";
import lands from "../../assets/NewChanges/lands.png";
import location from "../../assets/NewChanges/location.png";
import { Heading, Description, Section, SectionCol, Badge } from "../utils";
import Video from "../AboutUs/Video";

const AboutUs = () => {
    return (
        <Section>
            <SectionCol>
                <Badge label="About Us" className="justify-center" />
                <Heading className="text-center">Where Land Grows Legacy</Heading>
                <Description className="text-center">
                    At Arony Farms, we create thoughtfully planned managed farmlands rooted in sustainability, nature, and meaningful living. Each project is crafted to offer more than ownership, it's a space where people reconnect with the land, nurture long-term value, and become part of a greener tomorrow.
                </Description>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mt-5">
                    {/* Left side - Stats cards */}
                    <div className="flex flex-col gap-4 h-full">
                        <div className="relative overflow-hidden bg-gradient-to-r from-[#cb7a0a] to-[#d9962f] text-white rounded-xl shadow-lg p-6 flex-1">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/50 via-white/10 to-transparent z-0"></div>
                            <div className="relative z-10 flex items-center gap-4 h-full">
                                <img
                                    src={group}
                                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0"
                                    alt="Group Icon - Happy Customers"
                                />
                                <div>
                                    <p className="text-xl font-semibold">150+</p>
                                    <p className="text-sm">HAPPY CUSTOMERS</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-gradient-to-r from-[#cb7a0a] to-[#d9962f] text-white rounded-xl shadow-lg p-6 flex-1">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/50 via-white/10 to-transparent z-0"></div>
                            <div className="relative z-10 flex items-center gap-4 h-full">
                                <img
                                    src={location}
                                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0"
                                    alt="Location Icon - Acres Completed"
                                />
                                <div>
                                    <p className="text-xl font-semibold">300+</p>
                                    <p className="text-sm">ACRES COMPLETED</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-gradient-to-r from-[#cb7a0a] to-[#d9962f] text-white rounded-xl shadow-lg p-6 flex-1">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/50 via-white/10 to-transparent z-0"></div>
                            <div className="relative z-10 flex items-center gap-4 h-full">
                                <img
                                    src={tree}
                                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0"
                                    alt="Tree Icon - Trees Planted"
                                />
                                <div>
                                    <p className="text-xl font-semibold">50,000+</p>
                                    <p className="text-sm">TREES PLANTED</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden bg-gradient-to-r from-[#cb7a0a] to-[#d9962f] text-white rounded-xl shadow-lg p-6 flex-1">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/50 via-white/10 to-transparent z-0"></div>
                            <div className="relative z-10 flex items-center gap-4 h-full">
                                <img
                                    src={lands}
                                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0"
                                    alt="Farmland Icon - Managed Farmlands"
                                />
                                <div>
                                    <p className="text-xl font-semibold">9+</p>
                                    <p className="text-sm">MANAGED FARMLANDS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Video */}
                    <div className="h-full">
                        <Video />
                    </div>
                </div>
            </SectionCol>
        </Section>
    );
};

export default AboutUs;