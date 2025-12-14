import { useRef, useEffect, useState } from 'react';
import { Heading, Description, Section, Badge, GreenButton } from "../utils";
import bigLeave from "../../assets/NewChanges/bigLeave.png";
import imageOne from "../../assets/NewChanges/chooseOne.jpg";
import imageTwo from "../../assets/NewChanges/chooseTwo.jpg";
import imageThree from "../../assets/NewChanges/chooseThree.jpg";
import imageFour from "../../assets/NewChanges/chooseFour.jpg";

const WhyChooseUs = () => {
    const containerRef = useRef(null);
    const [isOverlapping, setIsOverlapping] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Start overlap when section reaches middle of viewport
            const shouldOverlap = rect.top < windowHeight * 0.6;
            setIsOverlapping(shouldOverlap);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cards = [
        {
            title: "Legacy in Every Acre",
            image: imageOne,
            des: "Our projects are designed to grow in value over generations – preserving nature while building a timeless family asset."
        },
        {
            title: "Wellness at the Core",
            image: imageTwo,
            des: "Every project is curated with spaces for healing, relaxation, and mindful living – making farmland ownership a rejuvenating experience."
        },
        {
            title: "Hassle-Free Ownership",
            image: imageThree,
            des: "From plantations to property management, we take care of the hard work so you enjoy the rewards of your land without worries."
        },
        {
            title: "Future-Ready Investments",
            image: imageFour,
            des: "By combining modern design with sustainable practices, we ensure your farmland remains relevant, rewarding, and resilient for decades."
        }
    ];

    return (
        <Section>
            <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                    <Badge label="Why Choose us?" className="justify-start" />
                    <Heading className="text-left">Difference We Create</Heading>
                    <Description className="max-w-md text-left">
                        At Arony Farms, we believe farmland is more than just an investment, it's a lifestyle.
                        Our projects are carefully designed to blend natural beauty with modern comforts,
                        creating spaces where you can relax, rejuvenate, and reconnect with nature.
                        Each retreat is crafted to offer you a unique balance of leisure, sustainability,
                        and long-term value.
                    </Description>
                    <GreenButton label="Know About Us" className="bg-[#035925]" />
                </div>

                {/* Cards Container - Desktop overlapping effect */}
                <div className="hidden lg:block relative h-[600px]">
                    {/* Static positions for when not overlapping */}
                    <div className={`space-y-6 transition-all duration-700 ${isOverlapping ? 'opacity-0' : 'opacity-100'}`}>
                        {cards.map((card, index) => (
                            <div
                                key={`static-${index}`}
                                className="border border-[#C28C4B] rounded-xl p-6 flex flex-col gap-4 bg-white shadow-lg"
                            >
                                <div className="flex items-center gap-2">
                                    <img src={bigLeave} alt="Leaf Icon" className="w-6 h-6 object-contain" />
                                    <h3 className="text-xl font-semibold">{card.title}</h3>
                                </div>
                                <div className="relative rounded-lg overflow-hidden aspect-[16/9]">
                                    <img src={card.image} alt={`${card.title} Image`} className="w-full h-full object-cover" />
                                    <div className="absolute top-0 left-0 w-full backdrop-blur-md bg-black/20 p-4">
                                        <p className="text-white text-base">{card.des}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Overlapping cards */}
                    <div className={`absolute top-0 left-0 w-full transition-all duration-700 ${isOverlapping ? 'opacity-100' : 'opacity-0'}`}>
                        {cards.map((card, index) => (
                            <div
                                key={`overlap-${index}`}
                                className={`
                                    absolute w-full border border-[#C28C4B] rounded-xl p-6 
                                    flex flex-col gap-4 bg-white shadow-lg
                                    transition-all duration-500 ease-out
                                    hover:scale-105 hover:z-50 hover:shadow-2xl
                                    ${index === 0 ? 'top-0 z-40' : ''}
                                    ${index === 1 ? 'top-20 z-30 scale-95 opacity-95' : ''}
                                    ${index === 2 ? 'top-40 z-20 scale-90 opacity-90' : ''}
                                    ${index === 3 ? 'top-60 z-10 scale-85 opacity-85' : ''}
                                `}
                            >
                                <div className="flex items-center gap-2">
                                    <img src={bigLeave} alt="Leaf Icon" className="w-6 h-6 object-contain" />
                                    <h3 className="text-xl font-semibold">{card.title}</h3>
                                </div>
                                <div className="relative rounded-lg overflow-hidden aspect-[16/9]">
                                    <img src={card.image} alt={`${card.title} Image`} className="w-full h-full object-cover" />
                                    <div className="absolute top-0 left-0 w-full backdrop-blur-lg bg-black/30 p-4">
                                        <p className="text-white text-base">{card.des}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile fallback - always stacked */}
                <div className="lg:hidden space-y-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="border border-[#C28C4B] rounded-xl p-6 flex flex-col gap-4 bg-white shadow-lg"
                        >
                            <div className="flex items-center gap-2">
                                <img src={bigLeave} alt="Leaf Icon" className="w-6 h-6 object-contain" />
                                <h3 className="text-xl font-semibold">{card.title}</h3>
                            </div>
                            <div className="relative rounded-lg overflow-hidden aspect-[16/9]">
                                <img src={card.image} alt={`${card.title} Image`} className="w-full h-full object-cover" />
                                <div className="absolute top-0 left-0 w-full backdrop-blur-md bg-black/20 p-4">
                                    <p className="text-white text-base">{card.des}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default WhyChooseUs;