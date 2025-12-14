import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import event1 from "../../assets/event1.jpg";
import event2 from "../../assets/event2.jpg";
import event3 from "../../assets/event3.jpg";

import event4 from "../../assets/ownership4.png";


export default function EventSection() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  const handleViewEvent = () => {
    navigate("/events");
  };

  return (
    <section className="w-full bg-[#f7f3e8] pb-20 pt-10 px-4 md:px-10 lg:px-20">
      {/* Header */}
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm tracking-widest text-gray-600 uppercase">
          Crafted Moments in Nature's Embrace
        </p>
        <h1 className="text-4xl font-serif text-green-900 mt-2">Events at Arony</h1>
      </motion.div>

      <motion.div 
        className="grid lg:grid-cols-2 gap-10 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left: Large Image */}
        <motion.div 
          className="w-full h-[350px] md:h-[420px] overflow-hidden rounded-xl shadow-md"
          variants={imageVariants}
        >
          <motion.img
            src={event4}
            alt="Event Audience"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* Right: Event Content */}
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-green-900"
          >
            Arony Launch Event
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-sm text-gray-700 tracking-widest uppercase"
          >
            Theme: Arony Farms – Arony
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-gray-700 leading-relaxed"
          >
            Arony is a place that lets you reconnect with yourself. A land of
            peace, that is perfectly blended with a divine purpose. Arony
            goes beyond simply providing a home; it's a 30-acre sanctuary
            inspired by the tranquility of Lord Krishna's heavenly abode.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="bg-green-50 p-4 rounded-lg border border-green-200 text-green-900 italic"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Arony lets you the fruits of your investment blossom from the
            very beginning as it is brimming with green life. Its plantations
            stand tall to give you bountiful harvests.
          </motion.div>

          <motion.button 
            variants={itemVariants}
            onClick={handleViewEvent}
            className="px-6 py-3 bg-green-800 text-white rounded-lg shadow hover:bg-green-900 transition"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Event
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom: Event Cards */}
      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Card 1 */}
        <motion.div 
          className="rounded-xl overflow-hidden shadow bg-white cursor-pointer group"
          variants={cardVariants}
          whileHover="hover"
          onClick={handleViewEvent}
        >
          <div className="overflow-hidden">
            <motion.img 
              src={event1} 
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              alt="Farm Launch Event"
            />
          </div>
          <div className="p-4 font-medium text-gray-800">
            Farm Launch Event
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          className="rounded-xl overflow-hidden shadow bg-white cursor-pointer group"
          variants={cardVariants}
          whileHover="hover"
          onClick={handleViewEvent}
        >
          <div className="overflow-hidden">
            <motion.img 
              src={event2}
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              alt="Coffee - Interactive 3D Booking"
            />
          </div>
          <div className="p-4 font-medium text-gray-800">
            Coffee - Interactive 3D Booking
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          className="rounded-xl overflow-hidden shadow bg-white cursor-pointer group"
          variants={cardVariants}
          whileHover="hover"
          onClick={handleViewEvent}
        >
          <div className="overflow-hidden">
            <motion.img 
              src={event3}
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              alt="Introducing - Coffee Farm"
            />
          </div>
          <div className="p-4 font-medium text-gray-800">
            Introducing - Coffee Farm
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}