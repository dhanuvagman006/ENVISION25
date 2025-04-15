import { useEffect, useState } from "react";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Hero.jsx";
import LoginPage from "./pages/Login.jsx";
import Loader from "./components/Loader";
import NotFoundPage from "./components/NotFoundPage.jsx";

import PrivateRoute from "./PrivateRoute.jsx";
import NavBar from "./components/Navbar.jsx";
import SetProfile from "./pages/Setprofile.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import TeamSection from "./components/Team.jsx";
import Home2 from "./components/Home2.jsx"

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

    return () => {};
  }, []);

  if (loading) {
    return (
      <div role="status" aria-live="polite" aria-busy="true">
        <Loader />
      </div>
    );
  }

  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={ <><NavBar/><Home /><Home2/><TeamSection/><Contact/><Footer/></>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/setprofile" element={<SetProfile />} />
        <Route path='/test' element={<Home2/>}/>
        <Route path='/tech' element={<><NavBar/></>}/>
        <Route path='/mega' element={<><NavBar/></>}/>
        <Route path='/nontech' element={<><NavBar/></>}/>

        <Route element={<PrivateRoute />}> 
        </Route>


        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
