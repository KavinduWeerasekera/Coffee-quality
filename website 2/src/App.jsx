import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PredictionForm from "./components/predictionForm";
import AboutSection from "./components/Slider"; // Import the AboutSection component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero id="home" />
      <AboutSection id="about" />
      <PredictionForm id="predict-form" />
      <Footer/>
      

    </div>
  );
}

export default App;
