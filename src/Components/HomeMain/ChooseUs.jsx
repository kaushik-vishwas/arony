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
          style={{ backgroundImage: `url(${sideImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 top-0 md:top-1/2 left-0 md:left-10 translate-y-0 md:-translate-y-1/2 px-5 md:p-0 w-full md:max-w-[80%] text-white">
            <p className="text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed mb-6 md:mb-12 md:flex md:items-start">
              <span className="inline-block md:inline-block text-[36px] md:text-[56px] lg:text-[86px] relative md:bottom-2 leading-none mr-3 mb-4 md:mb-6">
                "
              </span>

              <span className="text-justify">
                Arony Farms was built on a simple belief that land can yield
                both prosperity and purpose. We're creating a new path where
                investors and farmers thrive together, sustainably.
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
          style={{ backgroundImage: `url(${sideImageTwo})` }}
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 top-0 md:top-1/2 left-0 md:left-10 translate-y-0 md:-translate-y-1/2 px-5 md:p-0 w-full md:max-w-[80%] text-white">
            <p className="text-[16px] md:text-[18px] lg:text-[24px] leading-relaxed mb-6 md:mb-12 md:flex md:items-start">
              <span className="inline-block md:inline-block text-[36px] md:text-[56px] lg:text-[86px] relative md:bottom-2 leading-none mr-3 mb-4 md:mb-6">
                "
              </span>

              <span className="text-justify">
                Arony Farms was built on a simple belief that land can yield
                both prosperity and purpose. We're creating a new path where
                investors and farmers thrive together, sustainably.
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