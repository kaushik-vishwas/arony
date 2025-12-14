import { Heading, Description, Badge, Section, SectionCol } from "../utils";
import Video from "./Video";
import aboutmain from '../../assets/NewChanges/aboutUsImg.jpg';
import leaf from "../../assets/leaf-grn.png";


const AboutMain = () => {

    return (
        <div>
            <div className="pt-8 sm:pt-10 lg:pt-12 pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-0 w-full mt-28 sm:mt-24 md:mt-20 lg:mt-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 w-full">

                    <div className="flex flex-col items-start justify-start gap-4 sm:gap-6 md:gap-8 w-full lg:w-[60%]">
                        <Badge label="About Us" className="justify-start" />
                        <Heading>Rooted in Nature,<br /> Growing with Integrity</Heading>
                        <Description>
                            At Arony Farms, our mission is to make ethical and sustainable farmland ownership accessible to everyone. We believe farmland is more than just an asset,  it’s a living ecosystem that must be nurtured responsibly.
                        </Description>
                    </div>

                    <div className="relative mx-auto aspect-[16/9] w-full lg:w-[40%] h-64 md:h-[360px] lg:h-[420px]">

                        <img src={aboutmain} alt="Professional" className="w-full h-full object-cover" />

                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center space-x-3">
                            <button className="backdrop-blur-md bg-white/20 text-white font-medium px-3 px-3 py-1.5 text-xs sm:px-3 sm:py-1.5 sm:text-xs md:px-3 md:py-1.5 md:text-xs 
                                       rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center"
                            >
                                <img
                                    src={leaf}
                                    alt="leaf icon"
                                    className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 object-contain"
                                />
                                <span>Sustainable</span>
                            </button>

                            <button className="backdrop-blur-md bg-white/20 text-white font-medium px-3 px-3 py-1.5 text-xs sm:px-3 sm:py-1.5 sm:text-xs md:px-3 md:py-1.5 md:text-xs 
                                       rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center"
                            >
                                <img
                                    src={leaf}
                                    alt="leaf icon"
                                    className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 object-contain"
                                />
                                <span>Transparent</span>
                            </button>

                            <button className="backdrop-blur-md bg-white/20 text-white font-medium px-3 px-3 py-1.5 text-xs sm:px-3 sm:py-1.5 sm:text-xs md:px-3 md:py-1.5 md:text-xs 
                                       rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center"
                            >
                                <img
                                    src={leaf}
                                    alt="leaf icon"
                                    className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 object-contain"
                                />
                                <span>Impactful</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Section className="bg-[#F0F8ED]">
                <SectionCol className="pt-2 sm:pt-4 md:pt-6 lg:pt-8">
                    <div className="flex flex-col items-center text-center w-full">
                        <Badge label="About Us" className="justify-center mb-6" />
                        <Heading className="!text-center mb-4">Where Land Grows Legacy</Heading>
                        <Description className="w-full lg:w-[80%] text-center mb-10">
                            At Arony Farms, we create thoughtfully planned managed farmlands rooted in sustainability,
                            nature, and meaningful living. Each project is crafted to offer more than ownership, it’s a
                            space where people reconnect with the land, nurture long-term value, and become part of a
                            greener tomorrow.
                        </Description>

                        <Video />

                    </div>
                </SectionCol>
            </Section>

            <Section className="bg-gradient-to-bl from-[#4BA625] to-[#298503]">
                <SectionCol className="pt-2 sm:pt-4 md:pt-6 lg:pt-8 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10 lg:gap-20">
                        <div className="flex flex-col text-white max-w-xl">
                            <Badge label="Mission & Vision" className="justify-start mb-6" />
                            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                                The Concept Bridges The Gap Between Farm Ownership And Efficient Farm Management,
                                Enabling Landowners To Enjoy The Benefits Of Agriculture Without Engaging In The
                                Day-To-Day Operations. Managed Farmland Focuses On Sustainable Cultivation, Soil Health,
                                Water Conservation, And Eco-Friendly Practices To Promote A Greener Future.
                            </p>
                        </div>

                        <div className="flex flex-col text-white gap-4 sm:gap-6 md:gap-8 lg:gap-16 max-w-xl lg:max-w-none">
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold mb-4">Mission</h2>

                                <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                                    Our mission is to bridge the gap between modern investment and responsible agriculture
                                    by developing and managing farmlands that nurture both nature and communities.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold mb-4">Vision</h2>

                                <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                                    Our vision is simple yet powerful to make farmland ownership both financially rewarding
                                    and environmentally responsible, paving the way for a truly sustainable future.
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionCol>
            </Section>
        </div>
    );
};

export default AboutMain;
