import React, { useEffect, useState } from "react";
import heroimg from "../assets/background1.jpg";
import { auth, provider, signInWithPopup } from "../firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!auth) {
      console.error("Firebase auth is not initialized");
      setError("Authentication service unavailable");
      setLoading(false);
      return;
    }

    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        if (user) {
          const userInfo = {
            email: user.email || "No email provided",
            name: user.displayName || "Anonymous",
            profileUrl: user.photoURL || "https://via.placeholder.com/150",
          };
          setUserDetails(userInfo);
          navigate("/setprofile", { state: { userDetails: userInfo } });
        }
        setLoading(false);
      },
      (err) => {
        console.error("Auth state error:", err);
        setError("Failed to check authentication status");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [navigate]);

  const handleGoogleSignIn = async () => {
    if (!provider || !auth) {
      alert("Authentication service is not configured properly");
      return;
    }

    try {
      setError(null);
      provider.setCustomParameters({ prompt: "select_account" });
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userInfo = {
        email: user.email || "No email provided",
        name: user.displayName || "Anonymous",
        profileUrl: user.photoURL || "https://via.placeholder.com/150",
      };

      // Send ID token to backend
      const idToken = await user.getIdToken();
      await axios.post(
        "http://localhost:8506/api/v1/students/login",
        { idToken },
        { headers: { "Content-Type": "application/json" } }
      );

      setUserDetails(userInfo);
      navigate("/setprofile", { state: { userDetails: userInfo } });
    } catch (error) {
      console.error("Error:", error);
      let errorMessage = "Sign-in failed. Please try again.";
      if (error.code === "auth/popup-blocked") {
        errorMessage = "Popup was blocked. Please allow popups.";
      } else if (error.code === "auth/network-request-failed") {
        errorMessage = "Network error. Please check your connection.";
      } else if (error.isAxiosError) {
        errorMessage = "Failed to communicate with server. Please try again.";
      }
      setError(errorMessage);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-cover bg-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroimg})` }}
      />
      <div className="absolute inset-0 backdrop-blur-2xl bg-black/40 z-10" />

      <div className="relative min-h-screen flex items-center justify-center px-4 py-8 z-20">
        <div className="bg-white/25 backdrop-blur-lg p-8 sm:p-12 rounded-2xl shadow-2xl text-center text-white max-w-lg w-full border border-white/30">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight">
            Welcome Back
          </h1>
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-white text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
            aria-label="Sign in with Google"
            disabled={loading}
          >
            Sign in with Google
          </button>
          {error && <p className="mt-4 text-red-300 text-sm">{error}</p>}
        </div>
      </div>
    </div>
  );
}