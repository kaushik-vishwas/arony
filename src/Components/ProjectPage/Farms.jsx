import React from 'react';
import { Link } from 'react-router-dom';
import farms1 from '../../assets/farms1.png';
import farms2 from '../../assets/farms2.png';
import leaf from '../../assets/leaf.png';
import leafgrn from '../../assets/leafs.png';
import sandalwoodfarm from '../../assets/farm1.png';
import mangofarm from '../../assets/farm2.png';
import coffeefarm from '../../assets/farm3.png';

const Farms = () => {
    const farms = [
        // {
        //     id: 1,
        //     title: "Arony Sandalwood Farm",
        //     image: sandalwoodfarm,
        //     description:
        //         "Arony Sandalwood Farm provides a rare opportunity to invest in government-approved sandalwood cultivation backed by structured growth, secure management, and strong long-term value.",
        //     additionalInfo:
        //         "With precision plantation methods, continuous field monitoring, and transparent reporting, our team handles everything from soil preparation to maturity, ensuring a fully managed, stress-free ownership journey.",
        //     features: [
        //         "Sandalwood plantation paired with ideal host crops",
        //         "Legally compliant, professionally managed estate",
        //         "Farmland ownership in 10, 20, 30 gunta plot options",
        //         "Transparent progress reporting, government-approved cultivation",
        //     ],
        //     stats: {
        //         type: "Ayurvedic Living",
        //         location: "THEME",
        //         acres: "130 Acres",
        //         acresLocation: "THEME",
        //     },
        //     link: "/project-sandalwood",
        // },
        {
            id: 2,
            title: "The Hampi Highlands",
            image: mangofarm,
            description:
                "Arony Mango Farm gives investors a unique chance to own premium farmland developed for high-quality mango cultivation in Karnataka’s most fertile horticulture zone.",
            additionalInfo:
                "Our team manages the orchard end-to-end with expert care, scientific nutrition cycles, and regular progress updates, ensuring a smooth, worry-free experience from planting to harvest.",
            features: [
                "Mango orchard integrated with sandalwood plantation",
                "Legally compliant, professionally managed estate",
                "Farmland ownership in 10, 20, 30 gunta plot options",
                "Transparent progress reporting, government-approved cultivation",
            ],
            stats: {
                type: "Mango Farm",
                location: "THEME",
                acres: "100 Acres",
                acresLocation: "THEME",
            },
            link: "/project-mango",
        },
        {
            id: 3,
            title: "The Malnad Mist, Sakleshpur",
            image: coffeefarm,
            description:
                "Arony Coffee Farm offers investors access to managed coffee estates located in Karnataka’s renowned high-altitude coffee belt. The plantations are developed for rich, sustainable yields with optional agroforestry integration.",
            additionalInfo:
                "From day one, our experts oversee plantation health, rainfall-based irrigation planning, and eco-friendly farm maintenance, giving you a smooth, transparent, and rewarding farming experience.",
            features: [
                "Coffee plantation integrated with sandalwood trees",
                "Legally compliant, professionally managed estate",
                "Farmland ownership in 10, 20, 30 gunta plot options",
                "Transparent progress reporting, government-approved cultivation",
            ],
            stats: {
                type: "Coffee Estate",
                location: "THEME",
                acres: "120 Acres",
                acresLocation: "THEME",
            },
            link: "/project-coffee",
        },
        {
            id: 3,
            title: "The Mountain’s Breath, Chikkamagaluru",
            image: coffeefarm,
            description:
                "Arony Coffee Farm offers investors access to managed coffee estates located in Karnataka’s renowned high-altitude coffee belt. The plantations are developed for rich, sustainable yields with optional agroforestry integration.",
            additionalInfo:
                "From day one, our experts oversee plantation health, rainfall-based irrigation planning, and eco-friendly farm maintenance, giving you a smooth, transparent, and rewarding farming experience.",
            features: [
                "Coffee plantation integrated with sandalwood trees",
                "Legally compliant, professionally managed estate",
                "Farmland ownership in 10, 20, 30 gunta plot options",
                "Transparent progress reporting, government-approved cultivation",
            ],
            stats: {
                type: "Coffee Estate",
                location: "THEME",
                acres: "60 Acres",
                acresLocation: "THEME",
            },
            link: "/project-coffee",
        }
    ];

    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-16">
                {farms.map((farm) => (
                    <div key={farm.id} className="bg-white rounded-lg overflow-hidden">
                        {/* Title */}
                        <div className="px-4 sm:px-8 lg:px-12 pt-8 pb-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-7 h-7 flex items-center justify-center">
                                    <img src={leafgrn} alt="" className="w-6 h-6" />
                                </div>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-semibold text-black leading-tight">
                                {farm.title}
                            </h2>
                        </div>

                        {/* Image */}
                        <div className="px-4 sm:px-8 lg:px-12">
                            <div className="rounded-lg overflow-hidden shadow-md h-52 sm:h-72 lg:h-96">
                                <img
                                    src={farm.image}
                                    alt={farm.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-4 sm:px-8 lg:px-12 pt-6">
                            <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
                                {/* Description */}
                                <div className="lg:w-[40%] space-y-3">
                                    <p className="text-[#585858] text-base sm:text-lg lg:text-[20px] leading-relaxed">
                                        {farm.description}
                                    </p>
                                    <p className="text-[#585858] text-base sm:text-lg lg:text-[20px] leading-relaxed">
                                        {farm.additionalInfo}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="lg:w-[30%] space-y-2">
                                    {farm.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-[#585858] rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-[#585858] text-base sm:text-lg lg:text-[20px] leading-normal">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Stats */}
                                <div className="lg:w-[30%] space-y-3">
                                    {/* Ayurvedic Living */}
                                    <div className="bg-[#FFF6EC] rounded-lg p-4 border border-orange-100 flex flex-col items-start text-start">
                                        <div className="w-9 h-9 flex items-center justify-center shadow-sm mb-2 rounded-full">
                                            <img src={farms1} alt="" className="w-7 h-7" />
                                        </div>
                                        <h3 className="font-semibold text-xl sm:text-2xl lg:text-[26px] text-black mb-1">
                                            {farm.stats.type}
                                        </h3>
                                        <p className="text-sm sm:text-base text-[#585858]">
                                            {farm.stats.location}
                                        </p>
                                    </div>

                                    {/* Acres */}
                                    <div className="bg-[#FFF6EC] rounded-lg p-4 border border-orange-100 flex flex-col items-start text-start">
                                        <div className="w-9 h-9 flex items-center justify-center shadow-sm rounded-full mb-2">
                                            <img src={farms2} alt="" className="w-7 h-7" />
                                        </div>
                                        <h3 className="font-bold text-xl sm:text-2xl lg:text-[26px] text-black mb-1">
                                            {farm.stats.acres}
                                        </h3>
                                        <p className="text-sm sm:text-base text-[#585858]">
                                            {farm.stats.acresLocation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="px-4 sm:px-8 lg:px-12 pt-6 pb-8">
                            <Link
                                to={farm.link}
                                className="inline-flex items-center gap-2 bg-[#4BA625] hover:bg-green-800 text-white px-5 sm:px-6 py-3 rounded-full transition-colors font-medium text-sm sm:text-base w-auto"
                            >

                                <img src={leaf} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                                View Project Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Farms;
