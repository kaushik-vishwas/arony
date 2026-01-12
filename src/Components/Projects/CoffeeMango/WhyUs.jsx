import { Section, SectionCol, Badge, Heading } from "../../utils";
import leafs from "../../../assets/leafs.png";
import WhyUss from "../../../assets/WhyUs.png";


const WhyUs = () => {

  const reasons = [
    {
      text: 'Completely managed, zero-hassle premium agroforestry: You Own, We Farm'
    },
    {
      text: 'Transparent periodic updates, open site visitation'
    },
    {
      text: 'World-class security for plots and produce'
    },
    {
      text: 'Legal guidance, plantation registration, and government compliance handled by experts'
    },
    {
      text: 'High resale and intergenerational wealth creation potential'
    },
    {
      text: 'Proven management with industry-best, ethical, and sustainable practices'
    }
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center">

      <div className="absolute inset-0 z-0">
        <img
          src={WhyUss}
          alt="Farm sunset landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-green-900/40"></div>
      </div>

      <Section className="relative z-10">
        <SectionCol>

          <div className="text-left flex flex-col gap-4 sm:gap-6 md:gap-8">
            <Badge label="Why Us" />
            <Heading className="text-white">Why Choose Arony<br />Mango Farm?</Heading>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <img src={leafs} alt="" />
                  </div>
                </div>
                <p className="text-[#585858] lg:text-[20px] font-medium sm:text-base leading-relaxed">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>

        </SectionCol>
      </Section>

    </div>
  );
};

export default WhyUs;