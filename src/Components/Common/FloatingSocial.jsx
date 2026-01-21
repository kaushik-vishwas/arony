import { useState } from "react";
import { FaWhatsapp, FaPhone, FaFileAlt } from "react-icons/fa";

const FloatingSocial = () => {
  const [open, setOpen] = useState(false);
  const [showDraftModal, setShowDraftModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
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
    setSubmitSuccess(false);

    try {
      // ✅ REPLACE THIS WITH YOUR ACTUAL FORMSPREE FORM ID
      const formspreeFormId = "xzddowwy"; // e.g., "xeqwvjpk"
      
      // Prepare form data for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("investmentAmount", formData.investmentAmount);
      formDataToSend.append("preferredLockIn", formData.preferredLockIn);
      formDataToSend.append("_subject", `New Quote Request from ${formData.name}`);
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
        setSubmitSuccess(true);
        // alert("✅ Quote request sent successfully to kaushikbiawas@gmail.com!");
        
        // Reset form after 2 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            phone: "",
            email: "",
            city: "",
            investmentAmount: "",
            preferredLockIn: ""
          });
          setShowDraftModal(false);
          setSubmitSuccess(false);
        }, 2000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      
      // Fallback: Use mailto method
      const emailBody = `
Quote Request Details:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
City: ${formData.city}
Investment Amount: ${formData.investmentAmount}
Preferred Lock-in Period: ${formData.preferredLockIn}

Submitted on: ${new Date().toLocaleString()}
      `.trim();

      const subject = `Quote Request from ${formData.name}`;
      const mailtoLink = `mailto:kaushikbiawas@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      
      window.location.href = mailtoLink;
      
      alert("📧 Opening email client as fallback. Please click 'Send' to submit your quote request.");
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        investmentAmount: "",
        preferredLockIn: ""
      });
      setShowDraftModal(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDraftClick = (e) => {
    e.preventDefault();
    setShowDraftModal(true);
  };

  return (
    <>
      {/* Draft Modal - Updated with white background and wider layout */}
      {showDraftModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => !isSubmitting && setShowDraftModal(false)}
          />
          
          <div className="relative z-[10000] w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-amber-50">
              <h3 className="text-xl font-bold text-gray-900">Request a Draft/Quote</h3>
              <p className="text-sm text-gray-600 mt-1">Fill in your details to receive a customized quote</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-700 text-sm text-center font-medium">
                    ✅ Your quote request has been sent successfully 
                  </p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed placeholder-gray-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed placeholder-gray-500"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed placeholder-gray-500"
                    placeholder="Enter your city"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Investment Amount</label>
                  <select
                    name="investmentAmount"
                    value={formData.investmentAmount}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select amount</option>
                    <option value="Under 10L">Under ₹10 Lakhs</option>
                    <option value="10L-25L">₹10-25 Lakhs</option>
                    <option value="25L-50L">₹25-50 Lakhs</option>
                    <option value="50L-1Cr">₹50 Lakhs - ₹1 Crore</option>
                    <option value="Above 1Cr">Above ₹1 Crore</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Lock-in Period</label>
                  <select
                    name="preferredLockIn"
                    value={formData.preferredLockIn}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select period</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5-7 years">5-7 years</option>
                    <option value="7+ years">7+ years</option>
                  </select>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowDraftModal(false)}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 text-base font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Submit for Quote"
                  )}
                </button>
              </div>
              
              
            </form>
          </div>
        </div>
      )}

      {/* Existing Floating Social Component - NO UI CHANGES */}
      <div
        className="fixed bottom-6 left-6 z-50 flex flex-col items-center"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* Wrapper with glow effect and shaded dark background */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-2xl -z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
          
          <div className={`relative overflow-hidden shadow-2xl shadow-blue-500/10 group-hover:shadow-blue-500/20 transition-all duration-300 ${
            open ? "rounded-xl" : "rounded-xl"
          }`}>
            
            {/* Draft/Quote - Top icon */}
            <div
              className={`transition-all duration-300 ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
              }`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br from-gray-900/90 to-gray-800/90 flex items-center justify-center ${
                open ? "border-b border-gray-700/30" : ""
              }`}>
                <a 
                  href="#" 
                  onClick={handleDraftClick}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-orange-500/30"
                >
                  <FaFileAlt size={12} />
                </a>
              </div>
            </div>

            {/* Call */}
            <div
              className={`transition-all duration-300 delay-75 ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
              }`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-900/90 to-gray-800/90 flex items-center justify-center border-b border-gray-700/30">
                <a
                  href="tel:+918971874251"
                  aria-label="Call us"
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-blue-500/30"
                >
                  <FaPhone size={11} />
                </a>
              </div>
            </div>

            {/* WhatsApp + Contact Us (Always visible) */}
            <div className={`w-16 bg-gradient-to-br from-gray-900/90 to-gray-800/90 flex flex-col items-center py-2 ${
              open ? "" : "rounded-xl"
            }`}>
              <a 
                href="#"
                className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-green-500/30 mb-1"
              >
                <FaWhatsapp size={14} />
              </a>
              <span className="text-[7px] text-white/90 tracking-wide font-medium">
                CONTACT US
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingSocial;