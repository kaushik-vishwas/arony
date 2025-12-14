import { Section, SectionCol, Badge, Heading } from "../../utils";


const Benefits = () => {

    const benefits = [
        { text: 'Annualized return potential of 20–25% at maturity, driven by global demand and short supply' },
        { text: 'Agricultural income is tax-exempt under current Indian law' },
        { text: 'Recession-proof, inflation-hedged tangible asset, outperforming most markets' },
        { text: 'Government-facilitated sales, minimal marketing risk' },
        { text: 'Promotes biodiversity and landscape resilience' },
        { text: 'Excellent carbon offset/ESG investment' },
        { text: 'Passive income, weekend retreat potential, and connection with nature' },
        { text: 'Supports rural employment and ecosystem conservation' }
    ];

    return (
        <Section className="bg-[#EEFFE7]">
            <SectionCol>

                <Badge label="Benefits" />
                <Heading>Investment Benefits</Heading>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 text-left"
                        >
                            <div className="w-8 h-8 bg-[#4BA625] rounded-full flex items-center justify-center flex-shrink-0">
                                <svg
                                    className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={3}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>

                            <p className="text-[#1E1E1E] text-[15px] sm:text-[17px] lg:text-[18px] font-medium leading-normal text-[#1E1E1E] leading-normal">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>

            </SectionCol>
        </Section>
    );
};

export default Benefits;
