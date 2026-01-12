import { Section, SectionCol, Heading, Description, Badge } from "../../utils";


const Location = ({ headingOne, headingTwo }) => {

    const areaStats = [
        {
            value: '15 Acres',
            label: 'Total Land Area'
        },
        {
            value: '6000 sq.ft',
            label: 'Aroha & Amara'
        },
        {
            value: '2',
            label: 'Treehouses'
        },
        {
            value: '24/7',
            label: 'On-Site Team'
        }
    ];

    const plotData = [
        { configuration: "10 Guntas", sba: "10,890 Sq.Ft", price: "Unlock Price" },
        { configuration: "20 Guntas", sba: "21,789 Sq.Ft", price: "Unlock Price" }
    ];

    return (
        <div>
            <Section>
                <SectionCol className="mt-2 sm:mt-4 lg:mt-6 text-center">
                    <Heading className="w-full lg:w-[85%] m-auto">
                        {headingOne}
                    </Heading>

                    <Description className="w-full lg:w-[80%] m-auto">
                        Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.
                    </Description>

                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
                        <div className="bg-[#FFF6EC] rounded-2xl p-5 sm:p-6 text-center">
                            <p className="text-[#CF7A19] font-medium leading-tight text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
                                Own freehold land, not just a<br />share in a crop
                            </p>
                        </div>

                        <div className="bg-[#FFF6EC] rounded-2xl p-5 sm:p-6 text-center">
                            <p className="text-[#CF7A19] font-medium leading-tight text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
                                Long-term, high-value growth and<br />sustainability in one package
                            </p>
                        </div>
                    </div>
                </SectionCol>
            </Section>

            <Section>
                <div className="grid lg:grid-cols-6 gap-6 sm:gap-8 items-end">
                    <div className="lg:col-span-2 space-y-3 sm:space-y-4">
                        <Badge label="Location" />
                        <Heading>
                            {headingTwo}
                        </Heading>
                        <Description>
                            Nestled in Karnataka's sandalwood belt, the estate provides convenient access to highways and is a short drive from Bangalore International Airport, Lepakshi Temple, and key towns.
                        </Description>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="rounded-md overflow-hidden shadow-lg border border-gray-200 h-56 sm:h-64 md:h-72 lg:h-60">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56658120546!2d77.6309395!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Sandalwood Farm Location"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-[#F4F4F4]">
                <SectionCol>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="space-y-4 lg:flex-1 lg:max-w-[45%]">
                            <Badge label="Total Area & Layout" />
                            <Heading className="lg:leading-tight">
                                Total Area and layout
                            </Heading>
                        </div>

                        <div className="lg:flex-1 lg:max-w-[55%]">
                            <Description>
                                The estate is spread over several acres, thoughtfully divided into PL 20, and
                                30 gunta plots. Each plot is demarcated with internal roads, drainage, and prime
                                plantation zones.
                            </Description>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 sm:gap-6 mt-6">
                        {areaStats && areaStats.map((stat, index) => (
                            <div
                                key={index}
                                className="w-[100%] sm:w-[48%] lg:w-[23%] rounded-2xl p-6 transition-all duration-300 
                               bg-gradient-to-br from-[#4CA625] to-[#8CA625] 
                               hover:from-[#3F8F20] hover:to-[#7EB824]"
                            >
                                <div className="space-y-2 text-start">
                                    <h3 className="text-[28px] sm:text-3xl font-semibold text-white">
                                        {stat.value}
                                    </h3>
                                    <p className="text-white text-[18px] sm:text-base">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionCol>
            </Section>

            <Section>
                <SectionCol className="lg:flex-row lg:items-end">
                    <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 w-full lg:w-[40%]">
                        <Badge label="Configurations" />
                        <Heading>
                            Tailored Plot Sizes to Match Your Investment Goals
                        </Heading>
                        <Description>
                            Arony Sandalwood Farm offers flexible plot size options designed
                            to accommodate both first-time investors and seasoned agroforestry
                            enthusiasts. Choose the ideal plot size that fits your investment
                            scale and long-term vision.
                        </Description>
                    </div>

                    <div className="w-full lg:w-[60%]">
                        <div className="shadow-lg overflow-hidden border border-[#CF7A19] rounded-md">
                            <div className="grid grid-cols-3 bg-[#FFF6EC] border-b-2 border-[#CF7A19]">
                                <div className="px-2 sm:px-4 py-3 text-center">
                                    <span className="text-[#CF7A19] font-bold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                                        Configuration
                                    </span>
                                </div>

                                <div className="px-2 sm:px-4 py-3 text-center border-l-2 border-[#CF7A19]">
                                    <span className="text-[#CF7A19] font-bold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                                        SBA (Sq. Ft)
                                    </span>
                                </div>

                                <div className="px-2 sm:px-4 py-3 text-center border-l-2 border-[#CF7A19]">
                                    <span className="text-[#CF7A19] font-bold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                                        Price
                                    </span>
                                </div>
                            </div>

                            {plotData.map((plot, index) => (
                                <div
                                    key={index}
                                    className={`grid grid-cols-3 ${index !== plotData.length - 1 ? "border-b border-[#CF7A19]" : ""
                                        }`}
                                >
                                    <div className="px-2 sm:px-4 py-4 text-center">
                                        <span className="text-black font-medium text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                                            {plot.configuration}
                                        </span>
                                    </div>

                                    <div className="px-2 sm:px-4 py-4 text-center border-l-2 border-[#CF7A19]">
                                        <span className="text-black font-medium text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                                            {plot.sba}
                                        </span>
                                    </div>

                                    <div className="px-2 sm:px-4 py-4 text-center border-l-2 border-[#CF7A19]">
                                        <button className="text-black underline hover:text-[#a55f14] font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] transition-colors">
                                            {plot.price}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionCol>
            </Section>
        </div>
    );
};

export default Location;