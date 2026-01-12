export default function PlantStats() {
  return (
    <section className="max-w-[90%] mx-auto px-4 md:px-6">
      <div className="bg-[#2F5547] rounded-xl grid grid-cols-2 md:grid-cols-4 text-white py-6 md:py-8 text-center gap-y-6">
        <div>
          <h3 className="text-[24px] md:text-[30px] font-medium leading-[126%] tracking-[0%] font-poppins">
            10000+
          </h3>
          <p className="text-[14px] md:text-[18px] font-normal leading-[126%] tracking-[0%] text-center text-gray-200 mt-1 font-poppins">
            Plants Nurtured <br /> Annually
          </p>
        </div>

        <div>
          <h3 className="text-[24px] md:text-[30px] font-medium leading-[126%] tracking-[0%] font-poppins">
            500+
          </h3>
          <p className="text-[14px] md:text-[18px] font-normal leading-[126%] tracking-[0%] text-center text-gray-200 mt-1 font-poppins">
            Acres <br /> Developed
          </p>
        </div>

        <div>
          <h3 className="text-[24px] md:text-[30px] font-medium leading-[126%] tracking-[0%] font-poppins">
            95%
          </h3>
          <p className="text-[14px] md:text-[18px] font-normal leading-[126%] tracking-[0%] text-center text-gray-200 mt-1 font-poppins">
            Plantation <br /> Succession Rate
          </p>
        </div>

        <div>
          <h3 className="text-[24px] md:text-[30px] font-medium leading-[126%] tracking-[0%] font-poppins">
            4+
          </h3>
          <p className="text-[14px] md:text-[18px] font-normal leading-[126%] tracking-[0%] text-center text-gray-200 mt-1 font-poppins">
            Specialized <br /> Crops
          </p>
        </div>
      </div>
    </section>
  );
}