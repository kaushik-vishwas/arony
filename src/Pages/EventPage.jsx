import React from "react";
import Footer from "../Components/Common/Footer";
import Navbar from "../Components/AboutUs/Navbar";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";

const events = [
  {
    title: "Farm Launch Event",
    theme: "Theme - Arony Farm - Sandalwood Farm",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus eget nisi donec lorem ipsum nulla suspendisse. Tempor neque porttitor leo volutpat fusce nunc turpis pretium nulla. Pellentesque amet senectus faucibus nam auctor. Felis sed vel in gravida.",
    button: "View Event",
    image: event1,
    reverse: false,
  },
  {
    title: "Coffee – Interactive 3D Booking",
    theme: "",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus eget nisi donec lorem ipsum nulla suspendisse. Tempor neque porttitor leo volutpat fusce nunc turpis pretium nulla. Pellentesque amet senectus faucibus nam auctor. Felis sed vel in gravida.",
    button: "View Interactive Map",
    image: event2,
    reverse: true,
  },
  {
    title: "Seasonal Harvest Festival",
    theme: "Theme - Autumn Harvest Celebration",
    description:
      "Experience the bounty of nature at our annual harvest festival. Enjoy farm-fresh produce, cooking demonstrations, live music, and family-friendly activities amidst the scenic beauty of Arony Farm. A perfect weekend getaway to connect with nature.",
    button: "Learn More",
    image: event3,
    reverse: false,
  },
];

const EventsSection = () => {
  return (
    <>
      <Navbar />
      
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-sm text-gray-500 mb-2">
              Crafted Moments in Nature's Embrace
            </p>
            <h2 className="text-3xl font-semibold text-gray-900">
              <span className="text-green-600">•</span> Events at Arony
            </h2>
          </div>

          {/* Cards */}
          <div className="space-y-16">
            {events.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row bg-gray-50 rounded-xl overflow-hidden shadow-sm ${
                  item.reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image Container with Fixed Height */}
                <div className="md:w-1/2 h-64 md:h-96"> {/* Fixed height for all images */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  {item.theme && (
                    <p className="text-sm text-gray-500 mb-4">{item.theme}</p>
                  )}

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div>
                    <button className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-green-700">
                      {item.button}
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default EventsSection;