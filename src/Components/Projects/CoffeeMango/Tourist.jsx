import React, { useState, useRef } from 'react';
import { Section, Heading, Description, Badge } from '../../utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import tourist from "../../../assets/tourist.png";


const Tourist = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);

    const touristPlaces = [
        {
            id: 1,
            image: tourist,
            title: 'Devarayanadurga Hill Trek & Scenic Viewpoints',
            description:
                'A serene hilltop getaway surrounded by thick forests and ancient rock formations. The region offers peaceful sunrise viewpoints, heritage temples, and scenic trekking trails. Visitors often enjoy the cool breeze, panoramic valley views, and the calming ambience of untouched nature. A quiet escape ideal for slow travel and mindful exploration.',
        },
        {
            id: 2,
            image: tourist,
            title: 'Namada Chilume Natural Spring & Forest Trail',
            description:
                'A historic natural spring believed to originate from ancient legends, located deep inside the lush forest belt. The area includes well-maintained walking paths, vibrant biodiversity, and rich greenery throughout the year. The forest trail offers a refreshing nature experience with birdwatching spots and tranquil resting areas.',
        },
        {
            id: 3,
            image: tourist,
            title: 'Sri Bhoga Narasimha Swamy Temple & Heritage Zone',
            description:
                'A culturally significant temple surrounded by dense forests and traditional architecture. The destination blends spiritual ambience with scenic natural beauty, offering peaceful courtyards, stone pathways, and viewpoints. It attracts visitors seeking cultural insights, hillside serenity, and a calm, historic atmosphere.',
        },
    ];

    const scrollToIndex = (index) => {
        const container = scrollRef.current;
        if (!container) return;
        container.scrollTo({
            left: container.offsetWidth * index,
            behavior: "smooth",
        });
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % touristPlaces.length;
        setCurrentIndex(nextIndex);
        scrollToIndex(nextIndex);
    };

    const handlePrevious = () => {
        const prevIndex = currentIndex === 0 ? touristPlaces.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        scrollToIndex(prevIndex);
    };

    let scrollTimeout;

    const handleScroll = () => {
        const container = scrollRef.current;
        if (!container) return;

        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            const index = Math.round(container.scrollLeft / container.offsetWidth);
            setCurrentIndex(index);
        }, 150);
    };



    return (
        <Section className="bg-[#F3F3F3]">
            <div className="flex flex-col md:flex-row gap-10 md:gap-14 lg:gap-20">

                <div className="w-full md:w-1/2">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="relative overflow-x-auto scrollbar-hide h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] snap-x snap-mandatory whitespace-nowrap"
                        style={{ WebkitOverflowScrolling: "touch" }}
                    >
                        {touristPlaces.map((place) => (
                            <img
                                key={place.id}
                                src={place.image}
                                alt={place.title}
                                className="inline-block w-full h-full object-cover snap-center"
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col items-center justify-between gap-4 sm:gap-6">
                    <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col items-start gap-4 sm:gap-6">
                            <Badge label="Tourist" />
                            <Heading>Nearby Tourist Places</Heading>
                        </div>

                        <div className="hidden md:flex gap-2">
                            <button
                                onClick={handlePrevious}
                                className="w-10 h-10 rounded-full bg-[#4BA625] text-white hover:bg-green-700 flex items-center justify-center"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-10 h-10 rounded-full bg-[#4BA625] text-white hover:bg-green-700 flex items-center justify-center"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 sm:gap-4 md:gap-6 w-full">
                        <Heading>{touristPlaces[currentIndex].title}</Heading>
                        <Description>{touristPlaces[currentIndex].description}</Description>
                    </div>

                    <div className="flex justify-center gap-2 md:hidden mt-4">
                        {touristPlaces.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-[#4BA625]" : "bg-gray-300"}`}
                            ></div>
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default Tourist;