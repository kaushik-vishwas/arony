import { Section, SectionCol, Badge, Heading } from "../../utils";


const NearBy = () => {

    const attractions = [
        'Close to Lepakshi Temple and eco-tourism parks',
        'Approximately 95 minutes from Bangalore International Airport',
        'Key highways, towns like Chikkaballapur and tourist landmarks within 30-45 km',
        'Access to restaurants, markets, healthcare, and hospitality facilities',
        'Bangalore airport: 95-minute drive',
        'Nearest town: 15 km',
        'National highway: 10 km',
        "Local markets, schools, and basic amenities: within 30 minutes' drive"
    ];

    return (
        <Section>
            <SectionCol className="lg:flex-row gap-8 lg:gap-12 items-start justify-center">
                <div className="w-full lg:w-[40%] space-y-4">
                    <Badge label="Near By" />
                    <Heading>Nearby Attractions & <br /> Time Highlights</Heading>
                </div>
                <div className="w-full lg:w-[60%] space-y-4">
                    {attractions.map((attraction, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-300 pb-4 last:border-b-0 last:pb-0 hover:border-green-500 transition-colors duration-300"
                        >
                            <p className="text-[#585858] text-[16px] sm:text-[17px] lg:text-[18px] font-medium leading-relaxed">
                                {attraction}
                            </p>
                        </div>
                    ))}
                </div>
            </SectionCol>
        </Section>
    );
};

export default NearBy;
