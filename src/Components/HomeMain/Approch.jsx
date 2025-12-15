import { Heading, Description, Section, Badge, GreenButton } from "../utils";
import approach1 from "../../assets/approach1.png";
import approach2 from "../../assets/approach2.png";
import approach3 from "../../assets/approach3.png";

const Approach = () => {
  const features = [
    {
      title: "Precision farming",
      description:
        "We use data-driven insights and smart technology to help farmers monitor soil health.",
      image: approach1,
    },
    {
      title: "Sustainable irrigation",
      description:
        "Our advanced irrigation systems reduce water waste and support efficient crop hydration.",
      image: approach2,
    },
    {
      title: "Supply chain support",
      description:
        "Smarter post-harvest logistics and digital tracking systems for fresher, better-quality products.",
      image: approach3,
    },
  ];

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Content - Fixed text alignment */}
        <div className="space-y-6 lg:sticky lg:top-8">
          <Badge label="Our Approach" className="justify-start" />
          
          <Heading className="text-start">
            Redefining farmland ownership for modern investors
          </Heading>
          
          {/* Removed hyphens-auto, kept only text-justify */}
          <Description className="text-justify max-w-lg leading-relaxed">
            At Arony Farms, we deliver end-to-end farmland investment
            solutions, making land ownership seamless, secure, and profitable.
          </Description>
          
          <Description className="text-justify max-w-lg leading-relaxed">
            From soil preparation to harvest, our team handles everything while
            you enjoy transparent, tax-efficient returns from your natural
            asset.
          </Description>
          
          <GreenButton
            label="Discover our solutions"
            className="bg-[#4BA625]"
          />
        </div>

        {/* Right Content - Image Carousel */}
        <div className="w-full overflow-x-auto scrollbar-hide mt-12 lg:mt-20">
          <div className="flex gap-4 sm:gap-6 pb-4 min-w-max">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group flex-shrink-0 w-64 sm:w-72 lg:w-[380px] xl:w-[420px] h-80 sm:h-96 lg:h-[450px]"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="absolute top-4 left-4">
                    <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors">
                      <span className="text-gray-900 text-xl">+</span>
                    </button>
                  </div>

                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white space-y-2">
                    <h3 className="text-[20px] font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-[14px] font-normal leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Approach;