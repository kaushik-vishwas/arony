import futureAgri from "../../assets/futureAgri.png";

export default function ReadyToInvestCTA() {
  return (
    <section
      className="relative h-[300px] sm:h-[350px] md:h-[420px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${futureAgri})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl px-4 sm:px-6 md:px-8 w-full">
        <h2 className="font-['Poppins',sans-serif] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-[1.15] sm:leading-[1.12] tracking-[0%] text-center mb-3 sm:mb-4">
          Ready to Invest in <br className="hidden sm:block" /> Managed Farmland?
        </h2>

        <p className="font-['Poppins',sans-serif] font-normal text-base sm:text-lg md:text-[20px] leading-[136%] tracking-[0%] text-center text-gray-200 mb-6 sm:mb-8 px-2 sm:px-0">
          Start building your agricultural portfolio today. Our advisors are
          here to guide you through every step.
        </p>

        <button className="bg-[#D0F24B] text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-lime-300 transition text-sm sm:text-base">
          Enquire now
        </button>
      </div>
    </section>
  );
}