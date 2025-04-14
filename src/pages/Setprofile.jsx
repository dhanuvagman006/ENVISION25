import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { heroimg,profileUrl } from "../data/image";
import Cookies from "js-cookie";
import { BACKEND_URL } from "../data/constant";

export default function SetProfile() {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    collegeName: "",
    course: "",
    year: "",
    phoneNumber: "",
    email: "",
    envisionid: "",
  });
  
  const [errors, setErrors] = useState({});
  const [eventReg, setEventReg] = useState(null);

  useEffect(() => {
    axios
      .get(BACKEND_URL + "api/v1/students/getuser", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          console.log(data.student.email);
          setEventReg(data);
          setFormData((prev) => ({
            ...prev,
            email: data.student.email || "",
            envisionid: data.student.envisionid || "",
          }));
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) =>
        toast.error(error?.response?.data?.message || "Error fetching user")
      );
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.collegeName.trim()) newErrors.collegeName = "College name is required";
    if (!formData.course.trim()) newErrors.course = "Course is required";
    if (!formData.year.trim()) newErrors.year = "Year is required";
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(
        BACKEND_URL + "api/v1/students/update",
        { 
          ...formData,
        },
        { withCredentials: true }
      );

      console.log(response);
      Cookies.set("token", response.data.token, { expires: 2, sameSite: "Strict" });
      toast.success(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error(error?.response?.data?.error || error.message || "Profile update failed");
    }
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroimg})` }}
      />
      {/* Backdrop Blur */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/5 z-10" />

      {/* Form Container */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-8 z-20">
        <div className="bg-white/15 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl text-black max-w-lg w-full border border-white/30">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Complete Your Profile
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Profile Photo */}
            <div className="flex justify-center mb-4">
              <img
                src={profileUrl}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-white/50"
              />
            </div>

          {/* Email */}
<div>
  <label className="block text-sm font-medium mb-1">Email</label>
  <input
    type="email"
    value={formData.email}
    disabled
    className="w-full px-4 py-2 bg-white/10 text-black border border-white/30 rounded-lg cursor-not-allowed"
  />
</div>

{/* Envision ID */}
<div>
  <label className="block text-sm font-medium mb-1">Envision ID</label>
  <input
    type="text"
    value={formData.envisionid}
    disabled
    className="w-full px-4 py-2 bg-white/10 text-black border border-white/30 rounded-lg cursor-not-allowed"
  />
</div>


            {/* Name */}
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
                } rounded-lg`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* College Name */}
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
                } rounded-lg`}
                placeholder="Enter your college name"
              />
              {errors.collegeName && <p className="text-red-500 text-sm mt-1">{errors.collegeName}</p>}
            </div>

            {/* Course */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Course <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-white/10 text-black border ${
                  errors.course ? "border-red-500" : "border-white/30"
                } rounded-lg`}
                placeholder="Enter your course"
              />
              {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
            </div>

            {/* Year */}
            <div>
  <label className="block text-sm font-medium mb-1">
    Year <span className="text-red-500">*</span>
  </label>
  <input
    type="text"
    name="year"
    value={formData.year || ""}
    onChange={handleChange}
    className={`w-full px-4 py-2 bg-white/10 text-black border ${
      errors.year ? "border-red-500" : "border-white/30"
    } rounded-lg`}
    placeholder="Enter your year"
  />
  {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
</div>


            {/* Phone Number */}
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
                } rounded-lg`}
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Save Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
