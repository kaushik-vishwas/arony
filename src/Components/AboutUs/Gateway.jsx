import { Heading, Description, Section } from "../utils";
import gatewayImg from "../../assets/NewChanges/gateway.jpg";


const Gateway = () => {

    return (
        <Section>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
                <div className="w-full lg:w-[50%] h-[45%] sm:h-[50%] md:h-[55%] lg:h-full aspect-[1/1]">
                    <img
                        src={gatewayImg}
                        alt="Gateway"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>

                <div className="w-full lg:w-[50%] lg:aspect-[1/1] flex flex-col justify-start lg:justify-between gap-6 sm:gap-8 md:gap-10">
                    <div className="w-full flex flex-col justify-between gap-6 sm:gap-8 md:gap-10 mt-4">
                        <Heading>Your Gateway to Sustainable <br /> Agriculture Investment</Heading>
                        <Description>
                            AronyFarm is dedicated to creating thriving agricultural communities. We offer
                            meticulously planned and managed farmlands that provide not just a return on
                            investment, but a connection to nature. Our expert team handles everything from
                            cultivation to harvest, ensuring a hassle-free and transparent ownership experience
                            for you.
                        </Description>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
                        <div className="bg-[#FDF4E7] rounded-xl px-6 py-6 w-full sm:w-[33%] text-center shadow-sm">
                            <p className="text-green-600 text-2xl sm:text-3xl font-semibold">500+</p>
                            <p className="text-[#222] text-sm sm:text-base font-medium mt-1">
                                Acres Developed
                            </p>
                        </div>
                        <div className="bg-[#FDF4E7] rounded-xl px-6 py-6 w-full sm:w-[33%] text-center shadow-sm">
                            <p className="text-green-600 text-2xl sm:text-3xl font-semibold">150+</p>
                            <p className="text-[#222] text-sm sm:text-base font-medium mt-1">
                                Happy Clients
                            </p>
                        </div>
                        <div className="bg-[#FDF4E7] rounded-xl px-6 py-6 w-full sm:w-[33%] text-center shadow-sm">
                            <p className="text-green-600 text-2xl sm:text-3xl font-semibold">8+</p>
                            <p className="text-[#222] text-sm sm:text-base font-medium mt-1">
                                Years of Experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Gateway;