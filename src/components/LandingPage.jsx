import React from "react";
import mainBg from "../assets/homebg.png"; 
import NavBar from "./Navbar";
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
          padding: "2rem",
          minHeight: "200vh",
          color: "white", 
          backgroundColor: "rgba(0, 0, 0, 0.2)", 
        }}
      >
        <NavBar/>
        
      </div>
    </div>
  );
}

export default LandingPage;
