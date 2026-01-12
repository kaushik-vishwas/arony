import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useInViewTrigger, Section } from "../utils";



const Faq = () => {

    const [openFaq, setOpenFaq] = useState(0);

    const faqData = [
        {
            id: 0,
            question: "What is Arony Farms?",
            answer: "Arony Farm makes farmland ownership simple and stress-free. We provide plantation, irrigation, workforce and complete farm care. You own the land, Arony Farm manages the farming professionally. So you enjoy returns, peace, and nature without daily work."
        },
        {
            id: 1,
            question: "How does the investment process work?",
            answer: "Arony Farm has transparent documentation and land with clear titles. We offer verified agricultural land in prime farming belts. Our team is experienced in plantation & farm development. Trust, clarity, and long-term value define Arony Farm."
        },
        {
            id: 2,
            question: "Who manages the farming operations?",
            answer: "Arony Farm provides properly surveyed and legally approved farmland.You receive 100% clear title and registered ownership in your name.We maintain full transparency in plans, pricing and process. Your investment is secured with Arony Farm's managed model"
        },
        {
            id: 3,
            question: "What kind of crops or projects can I invest in?",
            answer: "No experience is required when you invest with Arony Farm.We take care of plantation, soil care, irrigation and security.You simply visit, enjoy your farm and watch it grow. Arony Farm handles the work, you enjoy the benefits"
        },
        {
            id: 4,
            question: "Will I really own the land?",
            answer: "Yes, all Arony Farm projects are farmhouse-ready.ou can design your weekend stay or vacation home easily.We guide with layout, utilities and construction support. Arony Farm makes your nature-living dream practical and simple"
        },
        {
            id: 5,
            question: "Can I visit my farmland?",
            answer: "Our expert plantation team monitors growth at every stage .Arony Farm manages watering, pruning, nutrition and protection.You receive progress updates from our farm supervision team. Your farm stays healthy and thriving under Arony Farm care."
        },
        {
            id: 6,
            question: "What kind of returns can I expect?",
            answer: "Yes, Arony Farm provides timely reports and plantation updates. You stay informed about crop growth, weather and maintenance. We ensure full visibility even if you live in the city. Your farm grows, and you stay connected at every step"
        },
        {
            id: 7,
            question: "Are there any maintenance or hidden fees?",
            answer: "Arony Farm combines experience, transparency and real farm expertise. We do not just sell land  we manage it responsibly.Your investment grows in value and greenery together  Arony Farm focuses on long-term sustainability, not just sales."
        }
    ];

    const faqTriggers = faqData.map(() => useInViewTrigger());

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    const leftColumnFaqs = faqData.slice(0, 4);
    const rightColumnFaqs = faqData.slice(4);

    return (
        <Section className='bg-[#FAFAFA]'>
            <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                    {leftColumnFaqs.map((faq, idx) => {

                        const globalIndex = idx;
                        const [ref, inView] = faqTriggers[globalIndex];

                        return (
                            <motion.div
                                key={faq.id}
                                ref={ref}
                                initial={{ y: 20, opacity: 0 }}
                                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: globalIndex * 0.02 }}
                                className={` ${openFaq === faq.id ? "bg-[#035925]" : "bg-white"} rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl`}
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                                >
                                    <span className={`${openFaq === faq.id ? "text-white" : "text-gray-900"} font-semibold text-[20px] transition-colors`}>
                                        {faq.question}
                                    </span>
                                    <span className={`${openFaq === faq.id ? "text-white rotate-45" : "text-gray-700"} text-2xl font-light transition-all duration-300 flex-shrink-0`}>
                                        +
                                    </span>
                                </button>

                                {openFaq === faq.id && (
                                    <div className="px-6 pb-5 animate-fadeIn">
                                        <p className="text-white text-[16px] font-normal leading-tight">{faq.answer}</p>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <div className="space-y-4">
                    {rightColumnFaqs.map((faq, idx) => {

                        const globalIndex = idx + 4;
                        const [ref, inView] = faqTriggers[globalIndex];

                        return (
                            <motion.div
                                key={faq.id}
                                ref={ref}
                                initial={{ y: 20, opacity: 0 }}
                                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: (globalIndex) * 0.08 }}
                                className={` ${openFaq === faq.id ? "bg-[#035925]" : "bg-white"} rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl`}
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                                >
                                    <span className={`${openFaq === faq.id ? "text-white" : "text-gray-900"} font-semibold text-base sm:text-lg transition-colors`}>
                                        {faq.question}
                                    </span>
                                    <span className={`${openFaq === faq.id ? "text-white rotate-45" : "text-gray-700"} text-2xl font-light transition-all duration-300 flex-shrink-0`}>
                                        +
                                    </span>
                                </button>

                                {openFaq === faq.id && (
                                    <div className="px-6 pb-5 animate-fadeIn">
                                        <p className="text-white/90 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default Faq;