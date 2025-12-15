import { Heading, Description, Section, Badge, GreenButton } from "../utils";
import bigLeave from "../../assets/NewChanges/bigLeave.png";
import imageOne from "../../assets/NewChanges/chooseOne.jpg";
import imageTwo from "../../assets/NewChanges/chooseTwo.jpg";
import imageThree from "../../assets/NewChanges/chooseThree.jpg";
import imageFour from "../../assets/NewChanges/chooseFour.jpg";
import { useEffect, useRef } from "react";

const WhyChooseUs = () => {
    const cardsContainerRef = useRef(null);

    const cards = [
        {
            title: "Legacy in Every Acre",
            image: imageOne,
            des: "Our projects are designed to grow in value over generations – preserving nature while building a timeless family asset."
        },
        {
            title: "Wellness at the Core",
            image: imageTwo,
            des: "Every project is curated with spaces for healing, relaxation, and mindful living – making farmland ownership a rejuvenating experience."
        },
        {
            title: "Hassle-Free Ownership",
            image: imageThree,
            des: "From plantations to property management, we take care of the hard work so you enjoy the rewards of your land without worries."
        },
        {
            title: "Future-Ready Investments",
            image: imageFour,
            des: "By combining modern design with sustainable practices, we ensure your farmland remains relevant, rewarding, and resilient for decades."
        }
    ];

    useEffect(() => {
        // Create GSAP animation script
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script.onload = () => {
            // Load ScrollTrigger plugin
            const scrollTriggerScript = document.createElement('script');
            scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
            scrollTriggerScript.onload = initializeAnimation;
            document.head.appendChild(scrollTriggerScript);
        };
        document.head.appendChild(script);

        function initializeAnimation() {
            if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardsContainerRef.current,
                    pin: true,
                    pinSpacing: true,
                    markers: false,
                    start: "top-=50px top",
                    end: "+=2000",
                    scrub: 1,
                }
            });

            // Animation for card 1
            tl.addLabel("card1");
            tl.to('.card1', {
                yPercent: 0,
                opacity: 1
            });

            // Animation for card 2
            tl.from('.card2', {
                yPercent: 75,
                opacity: 0,
            });
            tl.addLabel("card2");
            tl.to('.card1', {
                scale: 0.925,
                yPercent: -0.75,
                opacity: 1
            }, "-=0.3");
            tl.to('.card2', {
                yPercent: 0,
                opacity: 1
            });

            // Animation for card 3
            tl.from('.card3', {
                yPercent: 75,
                opacity: 0,
            });
            tl.addLabel("card3");
            tl.to('.card2', {
                scale: 0.95,
                yPercent: -0.5,
                opacity: 1
            }, "-=0.3");
            tl.to('.card3', {
                yPercent: 0,
                opacity: 1
            });

            // Animation for card 4
            tl.from('.card4', {
                yPercent: 75,
                opacity: 0,
            });
            tl.addLabel("card4");
            tl.to('.card3', {
                scale: 0.98,
                yPercent: -0.4,
                opacity: 1
            }, "-=0.3");
            tl.to('.card4', {
                yPercent: 0,
                opacity: 1
            });

            // Additional animations for scaling down previous cards
            tl.to('.card1', {
                scale: 0.925,
                yPercent: -1.5,
                opacity: 0.9
            }, "-=0.3");

            tl.to('.card2', {
                scale: 0.95,
                yPercent: -1.125,
                opacity: 0.9
            }, "-=0.3");

            tl.to('.card3', {
                scale: 0.98,
                yPercent: -0.85,
                opacity: 0.9
            }, "-=0.3");
        }

        return () => {
            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            }
        };
    }, []);

    return (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                    <Badge label="Why Choose us?" className="justify-start" />
                    <Heading className="text-left">Difference We Create</Heading>
                    <Description className="max-w-md text-left">
                        At Arony Farms, we believe farmland is more than just an investment—it's a lifestyle.
                        Our projects are carefully designed to blend natural beauty with modern comforts,
                        creating spaces where you can relax, rejuvenate, and reconnect with nature.
                        Each retreat is crafted to offer you a unique balance of leisure, sustainability,
                        and long-term value.
                    </Description>
                    <GreenButton label="Know About Us" className="bg-[#035925]" />
                </div>

                <div 
                    ref={cardsContainerRef}
                    className="cards"
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '70vh',
                        marginBottom: '90px'
                    }}
                >
                    {cards.map((card, index) => (
                        <div 
                            key={index}
                            className={`custom-card card${index + 1}`}
                            style={{
                                position: 'absolute',
                                width: '80%',
                                top: 0,
                                height: '70vh',
                                backgroundColor: '#f5f5f5',
                                color: '#333',
                                marginBottom: '50px',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '30px',
                                boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
                                opacity: index === 0 ? 1 : 0,
                                transform: index > 0 ? `translateY(${index * 30}px)` : 'none',
                                zIndex: index + 2,
                                padding: '24px',
                                overflow: 'hidden'
                            }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <img 
                                    src={bigLeave} 
                                    alt="Leaf Icon" 
                                    style={{ width: '32px', height: '32px', objectFit: 'contain' }} 
                                />
                                <h3 style={{ 
                                    fontSize: '1.75rem', 
                                    fontWeight: '600',
                                    color: '#035925'
                                }}>
                                    {card.title}
                                </h3>
                            </div>
                            <div style={{
                                position: 'relative',
                                flex: 1,
                                borderRadius: '20px',
                                overflow: 'hidden'
                            }}>
                                <img 
                                    src={card.image} 
                                    alt={`${card.title} Image`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    backdropFilter: 'blur(10px)',
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    padding: '20px',
                                    color: 'white'
                                }}>
                                    <p style={{ 
                                        fontSize: '1.125rem',
                                        lineHeight: '1.6',
                                        margin: 0
                                    }}>
                                        {card.des}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .cards {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 70vh;
                    margin-bottom: 90px;
                }

                .custom-card {
                    position: absolute;
                    width: 80%;
                    top: 0px;
                    height: 70vh;
                    background: white;
                    color: #333;
                    margin-bottom: 50px;
                    display: flex;
                    flex-direction: column;
                    border-radius: 30px;
                    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
                    overflow: hidden;
                    border: 1px solid #C28C4B;
                }

                .card2 {
                    top: 30px;
                }

                .card3 {
                    top: 60px;
                }

                .card4 {
                    top: 90px;
                }

                .opacity {
                    transition: 0.4s ease;
                    opacity: 0.6;
                }

                .scale {
                    transition: 0.4s ease;
                    width: 95%;
                }
            `}</style>
        </Section>
    );
};

export default WhyChooseUs;