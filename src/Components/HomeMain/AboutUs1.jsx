import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useInViewTrigger, useCountUp } from "../utils";
import layerMain1 from '../../assets/layer-main.png';
import layerMain2 from '../../assets/ProjectViewMain2.png';
import layerMain3 from '../../assets/ProjectViewMain1.png';
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";
import leafsgrn from "../../assets/leafs.png";


const AboutUs1 = () => {

  const containerRef = useRef(null);
  const navigate = useNavigate();

  const [statsRef, statsInView] = useInViewTrigger();

  const projects = [
    {
      title: "The Malnad Mist, Sakleshpur - Coffee Estate",
      image: layerMain1,
      link: "/project-coffee-malnad-mist",
      description1:
        "Arony Coffee Farm offers investors a rare opportunity to own and profit from managed coffee cultivation in India's most sought-after agro-forestry corridor.",
      description2:
        "Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.",
    },
    {
      title: "The Mountain’s Breath, Chikkamagaluru - Coffee Estate",
      image: layerMain1,
      link: "/project-coffee-mountains-breath",
      description1:
        "Arony Coffee Farm offers investors a rare opportunity to own and profit from managed coffee cultivation in India's most sought-after agro-forestry corridor.",
      description2:
        "Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.",
    },
    {
      title: "Arony Sandalwood Farm",
      image: layerMain3,
      link: "/project-sandalwood",
      description1:
        "Arony Sandalwood Farm offers investors a rare opportunity to own and profit from managed sandalwood cultivation in India's most sought-after agro-forestry corridor.",
      description2:
        "Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.",
    },
    {
      title: "The Hampi Highlands - Mango Farm",
      image: layerMain2,
      link: "/project-mango",
      description1:
        "Arony Mango Farm offers investors a rare opportunity to own and profit from managed mango cultivation in India's most sought-after agro-forestry corridor.",
      description2:
        "Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.",
    },
  ];

  const stats = [
    {
      icon: leafsgrn,
      value: "98%",
      label: "Client satisfaction rate",
      description:
        "Transparent operations and consistent updates ensure our investors stay confident and connected.",
    },
    {
      icon: leafsgrn,
      value: "5+",
      label: "Farming projects managed",
      description:
        "Across diverse regions and climates, our projects embody sustainable growth and long-term value.",
    },
    {
      icon: leafsgrn,
      value: "300+ Acres",
      label: "Cultivated organically",
      description:
        "Every acre under Arony Farms is nurtured using 100% natural and chemical-free farming practices.",
    },
  ];

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const indexProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, projects.length - 1]
  );

  // Track the current active project index
  const [activeIndex, setActiveIndex] = React.useState(0);
  useMotionValueEvent(indexProgress, "change", (latest) => {
    setActiveIndex(Math.round(latest));
  });

  return (
    <div className="min-h-screen bg-white py-0 px-3 sm:py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-0 sm:space-y-10">
        {/* Stats Section */}
        <div ref={statsRef} className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-24 sm:mb-0">
          {stats.map((stat, index) => {

            const endValue = parseInt(stat.value); // 98, 5, 300
            const displayValue = useCountUp(statsInView ? endValue : 0);

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8">
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[60px] font-medium text-black whitespace-nowrap">
                    {displayValue}
                    {stat.value.includes("%") && "%"}
                    {stat.value.includes("+") && "+"}
                    {stat.value.includes("Acres") && " Acres"}
                  </h3>
                  <p className="text-[20px] font-semibold text-black">
                    {stat.label}
                  </p>
                  <p className="text-[16px] text-[#585858] leading-tight">
                    {stat.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Scroll-Synced Project Section */}
        <div ref={containerRef} className="relative w-full max-w-6xl mx-auto h-[300vh]">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="relative w-full h-[400px] sm:h-[300px] lg:h-[500px]">
              {projects.map((project, i) => {
                const opacity = useTransform(
                  indexProgress,
                  [i - 0.8, i - 0.2, i + 0.2, i + 0.8],
                  [0, 1, 1, 0]
                );

                const y = useTransform(
                  indexProgress,
                  [i - 0.8, i, i + 0.8],
                  [30, 0, -30]
                );

                const scale = useTransform(
                  indexProgress,
                  [i - 0.8, i, i + 0.8],
                  [0.95, 1, 0.95]
                );

                return (
                  <motion.div
                    key={i}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ opacity, y, scale }}
                  >
                    <div className="relative w-full h-full bg-black rounded-2xl shadow-2xl overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        style={{ opacity: 0.9 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                        <div className="absolute bottom-3 sm:bottom-5 lg:bottom-16 left-3 right-3 sm:left-4 sm:right-4 text-white z-20">
                          <div className="max-w-full sm:max-w-[50%] space-y-2 sm:space-y-3">
                            {/* Top Badge */}
                            <span className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium inline-flex items-center gap-2 shadow-md mb-2">
                              <img
                                src={leafgrn}
                                alt="Leaf icon"
                                className="w-4 h-4 object-contain"
                              />
                              <span className="text-[16px] lg:text-[16px] font-medium">Projects</span>
                            </span>

                            <h2 className="text-[18px] sm:text-[34px] md:text-[42px] font-semibold leading-tight sm:leading-snug">
                              {project.title}
                            </h2>
                            <p className="text-[11px] sm:text-[16px] md:text-[18px] text-white leading-snug sm:leading-relaxed">
                              {project.description1}
                            </p>
                            <p className="text-[11px] sm:text-[16px] md:text-[18px] text-white leading-snug sm:leading-relaxed">
                              {project.description2}
                            </p>

                            {/* Show button only for the active project */}
                            {i === activeIndex && (
                              <button
                                onClick={() => navigate(project.link)}
                                className="bg-[#4BA625] hover:bg-green-700 text-white font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full inline-flex items-center gap-1.5 sm:gap-2 transition-colors mt-1 sm:mt-2"
                              >
                                <img src={leaf} alt="" />
                                <span className="text-[16px] sm:text-[12px] lg:text-[16px] font-medium">
                                  View Project Details
                                </span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs1;
