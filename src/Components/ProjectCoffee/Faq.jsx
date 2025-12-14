import React, { useState } from 'react'
import faq1 from '../../assets/faq1.png'
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";


const Faq = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqData = [
        {
            id: 0,
            question: "Why choose Coffee with Silver Oak farming?",
            answer: "Coffee grows best under partial shade, and Silver Oak provides the perfect balance. This improves bean flavor and plant health. Arony Farm designs plantations for high yield and future value."
        },
        {
            id: 1,
            question: "Why is Sakaleshpur ideal for Coffee farming?",
            answer: "Sakaleshpur has cool weather, fertile soil, and high rainfall. These natural conditions produce rich, aromatic coffee beans. Arony Farm chooses estates only in climate-perfect regions."
        },
        {
            id: 2,
            question: "What is the role of Silver Oak in coffee farms?",
            answer: " Silver Oak provides essential shade and protects crops from heat. It also grows into high-value timber over time. Arony Farm ensures correct spacing and shade planning."
        },
        {
            id: 3,
            question: "When does coffee start yielding?",
            answer: "Coffee typically starts yielding in 2–3 years. Yields increase as the plantation matures. Arony Farm monitors growth for consistent yearly harvests."
        },
        {
            id: 4,
            question: "What income does Coffee farmland provide?",
            answer: "Coffee gives seasonal bean harvest income. Silver Oak provides long-term timber returns. Arony Farm offers a dual-income farming model."
        },
        {
            id: 5,
            question: "Does Coffee farming require daily involvement?",
            answer: "No daily work is required from the owner. Arony Farm handles irrigation, pruning, and maintenance. You simply enjoy your plantation during visits."
        },
        {
            id: 6,
            question: "How does Arony Farm maintain Coffee quality?",
            answer: "We follow organic care, pruning cycles, and moisture balance. Shade and soil nutrition are monitored regularly. Arony Farm ensures sustainable and premium production."
        },
        {
            id: 7,
            question: "Can I build a farmhouse in the Coffee estate?",
            answer: "Yes, the estate is ideal for weekends and nature stays. Arony Farm assists with layout and access planning. You enjoy peace and greenery whenever you visit."
        },
        {
            id: 8,
            question: "How are Coffee beans harvested and sold?",
            answer: "Arony Farm manages harvesting, drying, and market connections. We handle the post-harvest process professionally. You receive returns without managing operations."
        },
        {
            id: 9,
            question: "Does Coffee farming increase land value?",
            answer: "Yes, productive plantations appreciate faster than raw land. Coffee estates are always in lifestyle and investment demand. Arony Farm ensures your farm stays well maintained."
        },
        {
            id: 10,
            question: "Is Coffee farming eco-friendly?",
            answer: "Yes, Coffee + Silver Oak supports biodiversity and natural shade. It preserves soil and reduces heat impact. Arony Farm prioritizes eco-sustainable agriculture."
        },
        {
            id: 11,
            question: "How much rainfall is needed for Coffee crops?",
            answer: "Coffee thrives in strong and consistent rainfall regions. Sakaleshpur naturally meets this requirement. Arony Farm selects only rainfall-supported zones."
        },
        {
            id: 12,
            question: "Can Coffee farmland be passed to the family?",
            answer: "Yes, coffee estates are long-lasting and heritage-friendly. Your land becomes a generational wealth asset. Arony Farm supports long-term ownership transitions."
        },
        {
            id: 13,
            question: "Who is suitable for Coffee farmland?",
            answer: "Ideal for professionals, retirees, and nature lovers. You get peace, privacy, and reliable agricultural income. Arony Farm manages everything on your behalf."
        },
        {
            id: 14,
            question: "Why is Coffee + Silver Oak considered a smart investment?",
            answer: "It provides yearly harvest income and future timber value. Land value increases as the estate matures. Arony Farm turns farmland into a lifestyle and asset growth opportunity."
        },
    ];

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    // Split FAQs into two columns
    const leftColumnFaqs = faqData.slice(0, 7);
    const rightColumnFaqs = faqData.slice(8);

    return (
        <div className="bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Section with Image */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">

                    {/* Left - Text Content */}
                    <div className="flex flex-col justify-center">

                        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                            <img
                                src={leafgrn}
                                alt="leaf icon"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-black text-[16px] font-medium">FAQs</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-[70px] font-medium text-gray-900 leading-tight mb-6">
                            Everything you<br />
                            need to know.
                        </h2>

                        <p className="text-[#585858] text-[16px] font-normal leading-relaxed max-w-lg">
                            Explore answers to the most common queries we receive from farmers, partners, and innovators around the world.
                        </p>
                    </div>

                    {/* Right - Professional Image */}
                    <div className="relative mx-auto w-[95%] sm:w-[90%] lg:w-[85%] rounded-md overflow-hidden shadow-2xl h-64 sm:h-[360px] lg:h-[420px]">
                        <img
                            src={faq1}
                            alt="Professional"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center space-x-3">
                            <button className="backdrop-blur-md bg-white/20 text-white font-medium px-5 py-2.5 rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center space-x-2">
                                <img
                                    src={leaf}
                                    alt="leaf icon"
                                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                />
                                <span>Driven</span>
                            </button>

                            <button className="backdrop-blur-md bg-white/20 text-white font-medium px-5 py-2.5 rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center space-x-2">
                                <img
                                    src={leaf}
                                    alt="leaf icon"
                                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                />
                                <span>Rooted</span>
                            </button>

                            <button className="backdrop-blur-md bg-white/20 text-white font-medium px-5 py-2.5 rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center space-x-2">
                                <img
                                    src={leaf}
                                    alt="leaf icon"
                                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                />
                                <span>Impactful</span>
                            </button>
                        </div>

                    </div>
                </div>

                {/* FAQ Grid - Two Columns */}
                <div className="grid lg:grid-cols-2 gap-6">

                    {/* Left Column FAQs */}
                    <div className="space-y-4">
                        {leftColumnFaqs.map((faq) => (
                            <div
                                key={faq.id}
                                className={`
                  ${openFaq === faq.id ? 'bg-[#035925]' : 'bg-white'}
                  rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl
                `}
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                                >
                                    <span className={`
                    ${openFaq === faq.id ? 'text-white' : 'text-gray-900'}
                    font-semibold text-[20px] font-semibold transition-colors
                  `}>
                                        {faq.question}
                                    </span>
                                    <span className={`
                    ${openFaq === faq.id ? 'text-white rotate-45' : 'text-gray-700'}
                    text-2xl font-light transition-all duration-300 flex-shrink-0
                  `}>
                                        +
                                    </span>
                                </button>

                                {openFaq === faq.id && (
                                    <div className="px-6 pb-5 animate-fadeIn">
                                        <p className="text-white text-[16px]  font-normal leading-tight">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Column FAQs */}
                    <div className="space-y-4">
                        {rightColumnFaqs.map((faq) => (
                            <div
                                key={faq.id}
                                className={`
                  ${openFaq === faq.id ? 'bg-[#035925]' : 'bg-white'}
                  rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl
                `}
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                                >
                                    <span className={`
                    ${openFaq === faq.id ? 'text-white' : 'text-gray-900'}
                    font-semibold text-base sm:text-lg transition-colors
                  `}>
                                        {faq.question}
                                    </span>
                                    <span className={`
                    ${openFaq === faq.id ? 'text-white rotate-45' : 'text-gray-700'}
                    text-2xl font-light transition-all duration-300 flex-shrink-0
                  `}>
                                        +
                                    </span>
                                </button>

                                {openFaq === faq.id && (
                                    <div className="px-6 pb-5 animate-fadeIn">
                                        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
        </div>
    )
}

export default Faq