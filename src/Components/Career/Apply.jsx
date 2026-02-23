import { useState } from "react";
import { Heading, Section, SectionCol } from "../utils";

const Apply = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    resume: null,
    consent: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ✅ REPLACE THIS WITH YOUR ACTUAL FORMSPREE FORM ID
      const formspreeFormId = "xzddowwy"; // Same as in your other component
      
      // Prepare form data for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("department", formData.department);
      formDataToSend.append("consent", formData.consent ? "Yes" : "No");
      formDataToSend.append("_subject", `New Job Application from ${formData.name}`);
      formDataToSend.append("_replyto", formData.email);
      
      // Add resume if uploaded
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      // Send to Formspree
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        method: "POST",
        body: formDataToSend,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        alert("✅ Application submitted successfully! We'll contact you shortly.");
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          department: "",
          resume: null,
          consent: false
        });
        
        // Close modal
        setIsOpen(false);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      
      // Fallback: Use mailto method
      const emailBody = `
Job Application Details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Department: ${formData.department || "Not specified"}
Consent Given: ${formData.consent ? "Yes" : "No"}

Submitted on: ${new Date().toLocaleString()}

Please contact this candidate regarding their application.
      `.trim();

      const subject = `Job Application from ${formData.name}`;
      const mailtoLink = `mailto:kaushikbiawas@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      
      window.location.href = mailtoLink;
      
      alert("📧 Opening email client as fallback. Please click 'Send' to submit your application.");
      
      // Reset form and close modal
      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        resume: null,
        consent: false
      });
      setIsOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Section>
        <SectionCol>
          <div className="flex flex-col items-center w-full text-center gap-10 sm:gap-12 md:gap-16">

            <Heading>How to Apply ?</Heading>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 md:gap-20 w-full max-w-6xl mx-auto">
              {[ 
                {
                  id: 1,
                  title: "Browse Open Positions",
                  text: "Explore our current job openings and find a role that aligns with your skills and career goals."
                },
                {
                  id: 2,
                  title: "Submit Your Application",
                  text: "Apply directly through our website by submitting your resume, cover letter, and any relevant portfolios or work samples."
                },
                {
                  id: 3,
                  title: "Interview Process",
                  text: "If shortlisted, we’ll reach out to schedule interviews to get to know you better and assess your fit for the role."
                },
                {
                  id: 4,
                  title: "Join the Team",
                  text: "Once selected, you’ll receive an offer and details on the onboarding process to get you started on your journey with us."
                }
              ].map((item) => (
                <div key={item.id} className="relative flex flex-col items-center px-4">
                  <span className="absolute -top-8 sm:-top-10 md:-top-12 text-[80px] sm:text-[100px] md:text-[130px] font-light text-blue-100 select-none">
                    {item.id}
                  </span>
                  <h3 className="mt-14 sm:mt-16 md:mt-20 text-[18px] sm:text-[20px] font-semibold text-black z-10">
                    {item.title}
                  </h3>
                  <p className="text-[14px] sm:text-[16px] text-[#444] mt-2 leading-relaxed max-w-xs">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA STRIP */}
            <div className="w-full mt-16 sm:mt-20 md:mt-24">
              <div className="relative w-full rounded-3xl bg-gradient-to-r from-[#f5efe6] to-[#efe4d3] px-6 sm:px-12 md:px-20 py-12 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm overflow-hidden">

                <div className="text-center md:text-left max-w-2xl">
                  <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-semibold text-[#1f3d2b] leading-tight">
                    Ready to grow your career with us?
                  </h2>
                  <p className="mt-4 text-[15px] sm:text-[16px] text-[#4b5563]">
                    Take the next step toward building a greener tomorrow.
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(true)}
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-full bg-[#b88a1b] text-white text-[15px] sm:text-[16px] font-medium hover:bg-[#a67916] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Apply Now →
                </button>

              </div>
            </div>

          </div>
        </SectionCol>
      </Section>

      {/* ================= MODAL ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => !isSubmitting && setIsOpen(false)}
          ></div>

          {/* Modal Box */}
          <div className="relative z-50 w-[95%] max-w-2xl rounded-3xl bg-gradient-to-br from-[#0f5132] to-[#1b7a55] p-8 sm:p-10 text-white shadow-2xl animate-fadeIn">

            {/* Close Button */}
            <button
              onClick={() => !isSubmitting && setIsOpen(false)}
              disabled={isSubmitting}
              className="absolute top-4 right-5 text-white text-xl disabled:opacity-50"
            >
              ✕
            </button>

            <h2 className="text-[20px] sm:text-[24px] font-semibold mb-6">
              Fill the form below to reach out to us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                  className="rounded-lg px-4 py-3 text-black outline-none disabled:opacity-50"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email ID"
                  required
                  disabled={isSubmitting}
                  className="rounded-lg px-4 py-3 text-black outline-none disabled:opacity-50"
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
                disabled={isSubmitting}
                className="w-full rounded-lg px-4 py-3 text-black outline-none disabled:opacity-50"
              />

              <select 
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full rounded-lg px-4 py-3 text-black outline-none disabled:opacity-50"
              >
               <option value="">Select Department</option>
<option value="Senior Agronomist">Senior Agronomist</option>
<option value="Architecture & Design">Architecture & Design</option>
<option value="Sales & Client Relations">Sales & Client Relations</option>
<option value="Marketing & Brand Communication">Marketing & Brand Communication</option>
<option value="Finance & Administration">Finance & Administration</option>
<option value="Legal & Compliance">Legal & Compliance</option>
<option value="Customer Experience & Hospitality">Customer Experience & Hospitality</option>
<option value="Human Resources">Human Resources</option>
<option value="Corporate & Investor Relations">Corporate & Investor Relations</option>
<option value="Creative Studio">Creative Studio</option>
              </select>

              <div>
                <label className="block mb-2">Upload Your Resume</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleInputChange}
                  accept=".pdf,.doc,.docx"
                  disabled={isSubmitting}
                  className="w-full text-sm text-white disabled:opacity-50"
                />
                <p className="text-xs mt-1 text-white/70">Accepted formats: PDF, DOC, DOCX</p>
              </div>

              <div className="flex items-start gap-2 text-sm">
                <input 
                  type="checkbox" 
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="mt-1 disabled:opacity-50"
                />
                <p>
                  I authorize Arony Farms to contact me with updates and
                  notifications via Email/SMS/WhatsApp/Call.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 px-8 py-3 rounded-full bg-[#d4a017] text-white font-medium hover:bg-[#b88a1b] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Apply →"}
              </button>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Apply;