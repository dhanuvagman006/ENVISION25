import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import heroimg from "../assets/background1.jpg";

function SetProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const userDetails = location.state?.userDetails || {
    email: "No email",
    name: "Anonymous",
    profileUrl: "https://via.placeholder.com/150",
  };

  // State for form fields
  const [formData, setFormData] = useState({
    name: userDetails.name || "",
    collegeName: "",
    city: "",
    phoneNumber: "",
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate and submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.collegeName.trim())
      newErrors.collegeName = "College name is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Phone number must be 10 digits";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid, proceed with submission
    console.log("Profile Data:", {
      email: userDetails.email,
      profileUrl: userDetails.profileUrl,
      ...formData,
    });

    // TODO: Save to backend (e.g., Firestore) or navigate
    navigate("/dashboard", {
      state: { userDetails: { ...userDetails, ...formData } },
    });
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroimg})` }}
      />
      {/* Backdrop Blur */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/10 z-10" />

      {/* Form Container */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-8 z-20">
        <div className="bg-white/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl text-black max-w-lg w-full border border-white/30">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Complete Your Profile
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Profile Photo (Unchangeable) */}
            <div className="flex justify-center mb-4">
              <img
                src={userDetails.profileUrl}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-white/50"
              />
            </div>

            {/* Email (Unchangeable) */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={userDetails.email}
                disabled
                className="w-full px-4 py-2 bg-white/10 text-black border border-white/30 rounded-lg cursor-not-allowed"
              />
            </div>

            {/* Name (Required) */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-white/10 text-black border ${
                  errors.name ? "border-red-500" : "border-white/30"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* College Name (Required) */}
            <div>
              <label className="block text-sm font-medium mb-1">
                College Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-white/10 text-black border ${
                  errors.collegeName ? "border-red-500" : "border-white/30"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50`}
                placeholder="Enter your college name"
              />
              {errors.collegeName && (
                <p className="text-red-500 text-sm mt-1">{errors.collegeName}</p>
              )}
            </div>

            {/* City (Required) */}
            <div>
              <label className="block text-sm font-medium mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-white/10 text-black border ${
                  errors.city ? "border-red-500" : "border-white/30"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50`}
                placeholder="Enter your city"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>

            {/* Phone Number (Required) */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-white/10 text-black border ${
                  errors.phoneNumber ? "border-red-500" : "border-white/30"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50`}
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Save Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SetProfile;