import { Heading, Section, SectionCol } from "../utils";


const Apply = () => {

    return (
        <Section>
            <SectionCol>
                <div className="flex flex-col items-center w-full text-center gap-10 sm:gap-12 md:gap-16">

                    <Heading>How to Apply ?</Heading>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 md:gap-20 w-full max-w-6xl mx-auto">
                        <div className="relative flex flex-col items-center px-4">
                            <span className="absolute -top-8 sm:-top-10 md:-top-12 text-[80px] sm:text-[100px] md:text-[130px] font-light text-blue-100 select-none">1</span>
                            <h3 className="mt-14 sm:mt-16 md:mt-20 text-[18px] sm:text-[20px] font-semibold text-black z-10">Browse Open Positions</h3>
                            <p className="text-[14px] sm:text-[16px] text-[#444] mt-2 leading-relaxed max-w-xs">
                                Explore our current job openings and find a role that aligns with your skills and career goals.
                            </p>
                        </div>

                        <div className="relative flex flex-col items-center px-4">
                            <span className="absolute -top-8 sm:-top-10 md:-top-12 text-[80px] sm:text-[100px] md:text-[130px] font-light text-blue-100 select-none">2</span>
                            <h3 className="mt-14 sm:mt-16 md:mt-20 text-[18px] sm:text-[20px] font-semibold text-black z-10">Submit Your Application</h3>
                            <p className="text-[14px] sm:text-[16px] text-[#444] mt-2 leading-relaxed max-w-xs">
                                Apply directly through our website by submitting your resume, cover letter, and any relevant portfolios or work samples.
                            </p>
                        </div>

                        <div className="relative flex flex-col items-center px-4">
                            <span className="absolute -top-8 sm:-top-10 md:-top-12 text-[80px] sm:text-[100px] md:text-[130px] font-light text-blue-100 select-none">3</span>
                            <h3 className="mt-14 sm:mt-16 md:mt-20 text-[18px] sm:text-[20px] font-semibold text-black z-10">Interview Process</h3>
                            <p className="text-[14px] sm:text-[16px] text-[#444] mt-2 leading-relaxed max-w-xs">
                                If shortlisted, we’ll reach out to schedule interviews to get to know you better and assess your fit for the role.
                            </p>
                        </div>

                        <div className="relative flex flex-col items-center px-4">
                            <span className="absolute -top-8 sm:-top-10 md:-top-12 text-[80px] sm:text-[100px] md:text-[130px] font-light text-blue-100 select-none">4</span>
                            <h3 className="mt-14 sm:mt-16 md:mt-20 text-[18px] sm:text-[20px] font-semibold text-black z-10">Join the Team</h3>
                            <p className="text-[14px] sm:text-[16px] text-[#444] mt-2 leading-relaxed max-w-xs">
                                Once selected, you’ll receive an offer and details on the onboarding process to get you started on your journey with us.
                            </p>
                        </div>
                    </div>
                </div>

            </SectionCol>
        </Section>
    );
};

export default Apply;