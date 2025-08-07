import React from "react";
import { Button } from "@/components/ui/button";
import coffeeImage from "@/assets/images/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg";

const Hero = () => {
  // Smooth scroll helper
  const smoothScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 min-h-[70vh] flex items-center w-screen"
      id="home"
    >
      <div className="max-w-7xl mx-auto w-full px-8 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          {/* Text Content - moved more towards center */}
          <div className="flex-1 max-w-2xl text-center md:text-left md:pl-8">
            <h1 className="text-5xl font-extrabold text-yellow-900 drop-shadow-md mb-6 leading-tight">
              Discover Your Perfect Coffee Quality
            </h1>
            <p className="text-lg text-yellow-800 mb-8">
              Predict, analyze, and enhance the quality of your coffee beans with
              our advanced AI-powered tools. Brew the best cup every time.
            </p>
            <div className="flex justify-center md:justify-start gap-6">
              <Button
                variant="default"
                size="lg"
                className="border-yellow-700 text-yellow-700 hover:bg-yellow-100"
                onClick={() => smoothScrollTo("predict-form")}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-700 text-yellow-700 hover:bg-yellow-100"
                onClick={() => smoothScrollTo("about-section")}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Coffee Image - moved more to the right */}
          <div className="flex-1 flex justify-center md:justify-end md:pr-12">
            <div className="relative max-w-md w-full md:ml-8">
              <img
                src={coffeeImage}
                alt="Coffee Cup"
                className="rounded-xl shadow-lg w-full h-auto transform transition-transform duration-300 hover:scale-105"
              />
              {/* Optional: Add a subtle background effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-200/30 to-amber-300/30 rounded-2xl -z-10 blur-lg opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;