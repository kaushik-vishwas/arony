import { Badge, Section, SectionCol } from "../utils";
import Raj from "../../assets/NewChanges/co-founder.jpg";
import Shewtha from "../../assets/NewChanges/co-founder-two.jpg";


const Message = () => {

    return (
        <Section>
            <SectionCol>
                <div className="flex flex-col items-center text-center gap-6 sm:gap-8 md:gap-10 w-full">
                    <Badge label="Founder’s Message" className="justify-center" />

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 md:gap-24 w-full mt-4">

                        <div className="flex flex-col items-center">
                            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src={Raj}
                                    alt="Raj"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <h3 className="mt-4 text-[20px] sm:text-[22px] font-semibold text-black">Raj</h3>
                            <p className="text-[#D07A17] text-[14px] sm:text-[16px] font-medium">Founder</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src={Shewtha}
                                    alt="Shwetha R Gowda"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <h3 className="mt-4 text-[20px] sm:text-[22px] font-semibold text-black">Shwetha R Gowda</h3>
                            <p className="text-[#D07A17] text-[14px] sm:text-[16px] font-medium">Co-Founder</p>
                        </div>
                    </div>

                    <p className="max-w-4xl text-[#4CA625] text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed mt-6">
                        The concept bridges the gap between farm ownership and efficient farm management,
                        enabling landowners to enjoy the benefits of agriculture without engaging in the day-to-day
                        operations. Managed farmland focuses on sustainable cultivation, soil health, water
                        conservation, and eco-friendly practices to promote a greener future.
                    </p>
                </div>
            </SectionCol>
        </Section>
    );
};

export default Message;