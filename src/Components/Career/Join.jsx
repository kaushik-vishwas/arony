import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heading, Description, Section, SectionCol } from "../utils";
import careerMain from '../../assets/NewChanges/careerMain.png';
// Import additional images for slideshow
import slide1 from '../../assets/career1.jpg';
import slide2 from '../../assets/career2.jpg';
import slide3 from '../../assets/career3.jpg';
import slide4 from '../../assets/career4.jpg';


const Join = () => {
  const images = [slide1, slide2, slide3, slide4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideInterval = useRef(null);

  // Auto slide every 3 seconds
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    
    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    
    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <Section>
      <SectionCol>
        <div className="flex flex-col items-center w-full text-center gap-6 sm:gap-8 md:gap-10">
          
          {/* Slideshow Container */}
          <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-lg">
            {/* Slides Container */}
            <div className="relative h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[460px]">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  initial={false}
                  animate={{
                    x: `${-currentIndex * 100}%`,
                  }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${index * 100}%`,
                  }}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Optional: Dark overlay for better text contrast */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-10"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-10"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
            <Heading>
              Join Our Team and<br />Shape the Future
            </Heading>

            <Description>
              At Arony Farms, we're not just building a company—we're building a community of innovators,
              creators, and change-makers. If you're passionate, driven, and ready to make an impact, we'd
              love to have you on board. Explore exciting opportunities, grow your career, and contribute to
              something bigger than yourself.
            </Description>
          </div>
        </div>
      </SectionCol>
    </Section>
  );
};

export default Join;