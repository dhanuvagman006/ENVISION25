import React from "react";
import mainBg from "../assets/homebg.png"; 
import NavBar from "./Navbar";
import Hero from "./Hero";
function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${mainBg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          minHeight: "200vh",
          color: "white", 
          backgroundColor: "rgba(0, 0, 0, 0.0)", 
        }}
      >
        <NavBar/>
        <Hero/>
      </div>
    </div>
  );
}

export default LandingPage;
