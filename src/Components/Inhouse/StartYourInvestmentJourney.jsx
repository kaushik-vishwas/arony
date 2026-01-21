import { useState } from "react";

export default function StartYourInvestmentJourney() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    investmentAmount: "",
    preferredLockIn: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ✅ REPLACE THIS WITH YOUR ACTUAL FORMSPREE FORM ID
      const formspreeFormId = "xzddowwy"; // Same as in FloatingSocial component
      
      // Prepare form data for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("investmentAmount", formData.investmentAmount);
      formDataToSend.append("preferredLockIn", formData.preferredLockIn);
      formDataToSend.append("_subject", `New Investment Deck Request from ${formData.name}`);
      formDataToSend.append("_replyto", formData.email);

      // Send to Formspree
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        method: "POST",
        body: formDataToSend,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        alert("✅ Request submitted successfully! We'll send you the investment deck shortly.");
        
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          investmentAmount: "",
          preferredLockIn: ""
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      
      // Fallback: Use mailto method
      const emailBody = `
Investment Deck Request Details:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
City: ${formData.city}
Investment Amount: ${formData.investmentAmount}
Preferred Lock-in Period: ${formData.preferredLockIn}

Submitted on: ${new Date().toLocaleString()}

Please send the investment deck to this email.
      `.trim();

      const subject = `Investment Deck Request from ${formData.name}`;
      const mailtoLink = `mailto:kaushikbiawas@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      
      window.location.href = mailtoLink;
      
      alert("📧 Opening email client as fallback. Please click 'Send' to submit your request.");
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        investmentAmount: "",
        preferredLockIn: ""
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
            disabled={isSubmitting}
            className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-300 disabled:opacity-50"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
            disabled={isSubmitting}
            className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-300 disabled:opacity-50"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Id"
            required
            disabled={isSubmitting}
            className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-300 disabled:opacity-50"
          />

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="City"
            disabled={isSubmitting}
            className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-lime-300 disabled:opacity-50"
          />

          <select 
            name="investmentAmount"
            value={formData.investmentAmount}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className="w-full border rounded-lg px-4 py-3 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-lime-300 disabled:opacity-50"
          >
            <option value="">Investment Amount</option>
            <option value="₹10L – ₹25L">₹10L – ₹25L</option>
            <option value="₹25L – ₹50L">₹25L – ₹50L</option>
            <option value="₹50L+">₹50L+</option>
          </select>

          <select 
            name="preferredLockIn"
            value={formData.preferredLockIn}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className="w-full border rounded-lg px-4 py-3 text-sm text-gray-500 outline-none focus:ring-2 focus:ring-lime-300 disabled:opacity-50"
          >
            <option value="">Preferred Lock In</option>
            <option value="3 Years">3 Years</option>
            <option value="5 Years">5 Years</option>
            <option value="7 Years">7 Years</option>
          </select>

          <div className="md:col-span-2 pt-4 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#D0F24B] hover:bg-lime-300 text-black px-12 py-2 rounded-full flex items-center gap-2 font-medium transition group pr-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="mr-[20px] text-[16px]">
                {isSubmitting ? "Submitting..." : "Submit"}
              </span>
              <span className="bg-green-900 text-white w-9 h-9 flex items-center justify-center rounded-full -mr-4 transition-transform group-hover:translate-x-1">
                {isSubmitting ? (
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
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
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}