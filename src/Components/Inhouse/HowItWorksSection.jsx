import React from "react";
import { FaSearch, FaVideo, FaFileAlt, FaExchangeAlt } from "react-icons/fa";

const steps = [
  {
    step: "01",
    title: "Request Details",
    desc: "Start by reaching out. Tell us your investment goals, and we will send you a curated portfolio.",
    icon: <FaSearch />,
  },
  {
    step: "02",
    title: "Virtual Meet",
    desc: "Hop on a quick Zoom or Google Meet call. We will walk you through the site layout.",
    icon: <FaVideo />,
  },
  {
    step: "03",
    title: "Legal Documentation",
    desc: "Lock in your investment with confidence. We handle all the paperwork.",
    icon: <FaFileAlt />,
  },
  {
    step: "04",
    title: "Complete Transaction",
    desc: "Finalize your investment. Once the payment is verified, we hand over the documents.",
    icon: <FaExchangeAlt />,
  },
];

const HowItWorksSection = () => {
  const primaryColor = "#345B4E";

  return (
    <section className="bg-white py-2">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span
            className="rounded-full px-6 py-2 text-sm font-medium bg-[#D0F24B]"
           
          >
            Simple Process
          </span>
        </div>

        {/* Heading */}
       <h2 
          className="text-center text-gray-900 mb-4"
          style={{
           fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '40px',
            lineHeight: '112.00000000000001%',
            letterSpacing: '0%',
            leadingTrim: 'none',
          }}
        >
          How it works
        </h2>

        <p className="font-poppins font-normal text-[20px] leading-[136%] tracking-normal text-center text-gray-600 mb-14">
  Four simple steps to start your farmland investment journey
</p>


        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-gray-200 bg-white p-8 text-left shadow-sm"
            >
              {/* Step number */}
              <div
                className="text-3xl font-semibold mb-6"
                style={{ color: primaryColor }}
              >
                {step.step}
              </div>

              {/* Icon */}
              <div
                className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl"
                style={{ backgroundColor: primaryColor, color: "white" }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 font-semibold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>

              {/* Divider line (except last) */}
              {index !== steps.length - 1 && (
                <span className="hidden md:block absolute right-[-24px] top-1/2 h-px w-8 bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
