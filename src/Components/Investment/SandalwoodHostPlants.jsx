import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import sandalwoodImage from "../../assets/sandletree.jpg";
import Navbar from "../AboutUs/Navbar";
import Footer from "../Common/Footer";

const SandalwoodHostPlants = () => {
  const navigate = useNavigate();

  const content = {
    intro: "Sandalwood requires host plants because it is a partial root parasite and draws nutrients from nearby plants during its growth stages.",
    
    chikku: {
      title: "Chikku (Sapota) as a Host Plant",
      points: [
        "Chikku is an excellent long-term host plant for sandalwood.",
        "It has a strong root system that supports sandalwood nutrient absorption.",
        "Provides dual income through fruit yield while sandalwood matures.",
        "Well-suited for managed farmland models due to low maintenance and commercial value."
      ]
    },
    
    guava: {
      title: "Guava as a Host Plant",
      points: [
        "Guava works well as a primary or secondary host plant.",
        "Fast-growing and helps sandalwood establish in early stages.",
        "Generates regular fruit income within 2–3 years.",
        "Improves overall soil health and farm productivity."
      ]
    },
    
    benefits: {
      title: "Benefits of Using Chikku & Guava as Host Plants",
      points: [
        "Enhances sandalwood growth and survival rate.",
        "Creates multi-crop revenue streams.",
        "Efficient land utilization with sustainable farming.",
        "Reduces risk by combining long-term and short-term returns."
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Navbar />
      
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Crops
        </button>
      </div>

      {/* Main Content - Increased width */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Hero Section - Full width */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12">
          <div className="p-10 md:p-14">
            <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
              Sandalwood Host Plants
            </div>
            
            <div className="relative h-72 rounded-2xl overflow-hidden mb-10">
              <img
                src={sandalwoodImage}
                alt="Sandalwood Tree"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-5xl mx-auto">
              {content.intro}
            </p>
          </div>
        </div>

        {/* Chikku Section - Wider */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-10 w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-emerald-800">
            {content.chikku.title}
          </h2>
          <ul className="space-y-6">
            {content.chikku.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <div className="w-7 h-7 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  ✓
                </div>
                <span className="text-gray-700 text-xl leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Guava Section - Wider */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-10 w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-emerald-800">
            {content.guava.title}
          </h2>
          <ul className="space-y-6">
            {content.guava.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <div className="w-7 h-7 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  ✓
                </div>
                <span className="text-gray-700 text-xl leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits Section - Wider with gradient */}
        <div className="bg-gradient-to-r from-emerald-50 via-white to-teal-50 border-2 border-emerald-200 rounded-2xl shadow-xl p-10 w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-emerald-800">
            {content.benefits.title}
          </h2>
          <ul className="space-y-6">
            {content.benefits.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <div className="w-7 h-7 bg-white text-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 shadow-sm">
                  ✓
                </div>
                <span className="text-gray-700 text-xl leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SandalwoodHostPlants;