import { useState, useEffect, useRef } from "react";
import testimonial1 from "../../assets/testi-thumb.png";
import testimonial2 from "../../assets/testi-thumb.png";
import testimonial3 from "../../assets/testi-thumb.png";
import testimonial4 from "../../assets/testi-thumb.png";
import testimonial5 from "../../assets/testi-thumb.png";
import testimonial6 from "../../assets/testi-thumb.png";
import { Heading, Section, SectionCol, Badge } from "../utils";

// Import a video file - add your video to assets and update this path
import testimonialVideo from "../../assets/testimony.mp4";

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [cardsPerView, setCardsPerView] = useState(3); // Default for desktop
    const autoSlideRef = useRef(null);
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    
    const testimonials = [
        {
            id: 1,
            image: testimonial1,
            name: "Amit Sharma",
            role: "Sandalwood Farm Owner",
            bgColor: "bg-blue-400",
            quote: "Arony Farms transformed my vision of sustainable farming into reality."
        },
        {
            id: 2,
            image: testimonial2,
            name: "Rajesh Kumar",
            role: "Organic Farm Owner",
            bgColor: "bg-green-600",
            quote: "The managed farmland approach gave me financial security and peace."
        },
        {
            id: 3,
            image: testimonial3,
            name: "Priya Patel",
            role: "Tea Plantation Owner",
            bgColor: "bg-amber-700",
            quote: "A legacy I can pass down to future generations."
        },
        {
            id: 4,
            image: testimonial4,
            name: "Vikram Singh",
            role: "Spice Farm Owner",
            bgColor: "bg-green-700",
            quote: "More than investment, it's a connection with nature."
        },
        {
            id: 5,
            image: testimonial5,
            name: "Neha Gupta",
            role: "Floriculture Owner",
            bgColor: "bg-purple-600",
            quote: "Sustainable living at its best with Arony Farms."
        },
        {
            id: 6,
            image: testimonial6,
            name: "Sunil Reddy",
            role: "Coffee Estate Owner",
            bgColor: "bg-red-600",
            quote: "Creating green legacy while building wealth."
        }
    ];

    // Handle responsive card count
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setCardsPerView(1); // Mobile
            } else if (width < 1024) {
                setCardsPerView(2); // Tablet
            } else {
                setCardsPerView(3); // Desktop
            }
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate total slides based on responsive cards per view
    const totalSlides = Math.max(0, testimonials.length - cardsPerView);

    // Handle video play
    const handlePlayVideo = () => {
        setShowVideoModal(true);
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
                setIsVideoPlaying(true);
            }
        }, 100);
    };

    // Handle video pause/close
    const handleCloseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            setIsVideoPlaying(false);
        }
        setShowVideoModal(false);
    };

    // Handle video ended
    const handleVideoEnded = () => {
        setIsVideoPlaying(false);
    };

    // Close modal on escape key
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape' && showVideoModal) {
                handleCloseVideo();
            }
        };

        window.addEventListener('keydown', handleEscKey);
        return () => window.removeEventListener('keydown', handleEscKey);
    }, [showVideoModal]);

    // Handle next slide
    const nextSlide = () => {
        setCurrentSlide(prev => {
            if (prev >= totalSlides) {
                return 0;
            } else {
                return prev + 1;
            }
        });
        resetAutoSlide();
    };

    // Handle previous slide
    const prevSlide = () => {
        setCurrentSlide(prev => {
            if (prev <= 0) {
                return totalSlides;
            } else {
                return prev - 1;
            }
        });
        resetAutoSlide();
    };

    // Handle slide to specific index
    const goToSlide = (index) => {
        if (index >= 0 && index <= totalSlides) {
            setCurrentSlide(index);
        }
        resetAutoSlide();
    };

    // Start auto-slide
    const startAutoSlide = () => {
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current);
        }
        
        autoSlideRef.current = setInterval(() => {
            if (!isPaused) {
                setCurrentSlide(prev => {
                    if (prev >= totalSlides) {
                        return 0;
                    } else {
                        return prev + 1;
                    }
                });
            }
        }, 3000);
    };

    // Reset auto-slide timer
    const resetAutoSlide = () => {
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current);
        }
        startAutoSlide();
    };

    // Pause auto-slide on hover
    const handleMouseEnter = () => {
        setIsPaused(true);
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current);
        }
    };

    // Resume auto-slide when mouse leaves
    const handleMouseLeave = () => {
        setIsPaused(false);
        startAutoSlide();
    };

    // Calculate transform based on cards per view
    const transformValue = `translateX(-${currentSlide * (100 / cardsPerView)}%)`;

    // Initialize auto-slide and recalculate on cardsPerView change
    useEffect(() => {
        startAutoSlide();
        
        return () => {
            if (autoSlideRef.current) {
                clearInterval(autoSlideRef.current);
            }
        };
    }, [isPaused, cardsPerView]);

    // Reset current slide when cardsPerView changes
    useEffect(() => {
        setCurrentSlide(0);
    }, [cardsPerView]);

    return (
        <>
            <Section>
                <SectionCol>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 lg:mb-8 gap-4 sm:gap-6 md:gap-8">
                        <div className='flex flex-col items-start justify-start gap-2'>
                            <Badge label="Watch Our Testimonials" className="justify-start" />
                            <Heading className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                Check out our testimonial <br className="hidden sm:block" /> videos, Trusted by landowners
                            </Heading>
                        </div>

                        <div className="flex items-center gap-3">
                            <button 
                                onClick={prevSlide}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            
                            <button 
                                onClick={nextSlide}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-colors"
                                aria-label="Next testimonial"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div 
                        className="relative overflow-hidden px-2 sm:px-4"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        ref={containerRef}
                    >
                        {/* Slides Container */}
                        <div className="overflow-visible">
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: transformValue }}
                            >
                                {testimonials.map((testimonial) => (
                                    <div 
                                        key={testimonial.id} 
                                        className="flex-shrink-0 px-2 sm:px-3"
                                        style={{ width: `${100 / cardsPerView}%` }}
                                    >
                                        <div className={`relative ${testimonial.bgColor} rounded-2xl sm:rounded-3xl overflow-hidden h-[280px] sm:h-[300px] lg:h-[320px] group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
                                            {/* Background Image */}
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>

                                            {/* Top Left - Quote Icon */}
                                            <button 
                                                className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform backdrop-blur-sm"
                                                aria-label="View quote"
                                            >
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                                </svg>
                                            </button>

                                            {/* Top Right - Play Indicator */}
                                            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>

                                            {/* Center - Play Button */}
                                            <button 
                                                onClick={handlePlayVideo}
                                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
                                                aria-label="Play testimonial video"
                                            >
                                                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-gray-900 ml-0.5 sm:ml-1 group-hover:text-green-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </button>

                                            {/* Bottom - User Info */}
                                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white">
                                                        <img
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            className="w-full h-full object-cover"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-white font-bold text-base sm:text-lg truncate">{testimonial.name}</h3>
                                                        <p className="text-white/90 text-xs sm:text-sm truncate">{testimonial.role}</p>
                                                    </div>
                                                </div>
                                                <p className="text-white/80 text-xs sm:text-sm mt-2 sm:mt-3 italic line-clamp-2">"{testimonial.quote}"</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        {totalSlides > 0 && (
                            <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8 px-4">
                                {Array.from({ length: totalSlides + 1 }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            index === currentSlide 
                                                ? 'w-6 sm:w-8 bg-green-600' 
                                                : 'w-2 sm:w-3 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                        aria-current={index === currentSlide ? "true" : "false"}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile touch instructions */}
                    <div className="mt-4 text-center sm:hidden">
                        <p className="text-sm text-gray-500">Swipe left or right to navigate</p>
                    </div>
                </SectionCol>
            </Section>

            {/* Video Modal */}
            {showVideoModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
                    <div className="relative w-full max-w-4xl mx-auto">
                        {/* Close Button */}
                        <button
                            onClick={handleCloseVideo}
                            className="absolute -top-10 sm:-top-12 right-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
                            aria-label="Close video"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Video Container */}
                        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-black">
                            <video
                                ref={videoRef}
                                className="w-full h-auto max-h-[60vh] sm:max-h-[80vh] object-contain"
                                controls
                                autoPlay
                                onEnded={handleVideoEnded}
                                onClick={(e) => e.stopPropagation()}
                                playsInline
                                controlsList="nodownload"
                            >
                                <source src={testimonialVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            
                            {/* Custom Controls Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                                    <div className="text-white">
                                        <h3 className="font-bold text-sm sm:text-base">Arony Farms Testimonials</h3>
                                        <p className="text-xs sm:text-sm text-white/80">Hear from our landowners</p>
                                    </div>
                                    <button
                                        onClick={handleCloseVideo}
                                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base w-full sm:w-auto"
                                    >
                                        Close Video
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Testimonials;