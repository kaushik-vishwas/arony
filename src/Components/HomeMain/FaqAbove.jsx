import leaf from "../../assets/leaf.png";
import { Heading, Description, Badge } from "../utils";


const FaqAbove = ({ faqImg }) => {


    return (
        <div className="py-8 sm:py-10 lg:py-12 pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-0 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 w-full">

                <div className="flex flex-col items-start justify-start gap-4 sm:gap-6 md:gap-8 w-full lg:w-[40%]">
                    <Badge label="FAQs" className="justify-start mb-6" />
                    <Heading>Everything you <br /> need to know.</Heading>
                    <Description>Explore answers to the most common queries we receive from farmers, partners, and innovators around the world.</Description>
                </div>

                <div className="relative mx-auto w-full lg:w-[60%] h-64 md:h-[360px] lg:h-[380px]">
                    <img src={faqImg} alt="Professional" className="w-full h-full object-cover rounded-l-md sm:rounded-l-lg lg:rounded-l-xl" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center space-x-3">
                        <button className="backdrop-blur-md bg-white/20 text-white font-medium px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2.5 md:text-base 
                           rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center space-x-2"
                        >
                            <img
                                src={leaf}
                                alt="leaf icon"
                                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 object-contain"
                            />
                            <span>Driven</span>
                        </button>

                        <button className="backdrop-blur-md bg-white/20 text-white font-medium 
px-3 py-1.5 text-xs 
sm:px-4 sm:py-2 sm:text-sm 
md:px-5 md:py-2.5 md:text-base 
rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center space-x-2"
                        >
                            <img
                                src={leaf}
                                alt="leaf icon"
                                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 object-contain"
                            />
                            <span>Rooted</span>
                        </button>

                        <button className="backdrop-blur-md bg-white/20 text-white font-medium 
px-3 py-1.5 text-xs 
sm:px-4 sm:py-2 sm:text-sm 
md:px-5 md:py-2.5 md:text-base 
rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center space-x-2"
                        >
                            <img
                                src={leaf}
                                alt="leaf icon"
                                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 object-contain"
                            />
                            <span>Impactful</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqAbove;