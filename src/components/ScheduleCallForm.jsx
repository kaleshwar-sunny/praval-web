"use client";

import { useState } from "react";
import Link from "next/link";

export default function ScheduleCallForm() {
  const countries = [
    "United States",
    "China",
    "India",
    "Japan",
    "Germany",
    "United Kingdom",
    "France",
    "Italy",
    "Canada",
    "Australia",
    "Brazil",
    "South Korea",
    "Russia",
    "Saudi Arabia",
    "South Africa",
    "Mexico",
    "Indonesia",
    "Turkey",
    "Netherlands",
    "Switzerland",
    "Singapore",
    "United Arab Emirates"
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    question: "",
    location: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validatePhone = (phone) => {
    // Remove any whitespace
    const cleaned = phone.trim();
    
    // Check if empty
    if (!cleaned) return false;
    
    // Check if it contains only numbers
    const numbersOnlyRegex = /^\d+$/;
    
    if (!numbersOnlyRegex.test(cleaned)) {
      return false; // Contains special characters or letters
    }
    
    // Check minimum length (at least 7 digits)
    if (cleaned.length < 7) {
      return false;
    }
    
    // Check maximum length (at most 15 digits)
    if (cleaned.length > 15) {
      return false;
    }
    
    return true;
  };

  const validateEmail = (email) => {
    // Industry-level email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!email) return false;
    
    // Check basic format
    if (!emailRegex.test(email)) return false;
    
    // Additional checks
    const [localPart, domain] = email.split('@');
    
    // Check minimum lengths
    if (localPart.length < 1 || localPart.length > 64) return false;
    if (domain.length < 1 || domain.length > 255) return false;
    
    // Check for consecutive dots
    if (email.includes('..')) return false;
    
    // Check for valid domain TLD (at least one dot in domain)
    if (!domain.includes('.')) return false;
    
    // Check TLD length
    const tld = domain.split('.').pop();
    if (tld.length < 2) return false;
    
    // Check for common disposable email domains (optional additional validation)
    const disposableDomains = ['tempmail.com', 'throwaway.com', 'guerrillamail.com'];
    if (disposableDomains.includes(domain.toLowerCase())) return false;
    
    return true;
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation - must be more than 3 letters
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length <= 3) {
      newErrors.name = "Name must be more than 3 letters";
    }

    // Email validation - industry level
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation - mandatory
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("API RESPONSE:", result);

      if (!response.ok) {
        console.log(result?.error || 'Failed to send email');
      }

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          question: "",
          location: "",
          message: ""
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative mt-12 md:mt-0 py-12 text-left">
      {/* FULL BACKGROUND IMAGE */}
      <div
        className="absolute bg-black top-0 left-0 w-full h-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/scheduleCall.png')" }}
      />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-black/40 pointer-events-none" />

      <div className="relative container mx-auto px-6">
        <h2 className="text-base md:text-4xl font-bold mb-4 md:mb-12 text-white text-center">
          Schedule a call with our team today
        </h2>
        <div className="bg-[#F6F6F6] rounded-lg border border-[#F6F6F6]
          max-w-8xl w-full mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FORM */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field 
                label="Name*" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
              />
              <Field 
                label="Email*" 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
              />
              <Field 
                label="Phone*" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                error={errors.phone}
              />
              <Field 
                label="Organization" 
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
              />
              <SelectField 
                label="I have a question about:" 
                options={["Data Acceleration", "Data Analytics", "Platforms", "Others"]} 
                name="question"
                value={formData.question}
                onChange={handleInputChange}
              />
              <SelectField 
                label="Location" 
                options={countries}
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-primaryText mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="2"
                  className={`w-full h-12 bg-white border rounded-sm px-3 py-2
                    text-primaryText placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    hover:border-gray-400 transition-colors duration-150 border-gray-400`}
                />
              </div>

              <div className="md:col-span-2 flex flex-col items-center mt-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0F72B1] text-white px-10 py-3 rounded-sm cursor-pointer
                    hover:bg-[#0d5f91] disabled:opacity-50 disabled:cursor-not-allowed
                    transition-colors duration-150"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                
                {submitStatus === "success" && (
                  <p className="text-[#0F72B1] mt-2">Form submitted successfully!</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 mt-2">Failed to submit. Please try again.</p>
                )}
              </div>
            </form>
          </div>

          {/* WHAT HAPPENS NEXT — DESKTOP ONLY */}
          <div className="hidden lg:block pl-8 border-l border-gray-300">
            <h3 className="text-xl font-semibold mb-8">
              What Happens Next?
            </h3>

            <Step number="01" text="Our team reach out to you." />
            <Step
              number="02"
              text="Our experts get in touch with you to understand your requirements."
            />
            <Step
              number="03"
              text="We discuss and propose project estimates and timelines."
              isLast
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function Field({ label, type = "text", name, value, onChange, error }) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <input 
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full bg-white border rounded-sm px-3 py-2 
          ${error ? 'border-red-500' : 'border-gray-400'}`} 
      />
      {error && (
        <p className="text-xs mt-1" style={{color: "red"}}>{error}</p>
      )}
    </div>
  );
}

function SelectField({ label, options = [], name, value, onChange, error }) {
  return (
    <div>
      <label className="block text-sm font-medium text-primaryText mb-1">
        {label}
      </label>
      <select 
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border rounded-sm px-3 py-2 
          text-primaryText bg-white
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${error ? 'border-red-500' : 'border-gray-400'}`}
      >
        <option value="" className="text-primaryText">Please select</option>
        {options.map((option, index) => (
          <option key={index} value={option} className="text-primaryText">
            {option}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-xs mt-1" style={{color: "red"}}>{error}</p>
      )}
    </div>
  );
}

function Step({ number, text, isLast }) {
  return (
    <div className="relative flex gap-6">
      {/* Step circle with number */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-sm bg-gray-600 text-white flex items-center justify-center font-semibold z-10 relative">
          {number}
        </div>
        
        {/* Vertical connecting line */}
        {!isLast && (
          <div className="w-px h-full bg-gray-300 absolute top-10 left-5 bottom-0" />
        )}
      </div>
      
      {/* Step content */}
      <div className="pb-8">
        <p className="text-primaryText">{text}</p>
      </div>
    </div>
  );
}