// import React from 'react';
// import { Sprout, Droplet, LineChart, Bug, RefreshCw, Database } from 'lucide-react';

// const BlogViewMain1 = () => {
//   return (
//     <div className="min-h-screen bg-[#FAFAFA]">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-br text-black py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-[40px] sm:text-4xl lg:text-[40px] font-medium mb-6 leading-tight">
//             Science, strategy, and stewardship from soil to harvest
//           </h1>
//           <p className="text-[#585858] text-[16px] sm:text-lg leading-relaxed mb-4">
//             As agriculture evolves into a data-driven, technology-powered industry, the role of the agronomist has never been more important. These scientists-on-the-scene experts on the high-stakes domain of crop production — taking the science into the field — helping farmers optimize yields, maintain soil health, and grow sustainably.
//           </p>
//           <p className="text-[#585858] text-[16px] sm:text-lg leading-relaxed">
//             In a world facing climate change, resource scarcity, and food security challenges, agronomists are the advisors shaping the future of farming.
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
//         {/* Who are agronomists? Section */}
//         <section className="mb-12">
//           <h2 className="text-[28px] sm:text-3xl font-medium text-black mb-4">
//             Who are agronomists?
//           </h2>
//           <p className="text-[#585858] text-[16px] leading-relaxed mb-4">
//             Agronomists are agricultural scientists who specialize in crop production, soil management, and the overall science of growing plants effectively. Their goal? To improve farming systems, sustainability, and profitability on the farm.
//           </p>
//           <p className="text-[#585858] text-[16px] leading-relaxed">
//             Whether they're walking fields, analyzing soil samples, or interpreting satellite data, agronomists work side-by-side with farmers to turn knowledge into results.
//           </p>
//         </section>

//         {/* Services List */}
//         <div className="space-y-8 mb-12">
          
//           {/* Service 1 */}
         
//             <div className="flex items-start gap-3 mb-3">
            
//               <h3 className="text-[26px] sm:text-2xl font-medium text-black">
//                 1. Soil analysis & fertility planning
//               </h3>
//             </div>
//             <p className="text-[#585858] text-[16px] leading-relaxed">
//               Healthy crops start with healthy soil. Agronomists test nutrient levels, pH, moisture, and more to create custom fertilization plans that boost plant growth while reducing waste.
//             </p>
         

//           {/* Service 2 */}
          
//             <div className="flex items-start gap-3 mb-3">
             
//               <h3 className="text-[26px] sm:text-2xl font-medium text-black">
//                 2. Crop selection & rotation strategies
//               </h3>
//             </div>
//             <p className="text-[#585858] text-[16px] leading-relaxed">
//               Not all crops thrive in every field. Agronomists help farmers choose varieties suited to the local climate, pest risk, and market demand — and plan rotations that restore soil prevent disease.
//             </p>
      

//           {/* Service 3 */}
        
//             <div className="flex items-start gap-3 mb-3">
             
//               <h3 className="text-[26px] sm:text-2xl font-medium text-black">
//                 3. Pest & disease management
//               </h3>
//             </div>
//             <p className="text-[#585858] text-[16px] leading-relaxed">
//               Using integrated pest management (IPM), agronomists identify threats early and recommend eco-friendly treatments that protect both yield and biodiversity.
//             </p>
      
//           {/* Service 4 */}
         
//             <div className="flex items-start gap-3 mb-3">
             
//               <h3 className="text-[26px] sm:text-2xl font-medium text-black">
//                 4. Irrigation & water use efficiency
//               </h3>
//             </div>
//             <p className="text-[#585858] text-[16px] leading-relaxed">
//               They advise on water-saving techniques, from drip irrigation to soil moisture monitoring, to ensure every drop counts — especially in drought-prone regions.
//             </p>
         

//           {/* Service 5 */}
         
//             <div className="flex items-start gap-3 mb-3">
        
//               <h3 className="text-[26px] sm:text-2xl font-medium text-black">
//                 5. Precision farming & data use
//               </h3>
//             </div>
//             <p className="text-[#585858] text-[16px] leading-relaxed">
//               Modern agronomists use drones, satellite imagery, and software to provide real-time advice on planting, fertilizing, and harvesting — turning complex data into sharper decisions.
//             </p>
     

//         </div>

//         {/* Why agronomists matter Section */}
//         <section className="mb-12">
//           <h2 className="text-[28px] sm:text-3xl font-medium text-black mb-4">
//             Why agronomists matter
//           </h2>
//           <p className="text-[#585858] text-[16px] leading-relaxed mb-6">
//             Agronomists aren't just scientists — they're strategic partners. Their impact includes:
//           </p>
          
//           <ul className="space-y-3 mb-6">
//             <li className="flex items-start gap-3">
//               <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
//               <span className="text-[#585858]  text-[16px]">Higher yields with fewer inputs</span>
//             </li>
//             <li className="flex items-start gap-3">
//               <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
//               <span className="text-[#585858]  text-[16px]">More efficient water and pesticide use</span>
//             </li>
//             <li className="flex items-start gap-3">
//               <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
//               <span className="text-[#585858]  text-[16px]">Sustainable climate-smart farming</span>
//             </li>
//             <li className="flex items-start gap-3">
//               <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
//               <span className="text-[#585858]  text-[16px]">Increased profitability for farmers</span>
//             </li>
//             <li className="flex items-start gap-3">
//               <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
//               <span className="text-[#585858]  text-[16px]">Protection of ecosystems and natural land</span>
//             </li>
//           </ul>

//           <p className="text-[#585858]  text-[16px] leading-relaxed">
//             They empower farmers not just to grow more, but to grow better — and to do it responsibly.
//           </p>
//         </section>

//         {/* Supporting the future Section */}
//         <section className="mb-12">
//           <h2 className="text-[28px] sm:text-3xl font-medium text-black mb-4">
//             Supporting the future of food
//           </h2>
//           <p className="text-[#585858] text-[16px] leading-relaxed">
//             At our company, we work closely with certified agronomists who translate cutting-edge knowledge to every farm we support. Whether it's through direct consultation, on-site trials, or remote monitoring tools, we make sure every decision is backed by agronomic insight.
//           </p>
//         </section>

//         {/* Science that grows Section */}
//         <section className="mb-12">
//           <h2 className="text-[28px] sm:text-3xl font-medium text-black mb-4">
//             Science that grows with you
//           </h2>
//           <p className="text-[#585858] text-[16px] leading-relaxed mb-4">
//             The things we're tackling agronomists today require more than intuition — they require informed action. Agronomists bring the science, strategy, and support farmers need to listen to a changing world.
//           </p>
//           <p className="text-[#585858] text-[16px] leading-relaxed">
//             Because the future of farming starts with what's beneath our feet — and the experts who know how to nurture it.
//           </p>
//         </section>

//       </div>

//     </div>
//   );
// };

// export default BlogViewMain1;





import React from 'react';
import { Sprout, Droplet, LineChart, Bug, RefreshCw, Database } from 'lucide-react';

