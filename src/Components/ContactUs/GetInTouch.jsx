import React, { useState } from 'react';
import leafgrn from "../../assets/leaf-grn.png";
import { Globe } from "lucide-react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    project: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <section className="min-h-screen bg-[#FAFAFA] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Get in touch badge */}
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
              <img
                src={leafgrn}
                alt="leaf icon"
                className="w-5 h-5 object-contain"
              />
              <span className="text-black text-[16px] font-medium">Get in touch</span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-[40px] md:text-5xl lg:text-[40px] font-medium text-black leading-tight">
                We look forward to
                <br />
                hearing from you.
              </h2>
            </div>

            {/* Description */}
            <p className="text-[#585858] text-[16px] leading-relaxed max-w-xl">
              We’re committed to clear communication, fast responses, and
              personalized support every step of the way.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 pt-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#CF7A19] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#4BA424] text-[16px] font-medium">Arony Farms Pvt. Ltd. Block A, 3rd Floor, Cartlon Towers, Indiranagar, Banglalore - 560008</span>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#CF7A19] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="text-[#4BA424] text-[16px] font-medium">+91-89718-74251</span>
                  <span className="hidden sm:inline text-gray-400">,</span>
                  <span className="text-[#4BA424] text-[16px] font-medium">+91-93805-97521</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#CF7A19] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-[#4BA424] text-[16px] font-medium">sales@aronyfarms.com</span>
              </div>

              {/* Website */}
              <div className="flex items-start gap-3">
                {/* Globe Icon */}
                <Globe className="w-5 h-5 text-[#CF7A19] mt-1 flex-shrink-0" />

                <a
                  href="https://www.aronyfarms.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4BA424] text-[16px] font-medium hover:underline"
                >
                  www.aronyfarms.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
            <div className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[16px] font-normal text-[#585858] mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full bg-[#FAFAFA]  px-4 py-3  rounded-lg focus:ring-2  focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[16px] font-normal text-[#585858] mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full bg-[#FAFAFA] px-4 py-3  rounded-lg focus:ring-2  focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[16px] font-normal text-[#585858] mb-2">
                    Your phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone"
                    className="w-full bg-[#FAFAFA]  px-4 py-3  rounded-lg focus:ring-2  focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[16px] font-normal text-[#585858] mb-2">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full bg-[#FAFAFA]  px-4 py-3  rounded-lg focus:ring-2  focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Project Select */}
              <div>
                <label className="block text-[16px] font-normal text-[#585858] mb-2">
                  Select Project
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-[#585858]  rounded-lg focus:ring-2  focus:border-transparent outline-none transition-all bg-[#FAFAFA] "
                >
                  <option value="">Project 1</option>
                  <option value="project2">Project 2</option>
                  <option value="project3">Project 3</option>
                  <option value="project4">Project 4</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[16px] font-normal text-[#585858] mb-2">
                  Your message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows="5"
                  className="w-full bg-[#FAFAFA]  px-4 py-3  rounded-lg focus:ring-2  focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#4BA424] hover:bg-green-700 text-white text-[16px] font-medium py-4 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;