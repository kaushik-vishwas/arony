import React, { useState } from 'react'
import faq1 from '../../assets/faq1.png'
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";


const Faq = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqData = [
        {
            id: 0,
            question: "Why is Mango farming a good investment?",
            answer: "Mango orchards provide annual seasonal fruit income. Once matured, the trees continue yielding for decades. Arony Farm ensures healthy plantations for long-term steady returns."
        },
        {
            id: 1,
            question: "Why choose Mango farming with Arony Farm?",
            answer: "We plant premium commercial mango varieties with strong market demand. Arony Farm manages irrigation, pruning, nutrition, and pest control. You receive a healthy yield without handling farm work yourself."
        },
        {
            id: 2,
            question: "When will Mango trees start giving income?",
            answer: "Mango trees typically begin fruiting within 3 to 5 years. Yield increases every season as the orchard matures. Arony Farm monitors growth for consistent productivity."
        },
        {
            id: 3,
            question: "Which Mango varieties do you use?",
            answer: "We choose varieties based on taste, yield, and market value. Arony Farm sources grafted saplings from certified nurseries. This ensures quality fruit and strong orchard growth."
        },
        {
            id: 4,
            question: "Are Mango trees long-lasting?",
            answer: "Yes, mango trees can remain productive for 40+ years. This makes your farmland a family legacy asset. Arony Farm ensures the orchard stays healthy across seasons."
        },
        {
            id: 5,
            question: "What climate is ideal for Mango cultivation?",
            answer: "A warm climate with balanced sunlight and moderate rainfall is ideal. Regions like Hampi & Central Karnataka provide perfect conditions. Arony Farm develops farms only in climate-supported zones."
        },
        {
            id: 6,
            question: "Can Mango farming be combined with Sandalwood?",
            answer: "Yes, Mango + Sandalwood is a popular integrated model. It provides yearly fruit income and long-term tree asset value. Arony Farm designs mixed plantations for balanced returns."
        },
        {
            id: 7,
            question: "Does Mango require high maintenance?",
            answer: "Maintenance is moderate when managed properly. Arony Farm handles pruning, irrigation, and orchard health monitoring. Your orchard thrives even if you're not present."
        },
        {
            id: 8,
            question: "How is the fruit harvest handled?",
            answer: "Arony Farm manages harvesting, labor, and sorting. We also help connect to wholesale fruit buyers and markets. Your produce is handled professionally for best returns."
        },
        {
            id: 9,
            question: "Will I receive yearly income?",
            answer: "Yes, once the orchard begins fruiting, income is seasonal. The yield usually increases year by year. Arony Farm ensures stable output through proper care."
        },
        {
            id: 10,
            question: "How does Mango farmland help land value grow?",
            answer: "As the orchard matures, the land becomes more productive and sought-after. Organic orchard estates appreciate faster than empty land. Arony Farm ensures your land becomes a high-value green asset."
        },
        {
            id: 11,
            question: "Can I build a farmhouse inside the Mango farm?",
            answer: "Yes, many owners choose weekend or retirement farmhouses. Arony Farm provides layout planning and construction guidance. Your orchard becomes your personal nature retreat."
        },
        {
            id: 12,
            question: " Is Mango farming suitable for beginners?",
            answer: "Yes, especially under managed farmland models like ours. Arony Farm handles the farming  you enjoy the land. No experience or daily involvement is required."
        },
        {
            id: 13,
            question: "How are pests and diseases managed?",
            answer: "We use natural, organic-based plant care practices. Arony Farm emphasizes sustainable and chemical-reduced farming. This protects both soil health and fruit quality."
        },
        {
            id: 14,
            question: "Why invest in Mango farmland now?",
            answer: "Demand for premium mangoes increases every year in India & abroad. Land near agricultural belts is appreciating steadily. Arony Farm gives you income + nature + long-term asset growth."
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