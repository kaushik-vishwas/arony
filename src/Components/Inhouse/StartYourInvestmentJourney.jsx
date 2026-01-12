export default function StartYourInvestmentJourney() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-white border border-gray-200 rounded-2xl p-10 space-y-8">
        {/* Header Row: Title left, Subtitle right */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left - Title */}
          <div>
            <h2 className="text-[40px] font-normal leading-[112%] font-poppins">
              Start Your Green Investment Journey
            </h2>
          </div>

          {/* Right - Subtitle aligned to right */}
          <div className="flex justify-end items-center">
            <p className="text-sm text-gray-500 text-right">
              Fill the details below to receive the investment deck and callback.
            </p>
          </div>
        </div>

        {/* Form - Full width below */}
        <form className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-300"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-300"
          />

          <input
            type="email"
            placeholder="Email Id"
            className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-300"
          />

          <input
            type="text"
            placeholder="City"
            className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-300"
          />

          <select className="w-full border rounded-lg px-4 py-3 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-lime-300">
            <option>Investment Amount</option>
            <option>₹10L – ₹25L</option>
            <option>₹25L – ₹50L</option>
            <option>₹50L+</option>
          </select>

          <select className="w-full border rounded-lg px-4 py-3 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-lime-300">
            <option>Preferred Lock In</option>
            <option>3 Years</option>
            <option>5 Years</option>
            <option>7 Years</option>
          </select>

          <div className="md:col-span-2 pt-4 flex justify-center">
            <button
              type="submit"
              className="bg-[#D0F24B] hover:bg-lime-300 text-black px-12 py-2 rounded-full flex items-center gap-2 font-medium transition group pr-4"
            >
              <span  className="mr-[20px] text-[16px]">Submit</span>
              <span className="bg-green-900 text-white w-9 h-9 flex items-center justify-center rounded-full -mr-4 transition-transform group-hover:translate-x-1">
                {/* Upward-right tilted arrow ↗ */}
               <svg 
  xmlns="http://www.w3.org/2000/svg" 
  fill="none" 
  viewBox="0 0 24 24" 
  strokeWidth="1.5" 
  stroke="currentColor" 
  className="w-3 h-3"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" 
  />
</svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}