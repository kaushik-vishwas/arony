import { Heading, Description, Section, GreenButton } from "../utils";
import together1 from '../../assets/approach3.png';
import leaf from "../../assets/leaf.png";
import together2 from '../../assets/apporach4.png';
import together3 from '../../assets/approach1.png';



const WorkTogether = () => {

  const features = [
    { icon: leaf, label: "Sustainable" },
    { icon: leaf, label: "Transparent" },
    { icon: leaf, label: "Impactful" }
  ];

  const images = [
    { id: 1, url: together1, alt: "Work together image" },
    { id: 2, url: together2, alt: "Work together image" },
    { id: 3, url: together3, alt: "Work together image" }
  ];


  return (
    <Section>
      <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-md overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 md:gap-18 min-h-[400px] lg:min-h-[450px]">

          <div className="pt-6 sm:pt-10 lg:pt-16 px-6 sm:px-10 lg:px-16 flex flex-col items-center md:items-start justify-start gap-4 sm:gap-6 md:gap-8 max-w-xl sm:max-w-2xl lg:max-w-none">
              <Heading className="text-left">Grow something great together.</Heading>
              <Description className="text-left">
                   Whether you're a farmer, distributor, or partner, we're here to support your goals with sustainable solutions and global expertise.
              </Description>
              <GreenButton label="Let's work together" className="bg-[#4BA625] mt-4 md:mt-12 lg:mt-16" />
          </div>

          <div className="relative flex flex-col h-full">
            <div className="flex-1 overflow-x-auto overflow-y-hidden scrollbar-hide px-4 sm:px-6 scroll-smooth">
              <div className="flex h-full gap-5 sm:gap-8">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="flex-shrink-0 w-[85%] sm:w-72 md:w-80 lg:w-[380px] h-[220px] sm:h-[300px] lg:h-[400px] mx-auto sm:mx-0"
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-md transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="px-2 sm:px-6 py-10 sm:py-16 flex flex-wrap items-center justify-center md:justify-center lg:justify-start gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className=" px-4 sm:px-5 py-2 rounded-full inline-flex items-center gap-2"
                >
                  <img
                    src={feature.icon}
                    alt="leaf icon"
                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                  />
                  <span className="text-black font-medium text-xs sm:text-sm">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default WorkTogether;