const BlogViewMain1 = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br text-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[40px] sm:text-4xl lg:text-[40px] font-medium mb-6 leading-tight">
            Science, strategy, and stewardship from soil to harvest
          </h1>
          <p className="text-[#585858] text-[16px] sm:text-lg leading-relaxed mb-4">
            As agriculture evolves into a data-driven, technology-powered industry, the role of the agronomist has never been more important. These scientists-on-the-scene experts on the high-stakes domain of crop production taking the science into the field helping farmers optimize yields, maintain soil health, and grow sustainably.
          </p>
          <p className="text-[#585858] text-[16px] sm:text-lg leading-relaxed">
            In a world facing climate change, resource scarcity, and food security challenges, agronomists are the advisors shaping the future of farming.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Who are agronomists? Section */}
        <section className="mb-12">
          <h2 className="text-[28px] sm:text-3xl font-medium text-black mb-3">
            Who are agronomists?
          </h2>
          <p className="text-[#585858] text-[16px] leading-relaxed mb-4">
            Agronomists are agricultural scientists who specialize in crop production, soil management, and the overall science of growing plants effectively. Their goal? To improve farming systems, sustainability, and profitability on the farm.
          </p>
          <p className="text-[#585858] text-[16px] leading-relaxed">
            Whether they're walking fields, analyzing soil samples, or interpreting satellite data, agronomists work side-by-side with farmers to turn knowledge into results.
          </p>
        </section>

        {/* Services List */}
        <div className="space-y-8 mb-12">
          
          {/* Service 1 */}
          <div className="flex items-start gap-3 mb-0">
            <h3 className="text-[26px] sm:text-2xl font-medium text-black mb-0">
              1. Soil analysis & fertility planning
            </h3>
          </div>
          <p className="text-[#585858] text-[16px] leading-relaxed -mt-2">
            Healthy crops start with healthy soil. Agronomists test nutrient levels, pH, moisture, and more to create custom fertilization plans that boost plant growth while reducing waste.
          </p>

          {/* Service 2 */}
          <div className="flex items-start gap-3 mb-0">
            <h3 className="text-[26px] sm:text-2xl font-medium text-black mb-0">
              2. Crop selection & rotation strategies
            </h3>
          </div>
          <p className="text-[#585858] text-[16px] leading-relaxed -mt-2">
            Not all crops thrive in every field. Agronomists help farmers choose varieties suited to the local climate, pest risk, and market demand and plan rotations that restore soil and prevent disease.
          </p>

          {/* Service 3 */}
          <div className="flex items-start gap-3 mb-0">
            <h3 className="text-[26px] sm:text-2xl font-medium text-black mb-0">
              3. Pest & disease management
            </h3>
          </div>
          <p className="text-[#585858] text-[16px] leading-relaxed -mt-2">
            Using integrated pest management (IPM), agronomists identify threats early and recommend eco-friendly treatments that protect both yield and biodiversity.
          </p>

          {/* Service 4 */}
          <div className="flex items-start gap-3 mb-0">
            <h3 className="text-[26px] sm:text-2xl font-medium text-black mb-0">
              4. Irrigation & water use efficiency
            </h3>
          </div>
          <p className="text-[#585858] text-[16px] leading-relaxed -mt-2">
            They advise on water-saving techniques, from drip irrigation to soil moisture monitoring, to ensure every drop counts especially in drought-prone regions.
          </p>

          {/* Service 5 */}
          <div className="flex items-start gap-3 mb-0">
            <h3 className="text-[26px] sm:text-2xl font-medium text-black mb-0">
              5. Precision farming & data use
            </h3>
          </div>
          <p className="text-[#585858] text-[16px] leading-relaxed -mt-2">
            Modern agronomists use drones, satellite imagery, and software to provide real-time advice on planting, fertilizing, and harvesting turning complex data into sharper decisions.
          </p>

        </div>

        {/* Why agronomists matter Section */}
        <section className="mb-12">
          <h2 className="text-[28px] sm:text-3xl font-medium text-black mb-3">
            Why agronomists matter
          </h2>
          <p className="text-[#585858] text-[16px] leading-relaxed mb-6">
            Agronomists aren't just scientists they're strategic partners. Their impact includes:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-[#585858] text-[16px]">Higher yields with fewer inputs</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-[#585858] text-[16px]">More efficient water and pesticide use</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-[#585858] text-[16px]">Sustainable climate-smart farming</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-[#585858] text-[16px]">Increased profitability for farmers</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-[#585858] text-[16px]">Protection of ecosystems and natural land</span>
            </li>
          </ul>

          <p className="text-[#585858] text-[16px] leading-relaxed">
            They empower farmers not just to grow more, but to grow better and to do it responsibly.
          </p>
        </section>

        {/* Supporting the future Section */}
        <section className="mb-12">
          <h2 className="text-[28px] sm:text-3xl font-medium text-black mb-3">
            Supporting the future of food
          </h2>
          <p className="text-[#585858] text-[16px] leading-relaxed">
            At our company, we work closely with certified agronomists who translate cutting-edge knowledge to every farm we support. Whether it's through direct consultation, on-site trials, or remote monitoring tools, we make sure every decision is backed by agronomic insight.
          </p>
        </section>

        {/* Science that grows Section */}
        <section className="mb-12">
          <h2 className="text-[28px] sm:text-3xl font-medium text-black mb-3">
            Science that grows with you
          </h2>
          <p className="text-[#585858] text-[16px] leading-relaxed mb-4">
            The things we're tackling agronomists today require more than intuition they require informed action. Agronomists bring the science, strategy, and support farmers need to listen to a changing world.
          </p>
          <p className="text-[#585858] text-[16px] leading-relaxed">
            Because the future of farming starts with what's beneath our feet and the experts who know how to nurture it.
          </p>
        </section>

      </div>
    </div>
  );
};

export default BlogViewMain1;
