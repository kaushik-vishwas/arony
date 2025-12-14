import React, { useState, useRef } from "react";
import { X, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import proGly1 from "../../assets/sandalwood1.jpg";
import proGly2 from "../../assets/sandalwood2.jpg";
import proGly3 from "../../assets/sandalwood3.jpg";
import proGly4 from "../../assets/sandalwood4.jpg";
import proGly5 from "../../assets/sandalwood5.jpg";
import leafgrn from "../../assets/leaf-grn.png";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const galleryImages = [
    { id: 1, src: proGly1, alt: "Mountain landscape with farm", size: "small" },
    { id: 2, src: proGly2, alt: "Green leafy vegetables", size: "large" },
    { id: 3, src: proGly3, alt: "Agricultural farm rows", size: "small" },
    { id: 4, src: proGly4, alt: "Rice paddy fields", size: "large" },
    { id: 5, src: proGly5, alt: "Forest plantation", size: "small" },
  ];

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "unset";
  };

  const showNextImage = () => {
    setSelectedIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : prev));
  };

  const showPrevImage = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
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
    <div className="w-full bg-gray-50 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
              <img src={leafgrn} alt="leaf icon" className="w-5 h-5 object-contain" />
              <span className="text-black text-[16px] font-medium">Gallery</span>
            </div>
            <h2 className="text-[34px] md:text-2xl lg:text-[34px] font-medium text-black mt-2">
              Project Gallery
            </h2>
          </div>

          {/* Navigation Buttons - Desktop */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                canScrollRight
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Gallery */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex items-center gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className={`flex-shrink-0 cursor-pointer group relative overflow-hidden ${
                  image.size === "large"
                    ? "w-[80vw] sm:w-[65vw] md:w-[450px] lg:w-[550px] h-60 md:h-[300px] lg:h-[380px]"
                    : "w-[65vw] sm:w-[50vw] md:w-[350px] lg:w-[420px] h-56 md:h-[280px] lg:h-[340px]"
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
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
          >
            <X className="w-6 h-6 text-gray-900" />
          </button>

          {/* Left Arrow */}
          {selectedIndex > 0 && (
            <button
              onClick={showPrevImage}
              className="absolute left-6 md:left-10 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Image */}
          <img
            src={galleryImages[selectedIndex].src}
            alt={galleryImages[selectedIndex].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />

          {/* Right Arrow */}
          {selectedIndex < galleryImages.length - 1 && (
            <button
              onClick={showNextImage}
              className="absolute right-6 md:right-10 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
