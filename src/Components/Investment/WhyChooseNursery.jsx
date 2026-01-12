import React from "react";

// Example using Lucide React icons (you can install: npm install lucide-react)
// If using a different icon library, replace these imports accordingly
import { Sprout, Leaf, ShieldCheck, Target } from "lucide-react";

const WhyChooseNursery = () => {
  const benefits = [
    {
      id: "01",
      title: "Controlled Nursery-Grown Plants",
      desc: "Not outsourced — every plant is cultivated with care in our own facilities.",
      icon: Sprout, // Green sprout/plant icon
    },
    {
      id: "02",
      title: "Crop-Specific Expertise",
      desc: "Specialized knowledge for Chikku, Mango, Guava & Sandalwood cultivation.",
      icon: Leaf, // Leaf icon representing expertise
    },
    {
      id: "03",
      title: "Higher Plantation Success Rate",
      desc: "Our plants are optimized for survival and growth in farmland conditions.",
      icon: ShieldCheck, // Shield with checkmark for success/assurance
    },
    {
      id: "04",
      title: "Reduced Long-Term Risk",
      desc: "Quality assurance from nursery to harvest, minimizing farming uncertainties.",
      icon: Target, // Target/bullseye icon for precision/risk reduction
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="bg-lime-300 text-green-900 px-5 py-2 rounded-full text-sm font-medium">
            Why Choose Perfect
          </span>
        </div>

        {/* Heading */}
     <h2
  className="text-[40px] font-normal leading-[112%] tracking-[0%] text-center text-gray-900 mb-3"
  style={{ fontFamily: "Poppins, sans-serif" }}
>
  Benefits of Our In-House Nursery
</h2>


        {/* Sub text */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          We control every aspect of plant development to ensure your farmland
          investment thrives
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 border hover:shadow-lg transition hover:border-green-200 group"
              >
                <div className="text-2xl font-semibold text-green-900 mb-4">
                  {item.id}
                </div>

                <div className="w-12 h-12 bg-green-900 text-white rounded-full flex items-center justify-center mb-5 group-hover:bg-green-800 transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNursery;