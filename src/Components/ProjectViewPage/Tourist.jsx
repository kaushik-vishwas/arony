// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import leafgrn from "../../assets/leaf-grn.png";
// import tourist from "../../assets/tourist.png";

// const Tourist = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const touristPlaces = [
//     {
//       id: 1,
//       image: tourist,
//       title: 'Lorem ipsum dolor sit amet consectetur.',
//       description: 'Lorem ipsum dolor sit amet consectetur. Porttitor amet magna nulla ac imperdiet. Dignissim interdum imperdiet dignissim aliquet nisl. Oras habitant tempor aliquam eu turpis. Phasellus sed faucibus aliquet donec ultrices quisque ornare vestibulum. Nullam maecenas egestas elit vitae purus vitae accumsan porta. Malesuada amet imperdiet velit nunc eget a vitae.',
//     },
//     {
//       id: 2,
//       image: tourist,
//       title: 'Lorem ipsum dolor sit amet consectetur2.',
//       description: 'Lorem ipsum dolor sit amet consectetur. Porttitor amet magna nulla ac imperdiet. Dignissim interdum imperdiet dignissim aliquet nisl. Oras habitant tempor aliquam eu turpis. Phasellus sed faucibus aliquet donec ultrices quisque ornare vestibulum. Nullam maecenas egestas elit vitae purus vitae accumsan porta. Malesuada amet imperdiet velit nunc eget a vitae.',
//     },
//     {
//       id: 3,
//       image: tourist,
//       title: 'Lorem ipsum dolor sit amet consectetur3.',
//       description: 'Lorem ipsum dolor sit amet consectetur. Porttitor amet magna nulla ac imperdiet. Dignissim interdum imperdiet dignissim aliquet nisl. Oras habitant tempor aliquam eu turpis. Phasellus sed faucibus aliquet donec ultrices quisque ornare vestibulum. Nullam maecenas egestas elit vitae purus vitae accumsan porta. Malesuada amet imperdiet velit nunc eget a vitae.',
//     },
//   ];

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev === 0 ? touristPlaces.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === touristPlaces.length - 1 ? 0 : prev + 1));
//   };

//   const currentPlace = touristPlaces[currentIndex];

//   return (
//     <div className="w-full bg-[#F3F3F3] py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6 md:mb-10">
//           <div></div>
//           {/* Navigation Buttons */}
//           <div className="flex gap-2">
//             <button
//               onClick={handlePrevious}
//               className="w-10 h-10 rounded-full bg-[#4BA625] text-white hover:bg-green-700 flex items-center justify-center transition-all"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={handleNext}
//               className="w-10 h-10 rounded-full bg-[#4BA625] text-white hover:bg-green-700 flex items-center justify-center transition-all"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="flex flex-col md:flex-row gap-10 md:gap-14 lg:gap-20">
//           {/* Image Section */}
//           <div className="w-full md:w-1/2">
//             <div className="relative overflow-hidden shadow-lg h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
//               <img
//                 src={currentPlace.image}
//                 alt={currentPlace.title}
//                 className="w-full h-full object-cover transition-opacity duration-300"
//               />
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="w-full md:w-1/2 flex flex-col justify-center">
//             <div className="space-y-3 mb-28">
//               <div className="flex items-center gap-2 border bg-white border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
//                 <img
//                   src={leafgrn}
//                   alt="leaf icon"
//                   className="w-5 h-5 object-contain"
//                 />
//                 <span className="text-black text-[16px] font-medium">Tourist</span>
//               </div>

//               <h2 className="text-[34px] md:text-2xl lg:text-[34px] font-medium text-black">
//                 Nearby Tourist Places
//               </h2>
//             </div>

//             {/* Title */}
//             <h3 className="text-[36px] sm:text-[48px] lg:text-[60px] font-semibold text-black mb-4 md:mb-6 leading-none">
//               {currentPlace.title}
//             </h3>

//             {/* Description */}
//             <p className="text-[20px] sm:text-[22px] lg:text-[20px] text-[#585858] leading-relaxed text-justify">
//               {currentPlace.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tourist;




import React from 'react';
import leafgrn from "../../assets/leaf-grn.png";

const Tourist = () => {
  return (
    <div className="w-full bg-[#F3F3F3] py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-10">
          <div className="flex items-center gap-2 border bg-white border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
            <img src={leafgrn} alt="leaf icon" className="w-5 h-5 object-contain" />
            <span className="text-black text-[16px] font-medium">Tourist</span>
          </div>
        </div>

        {/* Combined Content Section */}
        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-10 md:gap-16 lg:gap-20">
          {/* Left Side - Arony Integrated Farmland */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h2 className="text-[30px] md:text-[34px] font-semibold text-black mb-3">
              Arony Integrated Farmland
            </h2>
            <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium text-black mb-6 leading-tight">
              Mango & Sandalwood Farm Near Hampi
            </h3>

            <p className="text-[18px] sm:text-[20px] text-[#585858] leading-relaxed text-justify whitespace-pre-line">
              Welcome to Arony Integrated Farmland, a premium managed farmland project near Hampi, Karnataka, where nature, investment, and peace come together. 
              This project is created for individuals and families who wish to own farmland for weekend relaxation, long-term secure land ownership, and a healthy lifestyle away from the noise of the city.

              Here, you get a beautiful combination of Mango and Sandalwood plantations, planned and maintained by experts. The Mango trees begin to yield fruit within a few years, providing seasonal income, while the Sandalwood trees grow steadily and gain high value over time, creating an excellent long-term wealth asset.

              This integrated model ensures your land is not only green and scenic but also financially rewarding. Hampi is a location known for its fertile soil, beautiful scenery, and fast-growing tourism & infrastructure development, making it one of the most promising agricultural investment zones in Karnataka. 

              Owning farmland here offers both emotional satisfaction and strong future appreciation. Our farmland layout is fully developed, with clear plot boundaries, internal roads, irrigation support, soil-tested plantation zones, and complete farm management services. 

              You can also choose to build your weekend farmhouse, making it a perfect natural retreat for your family.
            </p>
          </div>

          {/* Right Side - Why Hampi is the Perfect Farmland Location */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h2 className="text-[30px] md:text-[34px] font-semibold text-black mb-6">
              Why Hampi is the Perfect Farmland Location
            </h2>

            <ul className="space-y-6 text-[#585858] text-[18px] sm:text-[20px] leading-relaxed">
              <li>
                <strong className="text-black">High Land Appreciation Zone:</strong> Hampi is a growing heritage and tourism hub, which pushes steady land value growth every year.
              </li>
              <li>
                <strong className="text-black">Fertile Soil & Ideal Climate:</strong> The region’s natural soil is excellent for Mango and Sandalwood, ensuring strong and healthy plantation growth.
              </li>
              <li>
                <strong className="text-black">Tourism & Infrastructure Expansion:</strong> As a UNESCO Heritage Site, Hampi continues to receive government and private development, increasing demand for surrounding land.
              </li>
              <li>
                <strong className="text-black">Peaceful Weekend Destination:</strong> Open landscapes, clean air, and natural views make Hampi the perfect weekend escape from city stress.
              </li>
              <li>
                <strong className="text-black">Future Eco-Stay / Farm Stay Potential:</strong> The region offers strong opportunities for farmhouse stays, eco resorts, and retreat spaces.
              </li>
            </ul>

            <p className="mt-6 text-[#585858] text-[18px] sm:text-[20px] leading-relaxed">
              Owning farmland here means enjoying both nature and future appreciation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourist;

