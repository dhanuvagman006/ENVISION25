import React from "react";
import heroimg from "../assets/background1.jpg";
import { auth, provider, signInWithPopup } from "../firebase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      provider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      const useremail=''
      const userprofileurl=''
      navigate("/setprofile");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      // Optionally display error to user
      alert(`Sign-in failed: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroimg})` }}
      />
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/10 z-10" />

      <div className="relative min-h-screen flex items-center justify-center px-4 py-8 z-20">
        <div className="bg-white/20 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-2xl text-center text-white max-w-md w-full border border-white/30">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight">
            Welcome Back
          </h1>
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Sign in with Google"
            disabled={false} // Can be used to disable button during loading
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;