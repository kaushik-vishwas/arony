import { useState } from "react";

import Hampi from "../../assets/hampi.png";
import Coffee from "../../assets/coffee.png";

const projects = [
  {
    title: "The Hampi Highland",
    subtitle: "Hampi, Karnataka",
    details: [
      "Land Area - 100 acres",
      "Plantation - Mango Plantations",
      "Water source - 2 Under ground water storage units",
    ],
    image: Hampi,
  },
  {
    title: "The Malad Mist",
    subtitle: "Malad, Maharashtra",
    details: [
      "Land Area - 120 acres",
      "Plantation - Coffee and Pepper",
      "Water source - 2 Ponds",
    ],
    image: Coffee,
  },
  {
    title: "The Mountains Breathe",
    subtitle: "Chikmagalore",
    details: [
      "Land Area - 60 acres",
      "Plantation - Coffee and Pepper",
      "Water source - 1 pond",
    ],
    image: Coffee,
  },
];

export default function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <span className="inline-block bg-lime-200 text-green-900 px-4 py-1 rounded-full text-sm mb-3">
        Ongoing
      </span>

     <h2 className="text-[40px] font-normal leading-[112%] font-poppins mb-10">
  Featured Projects
</h2>


      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative h-[420px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  isHovered ? "bg-black/60" : "bg-black/0"
                }`}
              />

              {/* Hover Content */}
            {isHovered && (
  <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 text-white">
    {/* Top/Middle content */}
    <div className="flex flex-col items-center text-center space-y-4 mt-6">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm opacity-90">{project.subtitle}</p>
      <div className="w-56 border-b border-white/50 my-2" />
      <div className="text-sm space-y-1 opacity-90">
        {project.details.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>

    {/* Button at bottom */}
    <div className="flex justify-center mb-6">
      <button className="bg-lime-300 text-black px-6 py-2 rounded-full w-fit font-medium hover:bg-lime-200 transition">
        See more
      </button>
    </div>
  </div>
)}


              {/* Title (default, when not hovered) */}
            {!isHovered && (
  <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
  </div>
)}

            </div>
          );
        })}
      </div>
    </section>
  );
}
