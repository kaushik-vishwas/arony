import React, { useState } from "react";


const EnquiryModal = ({ isOpen, onClose }) => {

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Enquiry submitted successfully!");
    onClose();
    setFormData({ fullName: "", mobile: "", email: "", reason: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-lg"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Enquire Now</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="reason"
            placeholder="Reason for enquiry"
            value={formData.reason}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            rows={3}
          />
          <button
            type="submit"
            className="bg-[#4BA625] text-white py-2 rounded hover:bg-[#3d8d1f] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
