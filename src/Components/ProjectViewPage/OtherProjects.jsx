import React from "react";
import { Link } from "react-router-dom";
import leafgrn from "../../assets/leaf-grn.png";
import leaf from "../../assets/leaf.png";
import otherprjct from "../../assets/ProjectViewMain2.png";
import otherprjct1 from "../../assets/ProjectViewMain3.png";

const OtherProjects = () => {
  const projects = [
    {
      title: "Arony Mango Farm",
      image: otherprjct,
      description1:
        "Arony Mango Farm offers investors a rare opportunity to own and profit from managed mango cultivation in India's most sought-after agroforestry corridor.",
      description2:
        "Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.",
      link: "/project-mango",
    },
    {
      title: "Arony Coffee Farm",
      image: otherprjct1,
      description1:
        "Arony Coffee Farm offers investors a rare opportunity to own and profit from managed coffee cultivation in India's most sought-after agroforestry corridor.",
      description2:
        "Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.",
      link: "/project-coffee",
    },
  ];

  return (
    <div className="bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
              <img
                src={leafgrn}
                alt="leaf icon"
                className="w-5 h-5 object-contain"
              />
              <span className="text-black text-[16px] font-medium">
                Other Projects
              </span>
            </div>

            <h2 className="text-[34px] sm:text-4xl lg:text-[34px] font-medium text-black">
              Check Other Projects
            </h2>
          </div>

          <Link
            to="/project-page"
            className="bg-[#4BA625] hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors self-start sm:self-auto"
          >
            <img src={leaf} alt="" />
            <span>See all projects</span>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border-2 border-[#4BA625] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <img src={leafgrn} alt="" />
                </div>
                <h3 className="text-[40px] sm:text-3xl font-semibold text-black">
                  {project.title}
                </h3>
              </div>

              {/* Image */}
              <div className="px-6">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-[#585858] text-justify text-[20px] sm:text-base leading-relaxed">
                  {project.description1}
                </p>

                <p className="text-[#585858]  text-justify text-[20px] sm:text-base leading-relaxed">
                  {project.description2}
                </p>

                {/* CTA Button with Link */}
                <Link
                  to={project.link}
                  className="bg-[#4BA625] hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
                >
                  <img src={leaf} alt="leaf icon" />
                  <span>View Project Details</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
