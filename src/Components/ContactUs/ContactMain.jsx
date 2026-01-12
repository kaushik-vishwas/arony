import React from "react";
import contactmain from "../../assets/contactMain.png";
import leafgrn from "../../assets/leaf-grn.png";


const ContactMain = () => {
  return (
    <section className="relative h-[70vh] sm:h-[65vh] md:h-[80vh] lg:h-screen w-full bg-cover bg-center font-['Instrument_Sans']">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${contactmain})`,
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="flex items-center gap-2 rounded-full px-4 py-2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white transition-colors w-fit mx-auto">
          <img src={leafgrn} alt="leaf icon" className="w-5 h-5 object-contain" />
          <span className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium">
            Contact us
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-[26px] sm:text-[34px] md:text-[50px] lg:text-[70px] font-medium text-white leading-tight max-w-5xl pt-6 mb-3">
          Let's Cultivate Your
          <br />
          Investment Together
        </h1>

        {/* Subtext */}
        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white max-w-2xl leading-relaxed">
          Reach out to us for project details, site visits, or investment
          <br />
          consultations and let’s grow something meaningful together.
        </p>
      </div>
    </section>
  );
};

export default ContactMain;
