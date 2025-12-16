import React from "react";
import Footer from "../Components/Common/Footer";
import Navbar from "../Components/AboutUs/Navbar";

// Import all images
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import e1 from "../assets/e1.JPG";
import e2 from "../assets/e2.JPG";
import e3 from "../assets/e3.JPG";
import e4 from "../assets/e4.jpg";
import e5 from "../assets/e5.jpg";
import e6 from "../assets/e6.jpeg";
import e7 from "../assets/e7.jpeg";
import e8 from "../assets/e8.jpeg";
import e9 from "../assets/e9.jpg";
import e10 from "../assets/e10.jpeg";

const EventsSection = () => {
  return (
    <>
      <Navbar />
      
      <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full mb-6 border border-green-100">
              <span className="text-sm font-semibold text-green-800 tracking-wide">
                GALLERY COLLECTION
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Event Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A curated collection of memorable moments from our events at Arony Farm
            </p>
          </div>

          {/* Event Grid - 3 columns with full height images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            
            {/* Row 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white h-full">
              <div className="h-full overflow-hidden">
                <img 
                  src={event1} 
                  alt="Event 1" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white h-full">
              <div className="h-full overflow-hidden">
                <img 
                  src={e1} 
                  alt="Event" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white h-full">
              <div className="h-full overflow-hidden">
                <img 
                  src={e2} 
                  alt="Event" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
            </div>

            {/* Row 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white h-full">
              <div className="h-full overflow-hidden">
                <img 
                  src={e3} 
                  alt="Event" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white h-full">
              <div className="h-full overflow-hidden">
                <img 
                  src={e4} 
                  alt="Event" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white h-full">
              <div className="h-full overflow-hidden">
                <img 
                  src={e5} 
                  alt="Event" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
            </div>

            {/* Row 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white h-full">
              <div className="h-full overflow-hidden">
                <img 
                  src={e6} 
                  alt="Event" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white h-full">
              <div className="h-full overflow-hidden">
                <img 
                  src={e7} 
                  alt="Event" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white h-full">
              <div className="h-full overflow-hidden">
                <img 
                  src={e8} 
                  alt="Event" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
            </div>

            {/* Row 4 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white h-full">
              <div className="h-full overflow-hidden">
                <img 
                  src={e9} 
                  alt="Event" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white h-full">
              <div className="h-full overflow-hidden">
                <img 
                  src={e10} 
                  alt="Event" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white h-full">
              <div className="h-full overflow-hidden">
                <img 
                  src={event1} 
                  alt="Event" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default EventsSection;