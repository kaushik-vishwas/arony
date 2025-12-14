import { useState, useEffect, useRef } from "react";
import testimonial1 from "../../assets/Man.png";
import testimonial2 from "../../assets/Man.png";
import testimonial3 from "../../assets/Man.png";
import testimonial4 from "../../assets/Man.png";
import testimonial5 from "../../assets/Man.png";
import testimonial6 from "../../assets/Man.png";
import { Heading, Section, SectionCol, Badge } from "../utils";

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoSlideRef = useRef(null);
    
    const testimonials = [
        {
            id: 1,
            image: testimonial1,
            name: "Amit Sharma",
            role: "Sandalwood Farm Owner",
            bgColor: "bg-blue-400"
        },
        {
            id: 2,
            image: testimonial2,
            name: "Rajesh Kumar",
            role: "Organic Farm Owner",
            bgColor: "bg-green-600"
        },
        {
            id: 3,
            image: testimonial3,
            name: "Priya Patel",
            role: "Tea Plantation Owner",
            bgColor: "bg-amber-700"
        },
        {
            id: 4,
            image: testimonial4,
            name: "Vikram Singh",
            role: "Spice Farm Owner",
            bgColor: "bg-green-700"
        },
        {
            id: 5,
            image: testimonial5,
            name: "Neha Gupta",
            role: "Floriculture Owner",
            bgColor: "bg-purple-600"
        },
        {
            id: 6,
            image: testimonial6,
            name: "Sunil Reddy",
            role: "Coffee Estate Owner",
            bgColor: "bg-red-600"
        }
    ];

    // Calculate total slides based on 3 cards per view
    const totalSlides = Math.max(0, testimonials.length - 3); // Show 3 cards at a time

    // Handle next slide with infinite loop
    const nextSlide = () => {
        setCurrentSlide(prev => {
            if (prev >= totalSlides) {
                return 0; // Loop back to first slide
            } else {
                return prev + 1;
            }
        });
        resetAutoSlide();
    };

    // Handle previous slide with infinite loop
    const prevSlide = () => {
        setCurrentSlide(prev => {
            if (prev <= 0) {
                return totalSlides; // Loop to last slide
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
                        return 0; // Loop back to first slide
                    } else {
                        return prev + 1;
                    }
                });
            }
        }, 3000); // 3 second interval
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

    // Calculate transform for 3-card view
    const transformValue = `translateX(-${currentSlide * (100 / 3)}%)`;

    // Initialize auto-slide on component mount
    useEffect(() => {
        startAutoSlide();
        
        // Cleanup on unmount
        return () => {
            if (autoSlideRef.current) {
                clearInterval(autoSlideRef.current);
            }
        };
    }, [isPaused]); // Re-run when isPaused changes

    return (
        <Section>
            <SectionCol>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 lg:mb-8 gap-4 sm:gap-6 md:gap-8">
                    <div className='flex flex-col items-start justify-start gap-2'>
                        <Badge label="Watch Our Testimonials" className="justify-start" />
                        <Heading>Check out our testimonial <br /> videos, Trusted by landowners</Heading>
                    </div>

                    <div className="flex items-center gap-3">
                        <button 
                            onClick={prevSlide}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        <button 
                            onClick={nextSlide}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div 
                    className="relative overflow-hidden px-4"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
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
                                    className="flex-shrink-0 w-1/3 px-3"
                                >
                                    <div className={`relative ${testimonial.bgColor} rounded-3xl overflow-hidden h-[300px] group cursor-pointer transition-transform duration-300 hover:scale-[1.02]`}>
                                        {/* Background Image */}
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>

                                        {/* Top Left - Expand Button */}
                                        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                            </svg>
                                        </button>

                                        {/* Top Right - Sound Button */}
                                        <button className="absolute top-4 right-4 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                                            </svg>
                                        </button>

                                        {/* Center - Play Button */}
                                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                                            <svg className="w-7 h-7 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </button>

                                        {/* Bottom - User Info */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                                                    <p className="text-white/90 text-sm">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center items-center gap-2 mt-8">
                        {Array.from({ length: totalSlides + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'w-8 bg-green-600' 
                                        : 'w-3 bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to slide group ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </SectionCol>
        </Section>
    );
};

export default Testimonials;