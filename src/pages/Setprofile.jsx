import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { bgimg,profileUrl } from "../data/image";
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

  return (<div className="min-h-screen w-full bg-cover bg-center relative overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: `url(${bgimg})` }}
  />
  <div className="absolute inset-0 backdrop-blur-xl bg-black/40 z-10" />

  <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-10">
    <div className="bg-white/10 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-8 sm:p-10 max-w-2xl w-full transition-all duration-300 hover:scale-[1.01]">
      <h1 className="text-3xl font-extrabold text-white mb-6 text-center drop-shadow-lg">
         Set Up Your Profile
      </h1>

      <div className="flex justify-center mb-6">
        <img
          src={profileUrl}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover ring-4 ring-white/30 shadow-md transition duration-300 hover:scale-105"
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email and ID (disabled) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-white text-sm mb-1 block">Email</label>
            <input
              type="email"
              value={formData.email}
              disabled
              className="w-full px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg cursor-not-allowed"
            />
          </div>
          <div>
            <label className="text-white text-sm mb-1 block">Envision ID</label>
            <input
              type="text"
              value={formData.envisionid}
              disabled
              className="w-full px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg cursor-not-allowed"
            />
          </div>
        </div>

        {/* Editable Fields */}
        {[
          { label: "Name", name: "name", type: "text", required: true },
          { label: "College Name", name: "collegeName", type: "text", required: true },
          { label: "Course", name: "course", type: "text", required: true },
          { label: "Year", name: "year", type: "text", required: true },
          { label: "Phone Number", name: "phoneNumber", type: "tel", required: true },
        ].map(({ label, name, type, required }) => (
          <div key={name}>
            <label className="text-white text-sm mb-1 block">
              {label} {required && <span className="text-red-400">*</span>}
            </label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={`Enter your ${label.toLowerCase()}`}
              className={`w-full px-4 py-2 bg-white/10 text-white border ${
                errors[name] ? "border-red-500" : "border-white/20"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all`}
            />
            {errors[name] && (
              <p className="text-red-400 text-sm mt-1">{errors[name]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full mt-4 py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg hover:from-orange-500 hover:to-blue-600 transition-all duration-300"
        >
          Save Profile
        </button>
      </form>
    </div>
  </div>
</div>

  );
}
