import { GreenButton } from "../utils";

import coFounder from "../../assets/NewChanges/co-founder.jpg";
import sideImage from "../../assets/NewChanges/founder-side-image.jpg";
import coFounderTwo from "../../assets/NewChanges/co-founder-two.jpg";
import sideImageTwo from "../../assets/NewChanges/founder-two-side-image.jpg";

const ChooseUs = () => {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-10">
      <div className="w-full flex flex-col md:flex-row pl-0 lg:pl-10">
        <div className="md:w-[40%] w-full md:aspect-[4/3]">
          <img
            src={coFounder}
            alt="Raj"
            className="w-full h-full object-cover md:rounded-l-3xl"
          />
        </div>

        <div
          className="relative md:w-[60%] w-full md:aspect-[4/3] bg-cover bg-center p-6 md:p-0 lg-p-0"
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 top-0 md:top-1/2 left-0 md:left-10 translate-y-0 md:-translate-y-1/2 px-5 md:p-0 w-full md:max-w-[80%] text-white">
            <p className="text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed mb-6 md:mb-12 md:flex md:items-start">
              <span className="inline-block md:inline-block text-[36px] md:text-[56px] lg:text-[86px] relative md:bottom-2 leading-none mr-3 mb-4 md:mb-6">
                "
              </span>

              <span className="text-justify">
               We started Arony to protect the land, grow responsibly, and help people invest in nature without harming it. Arony exists to prove that farming can be profitable while still respecting soil, water, and the environment it’s a commitment to nurture the land and pass it on healthier to the next generation My vision is to create farmlands that breathe, grow, and sustain life—while offering meaningful, long-term value to our investors.
              </span>
            </p>

            <div className="mb-4 md:mb-6">
              <h2 className="text-[22px] md:text-[32px] font-semibold">Raj</h2>
              <p className="text-[16px] md:text-[18px] opacity-90">Founder</p>
            </div>

            <GreenButton
              label="Meet our team"
              className="backdrop-blur-md bg-white/20"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row-reverse pr-0 lg:pr-10">
        <div className="md:w-[40%] w-full md:aspect-[4/3]">
          <img
            src={coFounderTwo}
            alt="Shwetha"
            className="w-full h-full object-cover md:rounded-r-3xl"
          />
        </div>

        <div
          className="relative md:w-[60%] w-full md:aspect-[4/3] bg-cover bg-center p-6 md:p-0 lg-p-0"
         
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 top-0 md:top-1/2 left-0 md:left-10 translate-y-0 md:-translate-y-1/2 px-5 md:p-0 w-full md:max-w-[80%] text-white">
            <p className="text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed mb-6 md:mb-12 md:flex md:items-start">
              <span className="inline-block md:inline-block text-[36px] md:text-[56px] lg:text-[86px] relative md:bottom-2 leading-none mr-3 mb-4 md:mb-6">
                "
              </span>

              <span className="text-justify">
               We started Arony to help people reconnect with nature while building long-term, secure wealth through agriculture
Our goal is to make farmland ownership simple, sustainable, and rewarding—so investors can grow with the land, not worry about managing it For me, agriculture is a legacy. Through managed farmland, we create value for investors, farmers, and the environment together
              </span>
            </p>

            <div className="mb-4 md:mb-6">
              <h2 className="text-[22px] md:text-[32px] font-semibold">
                Shwetha R Gowda
              </h2>
              <p className="text-[16px] md:text-[18px] opacity-90">Co-Founder</p>
            </div>

            <GreenButton
              label="Meet our team"
              className="backdrop-blur-md bg-white/20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;