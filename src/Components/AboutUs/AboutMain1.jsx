import layerMain from '../../assets/layer-main1.png';
import { Heading, Description, Section, Badge, GreenButton } from "../utils";


const AboutMain1 = () => {


    return (
        <Section className="bg-[#F0F8ED]">
            <div className="relative bg-white rounded-2xl shadow-xl max-w-7xl mx-auto overflow-hidden z-20">
                <div className="relative h-[580px] sm:h-[600px] md:h-[620px] lg:h-[640px] overflow-hidden">

                    <img src={layerMain} alt="Arony Coffee Farm" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30"></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col
                     items-center justify-center text-center text-white"
                    >
                        <div className="w-[90%] flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                            <Badge label="Who We Are" className="justify-center" />
                            <Heading>
                                We are a team of farm management experts, agronomists, and sustainability
                                professionals dedicated to responsible and natural farming.
                            </Heading>
                            <Description className='text-white mt-6 sm-mt-8 md:mt-10 lg:mt-14'>
                                We partner with local farmers and rural communities across India to cultivate land responsibly, protect natural resources, and create long-term value for both people and the planet.
                            </Description>
                            <GreenButton label="Explore Our Projects" className="bg-[#035925] mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default AboutMain1;
