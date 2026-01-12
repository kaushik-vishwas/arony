import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import leafgrn from "../../assets/leaf-grn.png";
import Highlights2 from '../../assets/Highlights2.png'
import hglt1 from "../../assets/hglt1.png";

const Highlights = () => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const highlights = [
        {
            id: 1,
            image: Highlights2,
            title: 'Prime Mango Plantation Ownership',
            description: 'Enjoy legally compliant, freehold ownership of sandalwood plantation plots in the lush Karnataka region.',
        },
        {
            id: 2,
            image: Highlights2,
            title: 'Prime Mango Plantation Ownership',
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
        <div className="w-full bg-white py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8">
                    {/* Left side - About us + Title stacked */}
                    <div className="flex flex-col items-start gap-3">
                        {/* About us pill */}
                        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                            <img
                                src={leafgrn}
                                alt="leaf icon"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-black text-[16px] font-medium">Highlights</span>
                        </div>

                        {/* Project Highlights heading */}
                        <h2 className="text-[34px] md:text-3xl lg:text-[34px] font-medium text-black">
                            Project Highlights
                        </h2>
                    </div>

                    {/* Navigation Buttons - Desktop */}
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


                {/* Scrollable Container */}
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
                                {/* Desktop Layout - Image 50% + Title 50% side by side */}
                                <div className="hidden md:flex h-60 lg:h-72 xl:h-80 bg-white rounded-2xl overflow-hidden">
                                    {/* Image Section - 50% */}
                                    <div className="relative w-1/2 overflow-hidden rounded-2xl">
                                        <img
                                            src={highlight.image}
                                            alt={highlight.title}
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>


                                    {/* Title Section - 50% */}
                                    <div className="w-1/2 flex flex-col justify-end px-6 lg:px-8">
                                        {/* Leaf icon above title */}
                                        <img
                                            src={hglt1}
                                            alt="leaf icon"
                                            className="w-8 h-8 mb-3"
                                        />

                                        {/* Title */}
                                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                                            {highlight.title}
                                        </h3>
                                    </div>

                                </div>


                                {/* Description below - Desktop */}
                                <div className="hidden md:block bg-white px-6 lg:px-8 py-4 mt-2 w-1/2">
                                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                                        {highlight.description}
                                    </p>
                                </div>


                                {/* Mobile Layout - Stacked */}
                                <div className="md:hidden bg-white rounded-2xl overflow-hidden ">
                                    <div className="relative w-full h-40 rounded-2xl overflow-hidden">
                                        <img
                                            src={highlight.image}
                                            alt={highlight.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* <div className="absolute top-4 right-4 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                                            <Check className="w-5 h-5 text-white" strokeWidth={3} />
                                        </div> */}
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

                    {/* Scroll Indicators - Mobile */}
                    <div className="flex justify-center gap-2 mt-4 md:hidden">
                        {highlights.map((_, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 rounded-full bg-gray-300"
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
};

export default Highlights;