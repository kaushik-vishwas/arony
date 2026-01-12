import React, { useState, useRef } from 'react';
import { Section, SectionCol, Heading, Badge } from '../../utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Highlights3 from '../../../assets/Highlights3.png';
import hglt1 from "../../../assets/hglt1.png";


const Highlights = () => {

    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const highlights = [
        {
            id: 1,
            image: Highlights3,
            title: 'Prime Coffee Plantation Ownership',
            description: 'Enjoy legally compliant, freehold ownership of sandalwood plantation plots in the lush Karnataka region.',
        },
        {
            id: 2,
            image: Highlights3,
            title: 'Prime Coffee Plantation Ownership',
            description: 'Enjoy legally compliant, freehold ownership of sandalwood plantation plots in the lush Karnataka region.',
        },
    ];

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = container.offsetWidth * 0.8;
            const newScrollLeft = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(
                container.scrollLeft < container.scrollWidth - container.offsetWidth - 10
            );
        }
    };

    return (
        <Section>
            <SectionCol>

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8">
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <Badge label="Highlights" />
                        <Heading>Project Highlights</Heading>
                    </div>

                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${canScrollLeft
                                ? 'bg-[#4BA625] text-white hover:bg-green-700'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${canScrollRight
                                ? 'bg-[#4BA625] text-white hover:bg-green-700'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {highlights.map((highlight) => (
                            <div
                                key={highlight.id}
                                className="flex-shrink-0 w-[90vw] sm:w-[80vw] md:w-[calc(70%-12px)] lg:w-[calc(75%-16px)] xl:w-[calc(80%-16px)]"
                            >
                                <div className="hidden md:flex h-60 lg:h-72 xl:h-80 bg-white rounded-2xl overflow-hidden">
                                    <div className="relative w-1/2 overflow-hidden rounded-2xl">
                                        <img
                                            src={highlight.image}
                                            alt={highlight.title}
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>

                                    <div className="w-1/2 flex flex-col justify-end px-6 lg:px-8">
                                        <img
                                            src={hglt1}
                                            alt="leaf icon"
                                            className="w-8 h-8 mb-3"
                                        />
                                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                                            {highlight.title}
                                        </h3>
                                    </div>

                                </div>

                                <div className="hidden md:block bg-white px-6 lg:px-8 py-4 mt-2 w-1/2">
                                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                                        {highlight.description}
                                    </p>
                                </div>

                                <div className="md:hidden bg-white rounded-2xl overflow-hidden ">
                                    <div className="relative w-full h-40 rounded-2xl overflow-hidden">
                                        <img
                                            src={highlight.image}
                                            alt={highlight.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                            {highlight.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {highlight.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-2 md:hidden">
                        {highlights.map((_, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 rounded-full bg-gray-300"
                            ></div>
                        ))}
                    </div>
                </div>

            </SectionCol>
        </Section>
    );
};

export default Highlights;