const roadmapData = [
  {
    year: "2025",
    title: "The Hampi Highland",
    description:
      "Launch of our flagship project. Establishing the foundation of our managed farmland portfolio.",
  },
  {
    year: "2026",
    title: "The Malad Mist | The Mountain's Breathe",
    description: "Strategic expansion into new geographies.",
  },
  {
    year: "2027",
    title: "500 Acre",
    description:
      "Acquiring large land parcels and open up high-volume investment opportunities.",
  },
  {
    year: "2028",
    title: "1500 Acre",
    description:
      "Achieving market leadership, create a massive, fully integrated agricultural ecosystem.",
  },
];

export default function OurGrowth() {
  return (
    <section className="max-w-4xl mx-auto px-6 ">
      {/* Heading */}
      <h2
        className="text-[40px] font-normal leading-[112%] tracking-[0%] text-center mb-16"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Our Growth Roadmap
      </h2>


      <div className="relative flex">
        {/* Vertical line - positioned exactly through the center of dots */}
        <div className="absolute left-[8px] top-0 bottom-0 w-[2px] bg-lime-400"></div>

        {/* Roadmap items */}
       <div className="flex flex-col gap-10 w-full">
  {roadmapData.map((item, index) => (
    <div key={index} className="relative flex gap-10">
      {/* Dot */}
      <div className="relative z-10 mt-12">
        <span className="block w-5 h-5   rounded-full bg-[#D0F24B] flex items-center justify-center shadow">
          <span className="block w-3 h-3 rounded-full bg-white"></span>
        </span>
      </div>

      {/* Card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 w-full shadow-sm">
        <div className="flex items-start gap-6">
          <span className="text-3xl font-semibold text-green-800 min-w-[80px]">
            {item.year}
          </span>

          <div>
            <h3 className="font-medium mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}