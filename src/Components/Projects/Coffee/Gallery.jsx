import React, { useState, useRef } from 'react';
import { Section, SectionCol, Heading, Badge } from '../../utils';
import { X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import proGlyCoffee1 from "../../../assets/coffee11.png";
import proGlyCoffee2 from "../../../assets/coffee22.png";
import proGlyCoffee3 from "../../../assets/coffee33.png";
import proGlyCoffee4 from "../../../assets/coffee44.png";
import proGlyCoffee5 from "../../../assets/coffee55.png";
import proGlyCoffee6 from "../../../assets/coffee66.png";
import proGlyCoffee7 from "../../../assets/coffee77.png";
import proGlyCoffee8 from "../../../assets/coffee88.png";
import proGlyCoffee9 from "../../../assets/coffee99.png";
import proGlyCoffee10 from "../../../assets/coffee100.png";


const Gallery = () => {

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const galleryImages = [
        { id: 1, src: proGlyCoffee2, alt: 'Mountain landscape with farm', size: 'small' },
        { id: 2, src: proGlyCoffee1, alt: 'Green leafy vegetables', size: 'large' },
        { id: 3, src: proGlyCoffee3, alt: 'Agricultural farm rows', size: 'small' },
        { id: 4, src: proGlyCoffee4, alt: 'Rice paddy fields', size: 'large' },
        { id: 5, src: proGlyCoffee5, alt: 'Forest plantation', size: 'small' },
        { id: 6, src: proGlyCoffee6, alt: 'Forest plantation', size: 'large' },
        { id: 7, src: proGlyCoffee7, alt: 'Forest plantation', size: 'small' },
        { id: 8, src: proGlyCoffee8, alt: 'Forest plantation', size: 'large' },
        { id: 9, src: proGlyCoffee9, alt: 'Forest plantation', size: 'small' },
        { id: 10, src: proGlyCoffee10, alt: 'Forest plantation', size: 'large' }
    ];

    const openLightbox = (index) => {
        setSelectedImageIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
        document.body.style.overflow = 'unset';
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
    };

    const showNext = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
    };

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 400;
            const newScrollLeft =
                direction === 'left'
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
                <div className="flex items-center justify-between mb-6 md:mb-8">
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <Badge label="Gallery" />
                        <Heading>Project Gallery</Heading>
                    </div>

                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${canScrollLeft
                                ? 'bg-green-600 text-white hover:bg-green-700'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${canScrollRight
                                ? 'bg-green-600 text-white hover:bg-green-700'
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
                        className="flex items-center gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                onClick={() => openLightbox(index)}
                                className={`flex-shrink-0 cursor-pointer group relative overflow-hidden ${image.size === 'large'
                                    ? 'w-[80vw] sm:w-[65vw] md:w-[450px] lg:w-[550px] h-60 md:h-[300px] lg:h-[380px]'
                                    : 'w-[65vw] sm:w-[50vw] md:w-[350px] lg:w-[420px] h-56 md:h-[280px] lg:h-[340px]'
                                    }`}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                    <Eye className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionCol>

            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
                    >
                        <X className="w-6 h-6 text-gray-900" />
                    </button>

                    <button
                        onClick={showPrev}
                        className="absolute left-6 md:left-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all z-10"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <img
                        src={galleryImages[selectedImageIndex].src}
                        alt={galleryImages[selectedImageIndex].alt}
                        className="max-w-full max-h-full object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        onClick={showNext}
                        className="absolute right-6 md:right-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all z-10"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>
            )}
        </Section>
    );
};

export default Gallery;
