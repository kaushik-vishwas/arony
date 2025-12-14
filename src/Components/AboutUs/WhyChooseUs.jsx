import whychoose from "../../assets/whychoose.png";
import whychoose1 from "../../assets/whychoose1.png";
import whychoose2 from "../../assets/whychoose2.png";
import whychoose3 from "../../assets/whychoose3.png";
import whychoose4 from "../../assets/whychoose4.png";
import { Heading, Badge, Section, SectionCol } from "../utils";


const WhyChooseUs = () => {

    return (
        <Section >
            <SectionCol>

                <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8">
                    <Badge label="Why choose us" className="justify-center" />
                    <div>
                        <Heading className="text-center">Invest with confidence.</Heading>
                        <Heading className="text-center">Grow with nature.</Heading>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[minmax(0,40%)_minmax(0,60%)] lg:grid-cols-[minmax(0,30%)_minmax(0,70%)] mt-4 sm:mt-6 gap-6">
                    <div className="order-1">
                        <div className="relative h-[380px] sm:h-[460px] md:h-[500px] lg:h-[750px] rounded-md overflow-hidden shadow-2xl group">
                            <img
                                src={whychoose}
                                alt="Hands holding plant"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                    </div>

                    <div className="order-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
                        <div
                            className="bg-[#FAFAFA] rounded-md p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 
                             hover:scale-105 flex flex-col justify-between h-auto min-h-[320px]"
                        >
                            <div className="mb-4">
                                <div className="w-24 h-32 rounded-md overflow-hidden shadow-lg mx-auto md:mx-0">
                                    <img src={whychoose1} className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-black text-[18px] sm:text-[20px] font-semibold mb-2 leading-tight">
                                    Hassle-Free Ownership
                                </h3>
                                <p className="text-[#585858] font-normal text-[14px] sm:text-[16px] leading-relaxed">
                                    Own fertile farmland without worrying about day-to-day operations. Our expert team manages everything from cultivation to maintenance.
                                </p>
                            </div>
                        </div>
                        <div
                            className="rounded-md p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col justify-between h-auto min-h-[320px]"
                            style={{
                                background: "linear-gradient(to bottom left, #D07A17, #EFB26C)",
                            }}
                        >
                            <div className="mb-4">
                                <div className="w-24 h-32 rounded-md overflow-hidden shadow-lg mx-auto md:mx-0">
                                    <img src={whychoose2} alt="Natural Farming" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white text-[18px] sm:text-[20px] font-semibold mb-2 leading-tight">
                                    100% Natural & Sustainable Farming
                                </h3>
                                <p className="text-white font-normal text-[14px] sm:text-[16px] leading-relaxed">
                                    Every acre under Arony Farms is cultivated using chemical-free and eco-friendly methods.
                                </p>
                            </div>
                        </div>
                        <div
                            className="rounded-md p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col justify-between h-auto min-h-[320px]"
                            style={{
                                background: "linear-gradient(to bottom right, #4CA625, #8CA625)",
                            }}
                        >
                            <div className="mb-4">
                                <div className="w-24 h-32 rounded-md overflow-hidden shadow-lg mx-auto md:mx-0">
                                    <img src={whychoose3} alt="Transparency" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white text-[18px] sm:text-[20px] font-semibold mb-2 leading-tight">
                                    Transparency at Every Step
                                </h3>
                                <p className="text-white font-normal text-[14px] sm:text-[16px] leading-relaxed">
                                    You receive regular updates, progress reports, and open access to visit your farmland anytime so you're always connected to your investment.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#FAFAFA] rounded-md p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col justify-between h-auto min-h-[320px]">
                            <div className="mb-4">
                                <div className="w-24 h-32 rounded-md overflow-hidden shadow-lg mx-auto md:mx-0">
                                    <img src={whychoose4} alt="Diversified Investment" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-black text-[18px] sm:text-[20px] font-semibold mb-2 leading-tight">
                                    Diversified Investment Options
                                </h3>
                                <p className="text-[#585858] font-normal text-[14px] sm:text-[16px] leading-relaxed">
                                    Choose from a range of farmland projects from sandalwood plantations to fruit and spice farms allowing you to diversify your portfolio with long-term eco-positive returns.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </SectionCol>
        </Section>
    );
};

export default WhyChooseUs;
