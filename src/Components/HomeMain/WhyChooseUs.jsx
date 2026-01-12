import React from 'react';
import { Heading, Description, Section, Badge, GreenButton } from "../utils";
import bigLeave from "../../assets/NewChanges/bigLeave.png";
import imageOne from "../../assets/NewChanges/chooseOne.jpg";
import imageTwo from "../../assets/NewChanges/chooseTwo.jpg";
import imageThree from "../../assets/NewChanges/chooseThree.jpg";
import imageFour from "../../assets/NewChanges/chooseFour.jpg";

const WhyChooseUs = () => {
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

  return (
    <>
      <style>{`
        /* Stacking Cards Animation Styles - WITH INITIAL GAPS */
        .stacking-cards-container {
          position: relative;
          height: auto;
          min-height: auto;
          overflow: visible;
          padding-top: 2rem;
        }

        .stacking-cards-list {
          list-style: none;
          padding: 0;
          margin: 0;
          position: relative;
          display: flex;
          flex-direction: column;
          padding-bottom: 4rem;
        }

        .stacking-card {
          position: sticky;
          padding-top: calc((var(--index) - 1) * 20px);
          transition: all 0.4s ease;
          opacity: 1;
          will-change: transform;
          margin-bottom: 0; /* Start with no negative margin */
        }

        .stacking-card:last-child {
          margin-bottom: 0;
        }

        .stacking-card-content {
          background: white;
          border: 2px solid #C28C4B;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 
            0 4px 20px rgba(194, 140, 75, 0.1),
            0 8px 40px rgba(194, 140, 75, 0.15),
            0 2px 4px rgba(0, 0, 0, 0.05);
          display: grid;
          grid-template-areas: "text img";
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 2.5rem;
          gap: 2.5rem;
          transform-origin: center top;
          transition: transform 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease, margin-bottom 0.4s ease;
          min-height: 280px;
          position: relative;
          z-index: calc(10 - var(--index));
        }

        .stacking-card:hover .stacking-card-content {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 
            0 8px 30px rgba(194, 140, 75, 0.2),
            0 12px 50px rgba(194, 140, 75, 0.2),
            0 4px 8px rgba(0, 0, 0, 0.1);
          z-index: 20;
        }

        .stacking-card-text {
          grid-area: text;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 1.5rem;
        }

        .stacking-card-image {
          grid-area: img;
          overflow: hidden;
          border-radius: 1rem;
          height: 240px;
          min-height: 240px;
          position: relative;
        }

        .stacking-card-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(194, 140, 75, 0.1), rgba(3, 89, 37, 0.1));
          z-index: 1;
          border-radius: 1rem;
        }

        .stacking-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          border-radius: 1rem;
        }

        .stacking-card:hover .stacking-card-image img {
          transform: scale(1.08);
        }

        /* Stacking effect on desktop - WITH INITIAL GAPS */
        @media (min-width: 1024px) {
          .stacking-cards-container {
            height: 200vh;
            min-height: 1600px;
            margin-top: 2rem;
          }
          
          .stacking-cards-list {
            height: 100%;
            gap: 0;
            padding-bottom: 0;
          }
          
          .stacking-card {
            top: calc(120px + (var(--index) - 1) * 80px); /* Increased spacing for gaps */
          }
          
          /* Initial state - smaller cards with gaps */
          .stacking-card:nth-child(1) .stacking-card-content {
            transform: scale(0.85) translateY(0);
            opacity: 0.8;
            margin-bottom: 40px; /* Gap below first card */
          }
          
          .stacking-card:nth-child(2) .stacking-card-content {
            transform: scale(0.88) translateY(0);
            opacity: 0.85;
            margin-bottom: 35px; /* Gap below second card */
          }
          
          .stacking-card:nth-child(3) .stacking-card-content {
            transform: scale(0.91) translateY(0);
            opacity: 0.9;
            margin-bottom: 30px; /* Gap below third card */
          }
          
          .stacking-card:nth-child(4) .stacking-card-content {
            transform: scale(0.94) translateY(0);
            opacity: 0.95;
            margin-bottom: 0; /* No gap below last card */
          }
          
          /* When scrolling - cards come together */
          .stacking-card.active .stacking-card-content {
            transform: scale(1) !important;
            opacity: 1 !important;
            margin-bottom: -80px !important; /* Negative margin to overlap when active */
            box-shadow: 
              0 10px 40px rgba(194, 140, 75, 0.2),
              0 15px 60px rgba(194, 140, 75, 0.25),
              0 5px 10px rgba(0, 0, 0, 0.1);
          }
          
          /* Top card gets special treatment when active */
          .stacking-card.active:nth-child(1) .stacking-card-content {
            margin-bottom: -70px;
          }
          
          .stacking-card.active:nth-child(2) .stacking-card-content {
            margin-bottom: -75px;
          }
          
          .stacking-card.active:nth-child(3) .stacking-card-content {
            margin-bottom: -80px;
          }
          
          .stacking-card.active:nth-child(4) .stacking-card-content {
            margin-bottom: -85px;
          }
          
          /* Adjust top positions for better visual gaps */
          .stacking-card:nth-child(1) {
            top: 120px;
          }
          
          .stacking-card:nth-child(2) {
            top: 200px; /* 80px gap from first card */
          }
          
          .stacking-card:nth-child(3) {
            top: 280px; /* 80px gap from second card */
          }
          
          .stacking-card:nth-child(4) {
            top: 360px; /* 80px gap from third card */
          }
          
          /* When cards become active, adjust top to bring them closer */
          .stacking-card.active:nth-child(1) {
            top: 120px;
          }
          
          .stacking-card.active:nth-child(2) {
            top: 160px; /* Reduced from 200px when active */
          }
          
          .stacking-card.active:nth-child(3) {
            top: 200px; /* Reduced from 280px when active */
          }
          
          .stacking-card.active:nth-child(4) {
            top: 240px; /* Reduced from 360px when active */
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .stacking-cards-container {
            height: auto;
            min-height: auto;
          }
          
          .stacking-cards-list {
            gap: 1.5rem; /* Normal gaps on mobile */
          }
          
          .stacking-card-content {
            grid-template-areas: "img" "text";
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 2rem;
            min-height: auto;
            margin-bottom: 0 !important;
          }
          
          .stacking-card-text {
            padding-right: 0;
          }
          
          .stacking-card-image {
            height: 220px;
            min-height: 220px;
          }
          
          .stacking-card {
            min-height: auto;
            position: relative;
            top: 0 !important;
            padding-top: 0;
            margin-bottom: 0 !important;
          }
          
          .stacking-cards-list {
            padding-bottom: 2rem;
          }
          
          .stacking-card-content {
            transform: none !important;
            opacity: 1 !important;
          }
        }

        @media (max-width: 768px) {
          .stacking-cards-list {
            gap: 1.5rem;
            padding-bottom: 1.5rem;
          }
          
          .stacking-card-content {
            padding: 1.75rem;
          }
          
          .stacking-card-image {
            height: 200px;
            min-height: 200px;
          }
        }

        @media (max-width: 480px) {
          .stacking-card-content {
            padding: 1.5rem;
          }
          
          .stacking-card-image {
            height: 180px;
            min-height: 180px;
          }
        }

        /* Card specific colors and enhancements */
        .stacking-card:nth-child(1) .stacking-card-content {
          border-color: #035925;
        }
        
        .stacking-card:nth-child(2) .stacking-card-content {
          border-color: #C28C4B;
        }
        
        .stacking-card:nth-child(3) .stacking-card-content {
          border-color: #035925;
        }
        
        .stacking-card:nth-child(4) .stacking-card-content {
          border-color: #C28C4B;
        }

        .leaf-icon {
          filter: drop-shadow(0 2px 4px rgba(3, 89, 37, 0.2));
        }

        /* Add spacing to section */
        .why-choose-section {
          padding-bottom: 4rem;
          position: relative;
        }

        @media (min-width: 1024px) {
          .why-choose-section {
            padding-bottom: 12rem;
          }
          
          .fixed-left-column {
            position: sticky;
            top: 120px;
            height: fit-content;
            align-self: flex-start;
            padding-bottom: 2rem;
          }
          
          .why-choose-section > div {
            align-items: start;
          }
        }
      `}</style>

      <Section className="why-choose-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Fixed */}
          <div className="fixed-left-column flex flex-col gap-4 sm:gap-6 md:gap-8">
            <Badge label="Why Choose us?" className="justify-start" />
            <Heading className="text-left">Difference We Create</Heading>
            <Description className="max-w-md text-left">
              At Arony Farms, we believe farmland is more than just an investment—it's a lifestyle.
              Our projects are carefully designed to blend natural beauty with modern comforts,
              creating spaces where you can relax, rejuvenate, and reconnect with nature.
              Each retreat is crafted to offer you a unique balance of leisure, sustainability,
              and long-term value.
            </Description>
            <GreenButton label="Know About Us" className="bg-[#035925] hover:bg-[#02431c] transition-colors" />
          </div>

          {/* Right Column - Stacking Cards */}
          <div className="stacking-cards-container">
            <ul className="stacking-cards-list">
              {cards.map((card, index) => (
                <li 
                  key={index} 
                  className="stacking-card"
                  style={{ 
                    '--index': index + 1
                  }}
                >
                  <div className="stacking-card-content">
                    <div className="stacking-card-text">
                      <div className="flex items-center gap-3 mb-4">
                        <img 
                          src={bigLeave} 
                          alt="Leaf Icon" 
                          className="w-7 h-7 object-contain leaf-icon" 
                        />
                        <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-[#035925] leading-tight">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        {card.des}
                      </p>
                    </div>
                    <figure className="stacking-card-image">
                      <img 
                        src={card.image} 
                        alt={`${card.title} Image`}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
};

export default WhyChooseUs;