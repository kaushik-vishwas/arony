import leafgrn from "../../assets/leaf-grn.png";
import pillarss from "../../assets/pillars.png";
import { useInViewTrigger } from "../utils";


const KeyPillars = () => {

  const pillars = [
    {
      title: 'Sustainable Agriculture Practice',
      description:
        'We implement eco-friendly techniques like organic farming, biodiversity restoration, and water conservation to minimize environmental impact while maximizing land health and returns.',
    },
    {
      title: 'Hassle-Free Farm Management',
      description:
        'From land acquisition to daily operations, our expert team handles everything. You enjoy passive income while we nurture your farmland into a thriving ecosystem.',
    },
    {
      title: 'Empowering Local Communities',
      description:
        'By partnering with local farmers, we support community development, traditional farming wisdom, and fair wages building a self-sustaining green economy.',
    },
    {
      title: 'Real-Time Investment Transparency',
      description:
        'Stay informed with real-time farm updates, performance reports, and progress tracking through our advanced digital platform.',
    },
    {
      title: 'Environmental & Cultural Restoration Commitment',
      description:
        'Beyond profits, Hasiru Farms is committed to reforesting barren lands, reviving traditional farming practices, and restoring biodiversity, ensuring your investment nurtures both the environment and heritage.',
    },
  ];

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={pillarss}
          alt="Farm landscape background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left - Title */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border bg-white border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                <img
                  src={leafgrn}
                  alt="leaf icon"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-black text-[16px] font-medium">
                  Key Pillars
                </span>
              </div>

              <h2 className="text-[34px] font-medium text-white leading-tight">
                Key Pillars of Farms
              </h2>
            </div>

            {/* Right - Description */}
            <div className="flex items-center">
              <p className="text-white text-[16px] font-normal leading-relaxed">
                At Arony Farms, every initiative begins with one purpose to build a greener, more sustainable future through professionally managed farmland. Our approach blends organic farming, eco-conscious management, and community-driven growth, ensuring your investment creates a real impact on people and the planet.
              </p>
            </div>
          </div>

          {/* Pillars Section */}
          <div className="grid gap-6">

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.slice(0, 3).map((pillar, index) => {

                const [ref, inView] = useInViewTrigger();
                return (
                  <div
                    key={index} ref={ref}
                    className="bg-white/20 backdrop-blur-md border border-gray-300 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0px)" : "translateY(40px)",
                      transitionDelay: `${index * 0.2}s`,
                    }}
                  >
                    <h3 className="text-[22px] font-semibold text-white mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-white text-[16px] font-normal leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
              {pillars.slice(3, 5).map((pillar, index) => {

                const [ref, inView] = useInViewTrigger();
                return (
                  <div
                    key={index + 3} ref={ref}
                    className="bg-white/20 backdrop-blur-md border border-gray-300 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0px)" : "translateY(40px)",
                      transitionDelay: `${(index + 3) * 0.2}s`,
                    }}
                  >
                    <h3 className="text-[22px] font-semibold text-white mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-white text-[16px] font-normal leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPillars;
