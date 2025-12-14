import React, { useState } from 'react'
import faq1 from '../../assets/faq1.png'
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";


const Faq = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqData = [
        {
            id: 0,
            question: "Why is Sandalwood considered a high-value crop?",
            answer: "Sandalwood is used in perfumes, Ayurveda, spiritual products, and export markets. Its oil and wood prices increase every year. Arony Farm helps you grow Sandalwood for long-term wealth and legacy"
        },
        {
            id: 1,
            question: "Why choose Sandalwood farming with Arony Farm?",
            answer: "We follow scientific plantation spacing and companion host plants. Our monitored farm model ensures safe and healthy tree development. Arony Farm handles growth, protection, and farm upkeep for you."
        },
        {
            id: 2,
            question: "How long does Sandalwood take to mature?",
            answer: "Sandalwood trees generally mature in 15–20 years. Value increases every year as the wood gains density and oil. Arony Farm tracks growth to maximize final yield value."
        },
        {
            id: 3,
            question: "Is Sandalwood farming legal?",
            answer: "Yes, it is fully legal under state guidelines. Only harvesting and selling require permissions at maturity. Arony Farm manages legal compliance so the process stays smooth."
        },
        {
            id: 4,
            question: "Does Sandalwood require special host plants?",
            answer: "Yes, Sandalwood is semi-parasitic and needs nutrient host plants. Arony Farm plants verified companion varieties to boost root health. This ensures stronger growth and long-term resilience."
        },
        {
            id: 5,
            question: "Does Sandalwood farming require daily maintenance?",
            answer: "Maintenance is needed only in early stages. Arony Farm handles irrigation, trimming, and soil care efficiently. You don’t need to manage anything personally."
        },
        {
            id: 6,
            question: "What climate is ideal for Sandalwood?",
            answer: "Warm regions with moderate rainfall support its best growth. Hampi and surrounding Karnataka belts match these conditions naturally. Arony Farm selects suitable farmland zones for Sandalwood success."
        },
        {
            id: 7,
            question: "What returns can Sandalwood provide?",
            answer: "A matured tree can generate very high market value depending on size. The longer it grows, the more oil content increases. Arony Farm plans harvest timelines for maximum profitability."
        },
        {
            id: 8,
            question: "How many Sandalwood trees can be planted per acre?",
            answer: "Tree count varies based on spacing and companion planting. Arony Farm uses optimized plantation patterns for healthy development. This balance improves both quality and long-term return."
        },
        {
            id: 9,
            question: "Is Sandalwood prone to theft or damage?",
            answer: "Security and monitoring are important. Arony Farm provides fencing, supervision, and farm protection measures. Your plantation stays safe throughout its lifecycle."
        },
        {
            id: 10,
            question: "Can Sandalwood be combined with other crops?",
            answer: "Yes, especially with Mango or mixed organic crops. This increases early-stage land productivity. Arony Farm specializes in integrated Sandalwood farming models."
        },
        {
            id: 11,
            question: "Can I visit my Sandalwood farm anytime?",
            answer: "Yes, you are free to visit your land. Arony Farm projects are easily accessible for weekend trips. You can enjoy nature while watching your trees grow."
        },
        {
            id: 12,
            question: "Is Sandalwood farming suitable for beginners?",
            answer: "Yes, because Arony Farm manages the full agricultural process. No farming skill or time commitment is required from your side. Just own the land and enjoy long-term growth."
        },
        {
            id: 13,
            question: "What makes Sandalwood a good family legacy asset?",
            answer: "It appreciates continuously and holds emotional, cultural, and financial value. Your family benefits even decades later. Arony Farm supports this as a long-term wealth-building project."
        },
        {
            id: 14,
            question: "Why should I invest in Sandalwood farmland now?",
            answer: "Demand is rising while natural Sandalwood supply is decreasing. This creates a strong price advantage for future harvests. Arony Farm helps you secure this opportunity at the right time."
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