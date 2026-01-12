import HeroPlantPic from "../../assets/heroPlant.png"

export default function HeroPlant() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-10 grid md:grid-cols-[1fr_1.2fr] gap-10 items-center mt-8">
      {/* Left content */}
      <div>
        <span className="inline-block bg-[#D0F24B] px-8 py-2 rounded-full mb-4 font-poppins text-sm md:text-base">
          All plants sourced from our own in-house
        </span>

        <h1 className="font-poppins font-normal text-[40px] md:text-[65px] leading-[1.12] tracking-normal mb-4">
          Grow Your <br />
          Farmland with <br />
          Expertly Nurtured <br />
          Plants
        </h1>

        <p className="font-poppins font-normal text-[16px] md:text-[20px] leading-[1.36] tracking-normal text-gray-500 mb-6 max-w-md">
          Plantation and farm development support <br />
          Delivery Across Karnataka*
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition font-poppins w-full md:w-auto">
          Enquiry now
        </button>
      </div>

      {/* Right image */}
      <div className="flex justify-center relative">
        {/* Plant image */}
        <img
          src={HeroPlantPic}
          alt="Plant"
          className="h-[400px] md:h-[600px] object-contain relative z-20"
        />

        {/* Price tag - repositioned for mobile */}
        <div className="absolute top-20 md:top-32 right-10 md:right-40 bg-[#345B4E] text-white text-xs rounded-full w-16 h-16 md:w-20 md:h-20 font-poppins z-0
                flex flex-col items-center justify-center text-center">
          <span className="font-bold text-xs md:text-sm">₹249</span>
          <span className="text-[10px] md:text-xs">Per <br/> Sapling</span>
        </div>
      </div>
    </section>
  );
}