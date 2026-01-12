import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import crops1 from "../../assets/crops1.png";
import crops2 from "../../assets/crops2.png";
import crops3 from "../../assets/sandletree.jpg";
import crops4 from "../../assets/crops3.png";

const CropsWeSpecialize = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);
  const navigate = useNavigate(); // Add this hook
  
  const slides = [
    {
      id: 1,
      image: crops1,
      alt: "Chikku",
      highlighted: false
    },
    {
      id: 2,
      image: crops2,
      alt: "Guava",
      highlighted: false
    },
    {
      id: 3,
      image: crops3,
      alt: "White Sandalwood",
      title: "White Sandalwood",
      description: "Nursery-grown plants",
      details: "Exponential long-term returns",
      highlighted: true
    },
    {
      id: 4,
      image: crops4,
      alt: "Mango",
      highlighted: false
    },
  ];

  const slidesToShow = 3;
  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlide + slidesToShow >= totalSlides) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides - slidesToShow);
    } else {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (index) => {
    if (index <= totalSlides - slidesToShow) {
      setCurrentSlide(index);
    }
  };

  // Handle View Details click
  const handleViewDetails = () => {
    // Navigate to the sandalwood host plants page
    navigate("/sandalwood-host-plants");
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const startAutoSlide = () => {
      slideInterval.current = setInterval(() => {
        nextSlide();
      }, 3000);
    };

    startAutoSlide();

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [currentSlide]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const handleMouseLeave = () => {
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  // Get the visible slides based on current position
  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < slidesToShow; i++) {
      const slideIndex = (currentSlide + i) % totalSlides;
      visibleSlides.push(slides[slideIndex]);
    }
    return visibleSlides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="bg-lime-300 text-green-900 px-5 py-2 rounded-full text-sm font-medium">
            Our Specialization
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-[40px] font-normal leading-[112%] tracking-[0%] text-center text-gray-900 mb-3"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Crops We Specialize In
        </h2>

        {/* Sub text */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          Each crop is carefully selected and nurtured in our nursery for optimal
          growth and yield
        </p>

        {/* Slider Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Slides Container */}
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {visibleSlides.map((slide, index) => (
                  <div 
                    key={`${slide.id}-${currentSlide}`} 
                    className="transition-all duration-500"
                  >
                    <div className="relative rounded-3xl overflow-hidden h-[300px]">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                      />
                      
                      {slide.highlighted ? (
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                          <h3 className="text-white text-xl font-semibold mb-2">
                            {slide.title}
                          </h3>
                          <p className="text-white text-sm mb-1">
                            {slide.description}
                          </p>
                          <p className="text-white text-sm mb-4">
                            {slide.details}
                          </p>
                          <button 
                            onClick={handleViewDetails} // Add onClick handler
                            className="bg-lime-300 text-green-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-lime-400 transition-colors"
                          >
                            View Details
                          </button>
                        </div>
                      ) : (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-white text-lg font-semibold mb-1">
                            {slide.title}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {slide.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides - slidesToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? "bg-lime-500 w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CropsWeSpecialize;