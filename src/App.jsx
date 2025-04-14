import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/Loginpage.jsx";
import Loader from "./components/Loader";
import NotFoundPage from "./components/NotFoundPage.jsx";
import Setprofile from "./components/Setprofile";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResources = async () => {
      try {
        // if user signed in load user data here and save in local storage else just continue
        await Promise.all([
          // Add any async resource loading here, e.g., images, API calls
          new Promise((resolve) => setTimeout(resolve, 2000)),
        ]);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load resources:", error);
        setLoading(false); 
      }
    };

    loadResources();

    return () => {
    };
  }, []);

  if (loading) {
    return (
      <div role="status" aria-live="polite" aria-busy="true">
        <Loader />
        <span className="sr-only">Loading application...</span>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/setProfile" element={<Setprofile/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;