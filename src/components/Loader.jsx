import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/camel.json";

export default function Loader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4
      transition-all duration-1000 ease-in-out relative overflow-hidden
      ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      style={{
        background: "linear-gradient(135deg,rgb(40, 68, 67) 0%,rgb(116, 155, 150) 100%)",
      }}
    >
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* Subtle Overlay for Depth */}
      <div className="absolute inset-0 bg-black opacity-10 z-0 pointer-events-none" />

      {/* Lottie Camel Animation */}
      <div className="z-10 animate-float">
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            width: "min(220px, 60vw)",
            height: "min(220px, 60vw)",
          }}
        />
      </div>

      {/* Loading Message with Improved Contrast */}
      <p className="mt-6 text-white text-lg sm:text-xl font-semibold z-10 drop-shadow-lg">
        Loading your tropical vibe!
      </p>
    </div>
  );
}
