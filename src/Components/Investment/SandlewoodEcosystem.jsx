import SmallWood from "../../assets/smallWood.png"
import plant1 from "../../assets/plant1.png"
import plant2 from "../../assets/plant2.png"
import plant3 from "../../assets/plant3.png"

import mango1 from "../../assets/mango1.png"
import mango2 from "../../assets/mango2.png"
import mango3 from "../../assets/mango3.png"
import mango4 from "../../assets/mango4.png"
import mango5 from "../../assets/mango5.png"
import mango6 from "../../assets/mango6.png"

export default function SandalwoodEcosystem() {
  return (
    <section className="max-w-[90%] mx-auto px-4 md:px-6 py-8 md:py-10">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-[28px] md:text-[40px] font-normal leading-[112%] tracking-[0%] text-center mb-2 font-poppins">
          The Sandalwood Ecosystem
        </h2>

        <p className="text-[16px] md:text-[24px] font-light leading-[136%] tracking-[0%] text-center text-gray-500 max-w-3xl mx-auto font-poppins">
          Sandalwood thrives in company. As a hemiparasitic tree, it draws
          vital nutrients from companion plants to reach its full commercial
          value.
        </p>
      </div>

      {/* Info pill - Responsive for mobile */}
      <div className="bg-gray-100 rounded-[20px] md:rounded-[32px] px-6 md:px-32 py-4 md:py-3 flex flex-col md:flex-row items-center gap-4 md:gap-6 max-w-full mx-auto mb-8 md:mb-10">
        <div className="flex-shrink-0">
          <img
            src={SmallWood}
            className="h-16 w-16 md:h-24 md:w-24 object-contain"
            alt="Sandalwood"
          />
        </div>
        <p className="text-[14px] md:text-[20px] font-normal md:px-12 leading-[136%] tracking-[0%] text-center text-gray-600 flex-1 font-poppins">
          To ensure maximum growth and survival, every Sandalwood sapling must
          be paired with at least <strong>2 Host Plants</strong> from the
          selection below.
        </p>
      </div>

      {/* Cards - Stack vertically on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="group relative rounded-2xl p-6 md:p-8 flex flex-col items-center text-center hover:bg-[#4A4A4A] hover:text-white transition-all duration-300 cursor-pointer min-h-[350px] md:min-h-[400px]">
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300 pointer-events-none"></div>

          <img
            src={plant1}
            className="h-32 md:h-40 object-contain mb-4 group-hover:opacity-0 transition-opacity duration-300"
            alt="Casuarina"
          />
          <h3 className="font-medium group-hover:opacity-0 transition-opacity duration-300"></h3>

          <div className="absolute inset-0 p-6 md:p-8 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center">
              <h3 className="text-base md:text-lg font-semibold mb-4 font-poppins">
                Casuarina (Wild)
              </h3>
              <img
                src={plant1}
                className="h-24 md:h-32 object-contain mb-4"
                alt="Casuarina"
              />
              <p className="text-xs md:text-sm text-gray-300 mb-6 px-4 font-poppins">
                Best for maximizing Sandalwood height and trunk girth.
              </p>
            </div>
            <button className="bg-lime-400 text-black px-6 py-3 rounded-full text-xs md:text-sm hover:bg-lime-300 transition-colors w-full max-w-[180px] md:max-w-[200px] font-poppins">
              View Details
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative rounded-2xl p-6 md:p-8 flex flex-col items-center text-center hover:bg-[#4A4A4A] hover:text-white transition-all duration-300 cursor-pointer min-h-[350px] md:min-h-[400px]">
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300 pointer-events-none"></div>

          <img
            src={plant2}
            className="h-32 md:h-40 object-contain mb-4 group-hover:opacity-0 transition-opacity duration-300"
            alt="Sesbania Grandiflora"
          />
          <h3 className="font-medium group-hover:opacity-0 transition-opacity duration-300"></h3>

          <div className="absolute inset-0 p-6 md:p-8 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center">
              <h3 className="text-base md:text-lg font-semibold mb-4 font-poppins">
                Sesbania Grandiflora
              </h3>
              <img
                src={plant2}
                className="h-24 md:h-32 object-contain mb-4"
                alt="Sesbania Grandiflora"
              />
              <p className="text-xs md:text-sm text-gray-300 mb-6 px-4 font-poppins">
                Essential for the first 3 critical years of sapling establishment.
              </p>
            </div>
            <button className="bg-lime-400 text-black px-6 py-3 rounded-full text-xs md:text-sm hover:bg-lime-300 transition-colors w-full max-w-[180px] md:max-w-[200px] font-poppins">
              View Details
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative rounded-2xl p-6 md:p-8 flex flex-col items-center text-center hover:bg-[#4A4A4A] hover:text-white transition-all duration-300 cursor-pointer min-h-[350px] md:min-h-[400px]">
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300 pointer-events-none"></div>

          <img
            src={plant3}
            className="h-32 md:h-40 object-contain mb-4 group-hover:opacity-0 transition-opacity duration-300"
            alt="Custard Apple"
          />
          <h3 className="font-medium group-hover:opacity-0 transition-opacity duration-300"></h3>

          <div className="absolute inset-0 p-6 md:p-8 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center">
              <h3 className="text-base md:text-lg font-semibold mb-4 font-poppins">
                Custard Apple (Sitaphal)
              </h3>
              <img
                src={plant3}
                className="h-24 md:h-32 object-contain mb-4"
                alt="Custard Apple"
              />
              <p className="text-xs md:text-sm text-gray-300 mb-6 px-4 font-poppins">
                Perfect for investors looking for annual passive returns alongside long-term timber value.
              </p>
            </div>
            <button className="bg-lime-400 text-black px-6 py-3 rounded-full text-xs md:text-sm hover:bg-lime-300 transition-colors w-full max-w-[180px] md:max-w-[200px] font-poppins">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="mt-12 md:mt-16">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="md:col-span-6 rounded-2xl overflow-hidden">
            <img
              src={mango1}
              alt="Large Sandalwood Plantation"
              className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="md:col-span-3 rounded-2xl overflow-hidden">
            <img
              src={mango2}
              alt="Close-up"
              className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="md:col-span-3 rounded-2xl overflow-hidden">
            <img
              src={mango3}
              alt="Sandalwood Bark"
              className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <div className="md:col-span-3 rounded-2xl overflow-hidden">
            <img
              src={mango4}
              alt="Young Saplings"
              className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="md:col-span-3 rounded-2xl overflow-hidden">
            <img
              src={mango5}
              alt="Cultivation Tools"
              className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="md:col-span-6 rounded-2xl overflow-hidden">
            <img
              src={mango6}
              alt="Harvesting Process"
              className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}