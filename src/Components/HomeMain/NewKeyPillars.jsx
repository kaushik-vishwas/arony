import earth from "../../assets/NewChanges/earth.png";
import leaveSettings from "../../assets/NewChanges/leaveSettings.png";
import fist from "../../assets/NewChanges/fist.png";
import leaves from "../../assets/NewChanges/leaves.png";
import clock from "../../assets/NewChanges/clock.png";
import { Heading, Description, Section, SectionCol, Badge } from "../utils";

const NewKeyPillars = () => {
    const pillars = [
        {
            icon: leaves,
            title: "Sustainable Farming Practices",
            description: "Eco-friendly farming methods that preserve soil health and biodiversity.",
            backDescription: "We implement regenerative agriculture, organic farming, and water conservation techniques to ensure long-term soil fertility and environmental balance.",
        },
        {
            icon: leaveSettings,
            title: "Hassle Free Farm Management",
            description: "Complete farm management services for worry-free ownership.",
            backDescription: "From planting to harvesting, we handle everything. Our expert team manages daily operations, maintenance, and logistics so you can enjoy ownership without the work.",
        },
        {
            icon: fist,
            title: "Empowering Local Communities",
            description: "Creating opportunities and supporting local farmers and communities.",
            backDescription: "We create sustainable livelihoods by employing local farmers, providing training programs, and investing in community development projects.",
        },
        {
            icon: clock,
            title: "Real-Time Investment Transparency",
            description: "Stay informed with real-time farm updates, performance reports, and progress tracking through our advanced digital platform.",
            backDescription: "Access live farm data, video feeds, growth metrics, and financial reports through our dedicated app. Complete visibility into your investment's performance.",
        },
        {
            icon: earth,
            title: "Environmental & Cultural Restoration Commitment",
            description: "Dedicated to restoring ecosystems and preserving cultural heritage.",
            backDescription: "We work to revive native species, restore watersheds, and preserve traditional farming knowledge while implementing modern sustainable practices.",
        }
    ];

    return (
        <Section className="bg-[#FFF4E9]">
            <SectionCol>
                <Badge label="Key Pillars" className="justify-center" />
                <Heading className="text-center">Key Pillars of our Farms</Heading>
                <Description className="text-center">
                    At Arony Farms, we create thoughtfully planned managed farmlands rooted
                    in sustainability, nature, and meaningful living. Each project is crafted
                    to offer more than ownership.
                </Description>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
                    {pillars.map((pillar, index) => (
                        <div 
                            key={index}
                            className="group h-72 cursor-pointer [perspective:1000px]"
                        >
                            {/* Flip Card Container */}
                            <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                
                                {/* Front of Card - All cards start with #F8D8B4 */}
                                <div className="absolute inset-0 rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-6 [backface-visibility:hidden] bg-[#F8D8B4] text-[#A85A00]">
                                    <img
                                        src={pillar.icon}
                                        alt={pillar.title}
                                        className="w-12 h-12 mx-auto mb-4 object-contain"
                                    />
                                    <p className="font-bold text-lg mb-2">
                                        {pillar.title}
                                    </p>
                                    <p className="text-sm leading-relaxed opacity-90">
                                        {pillar.description}
                                    </p>
                                    <div className="absolute bottom-3 text-xs opacity-70">
                                        Hover to flip
                                    </div>
                                </div>

                                {/* Back of Card - ALL cards flip to #4BA625 */}
                                <div className="absolute inset-0 rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#4BA625] text-white">
                                    <div className="mb-4">
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/20">
                                            Details
                                        </span>
                                    </div>
                                    <p className="font-bold text-lg mb-3">
                                        More Details
                                    </p>
                                    <p className="text-sm leading-relaxed opacity-90">
                                        {pillar.backDescription}
                                    </p>
                                    <div className="absolute bottom-3 text-xs opacity-70">
                                        {pillar.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionCol>
        </Section>
    );
};

export default NewKeyPillars;