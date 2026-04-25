"use client";

import { useState } from "react";

export default function DownloadModal({
  open,
  onClose,
  pdfUrl,
  fileName,
  title,
}) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const err = {};

    if (!formData.email.trim()) {
      err.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      err.email = "Please enter a valid email";
    }

    if (formData.name && !/^[a-zA-Z\s]+$/.test(formData.name)) {
      err.name = "Only letters are allowed";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const downloadPdf = () => {
    if (!validate()) return;

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onClose();

    setFormData({
      email: "",
      name: "",
    });

    setErrors({});
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center px-8 pt-8 pb-4">
          <h2 className="text-md md:text-2xl text-[#0F72B1] font-regular">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-3xl font-light flex items-center justify-center transition-colors cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-8 pb-6">
          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-xl md:text-2xl font-medium text-gray-700 mb-2">
              Email <span style={{color: "#d0261d"}}>*</span>
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full border rounded-2xl h-14 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-[#0F72B1] transition-all ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 mt-2 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-xl md:text-2xl font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name (optional)"
              className={`w-full border rounded-2xl h-14 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-[#0F72B1] transition-all ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 mt-2 text-sm">{errors.name}</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8">
          <button
            onClick={downloadPdf}
            className="w-full bg-[#0F72B1] hover:bg-[#0d62a0] text-white rounded-2xl py-4 text-xl md:text-2xl font-medium transition-colors cursor-pointer"
          >
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
}