import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Preloader from "./Preloader";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Career from "./Pages/Career";
import ContactUs from "./Pages/ContactUs";
import ProjectPage from "./Pages/ProjectPage";
import ProjectSandalwood from "./Pages/ProjectSandalwood";
import ProjectMango from "./Pages/ProjectMango";
import ProjectCoffee from "./Pages/ProjectCoffee";
import ProjectMountains from "./Pages/ProjectMountains.jsx";
import Coffee from "./Pages/Coffee";
import Mango from "./Pages/Mango";
import Blog from "./Pages/Blog";
import BlogView from "./Pages/BlogView";
import EventPage from "./Pages/EventPage";
import Inhouse from "./Pages/Inhouse";
import Investment from "./Pages/Investment";
import SandalwoodHostPlants from "./Components/Investment/SandalwoodHostPlants";


import FloatingSocial from "./Components/Common/FloatingSocial";

export default function App() {
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    // Preloader visible for 3 sec
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; // show loader always first
  }

  return (
    <Router>
      <FloatingSocial />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/project-page" element={<ProjectPage />} />
        <Route path="/project-mango" element={<ProjectMango />} />
        <Route path="/project-coffee-malnad-mist" element={<ProjectCoffee />} />
        <Route path="/project-coffee-mountains-breath" element={<ProjectMountains />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/mango" element={<Mango />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/blog-view" element={<BlogView />} />
        <Route path="/farmland-investment" element={<Inhouse />} />
        <Route path="/plant-nursery" element={<Investment />} />
        <Route path="/sandalwood-host-plants" element={<SandalwoodHostPlants />} />

      </Routes>
    </Router>
  );
}
