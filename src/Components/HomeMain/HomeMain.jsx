import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInViewTrigger } from "../utils";
import leaf from "../../assets/leaf.png";
import arrow from "../../assets/arrow.png";
import img1 from "../../assets/layer-main.png";
import img2 from "../../assets/ProjectViewMain2.png";
import img3 from "../../assets/ProjectViewMain1.png";

const HomeMain = () => {
  const [leftRef, leftInView] = useInViewTrigger();
  const [rightRef, rightInView] = useInViewTrigger();
  
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideContainerRef = useRef(null);
  
  // Calculate slide width based on container
  const getSlideWidth = () => {
    if (slideContainerRef.current) {
      return slideContainerRef.current.offsetWidth;
    }
    return 100; // fallback
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      if (currentIndex === images.length - 1) {
        // When at last slide, animate out and then reset
        setTimeout(() => {
          setCurrentIndex(0);
          setIsAnimating(false);
        }, 1000);
      }
      
      setCurrentIndex((prev) => {
        if (prev === images.length - 1) {
          return prev; // Will be reset by timeout
        }
        return prev + 1;
      });
      
      if (currentIndex < images.length - 1) {
        setTimeout(() => setIsAnimating(false), 1000);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);
  
  return (
    <section
      className="
        relative 
        w-full 
        overflow-hidden
        font-instrument 
        min-h-[90vh]        
        md:h-screen        
        flex 
        items-center
      "
    >
      {/* Fixed container for slides */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={slideContainerRef}
          className="relative w-full h-full"
        >
          {/* Slides container */}
          <div className="absolute inset-0 flex">
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${img})`,
                  left: `${index * 100}%`,
                  x: `${-currentIndex * 100}%`
                }}
                animate={{
                  x: `${-currentIndex * 100}%`
                }}
                transition={{
                  duration: isAnimating ? 1 : 0,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content Wrapper - Rest of your content remains exactly the same */}
      <div
        className="relative z-10 flex flex-col md:flex-row justify-between md:justify-end items-start w-full 
          px-6 md:px-16 text-white pt-28 pb-12 md:py-0 md:pb-24 lg:pt-96"
      >
        {/* LEFT SECTION */}
        <div className="md:w-1/2 order-2 md:order-1">
          <div className="overflow-hidden">
            <motion.div
              ref={leftRef}
              initial={{ x: -120, opacity: 0 }}
              animate={leftInView ? { x: 0, opacity: 1 } : { x: -120, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col justify-end items-start gap-6 pb-10 md:pb-20 text-center md:text-left"
              style={{ pointerEvents: leftInView ? "auto" : "none" }}
            >
              {/* Badges */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-[14px] md:text-[16px] font-medium">
                {["Sustainable", "Transparent", "Impactful"].map((item, idx) => (
                  <span key={idx} className="flex items-center gap-2 px-3 py-1">
                    <img src={leaf} alt="leaf" className="w-3 h-5" />
                    {item}
                  </span>
                ))}
              </div>
              
              <h1 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-medium max-w-2xl leading-snug md:leading-tight text-center md:text-left mx-auto md:mx-0">
                Own the Land. <br /> We Farm It Naturally.
              </h1>
              
              {/* CTA */}
              <button className="flex items-center justify-center md:justify-start gap-3 md:gap-6 text-white text-[14px] md:text-[16px] font-normal border-b border-white pb-1 hover:gap-4 transition-all duration-300 mx-auto md:mx-0">
                Start your farmland journey today
                <img src={arrow} alt="arrow" className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
        
        {/* RIGHT SECTION */}
        <div className="md:w-1/2 order-1 md:order-2">
          <div className="overflow-hidden">
            <motion.div
              ref={rightRef}
              initial={{ x: 120, opacity: 0 }}
              animate={rightInView ? { x: 0, opacity: 1 } : { x: 120, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col justify-end text-center md:text-right"
              style={{ pointerEvents: rightInView ? "auto" : "none" }}
            >
              <p
                className="text-[20px] sm:text-[26px] md:text-[34px] lg:text-[44px] font-medium max-w-xl mb-6 md:mb-16 mx-auto md:mx-0"
                style={{ lineHeight: "1.1" }}
              >
                Arony Farms makes <br /> farmland ownership effortless, transparent, and rewarding.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;