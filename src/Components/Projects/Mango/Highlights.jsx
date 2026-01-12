import { Section, SectionCol, Heading, Badge } from '../../utils';
import drop from "../../../assets/NewChanges/drop.png";
import path from "../../../assets/NewChanges/path.png";
import herb from "../../../assets/NewChanges/herb.png";
import yoga from "../../../assets/NewChanges/yoga.png";
import home from "../../../assets/NewChanges/home.png";
import flower from "../../../assets/NewChanges/flower.png";
import wave from "../../../assets/NewChanges/wave.png";
import rupee from "../../../assets/NewChanges/rupee.png";


const Highlights = () => {

    const items = [
        { icon: drop, text: "Healing Pond with lotus blossoms and fish" },
        { icon: path, text: "Zen Trail for barefoot forest walks across 1 acre" },
        { icon: herb, text: "Ayurvedic Herb & Healing Gardens for daily wellness" },
        { icon: yoga, text: "Shanthi Stala aligned with natural energies" },
        { icon: home, text: "Ayur Kutira – Design inspired by ancient Vedic architecture" },
        { icon: flower, text: "40% Ayurvedic Healing Garden with medicinal bio-fencing" },
        { icon: wave, text: "Natural seasonal stream flowing through the project" },
        { icon: rupee, text: "Eco-retreat with passive income and long-term appreciation" },
    ];


    return (
        <Section className="bg-[#FDECD8]">
            <SectionCol>
                <div className="flex flex-col items-center justify-center w-full gap-4 sm:gap-6">
                    <Badge label="Projects" className='justify-center' />
                    <Heading className="text-center">Project Highlights</Heading>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-2xl p-6 bg-gradient-to-br from-[#C77220] via-[#D98A33] to-[#E7B05A] text-white text-center flex flex-col items-center justify-center gap-4 min-h-[180px]"
                        >
                            <img
                                src={item.icon}
                                alt=""
                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                            />
                            <p className="text-[17px] sm:text-[18px] lg:text-[19px] leading-tight font-medium">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </SectionCol>
        </Section>
    );
};

export default Highlights;