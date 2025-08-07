import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Coffee, TrendingUp, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import plot1 from "../assets/images/plot1.png";
import plot2 from "../assets/images/plot2.png";
import plot3 from "../assets/images/plot3.png";

const AboutSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      img: plot1,
      text: "This plot shows that there no Outstanding coffee and the minority class of not a specialty was removed.",
      icon: Coffee,
      title: "Data Distribution Analysis"
    },
    {
      img: plot2,
      text: "Here we see the most important features that affect the coffee quality, with Aftertaste being the most significant.",
      icon: TrendingUp,
      title: "Feature Importance"
    },
    {
      img: plot3,
      text: "Confusion matrix shows that our model has shown a good accuracy in identifying the category, we used XGBoost as our model.",
      icon: Target,
      title: "Model Performance"
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("about-section");
      if (!section) return;
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        setIsVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleMouseMove = (e, container) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    container.style.transform = `perspective(1000px) rotateX(${y * 2}deg) rotateY(${x * 2}deg) translateZ(10px)`;
  };

  const handleMouseLeave = (container) => {
    container.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  return (
    <div className="w-full bg-gradient-to-br from-amber-50 via-orange-100 to-yellow-200 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-300/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-yellow-300/20 to-amber-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <section
        id="about-section"
        className={`max-w-6xl mx-auto px-6 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-amber-200 mb-6">
            <Coffee className="w-6 h-6 text-amber-600" />
            <span className="text-amber-800 font-semibold">Data Analysis</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-800 bg-clip-text text-transparent">
            Analysis Plots
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our comprehensive coffee quality analysis through interactive visualizations
          </p>
        </div>

        {/* Custom Carousel */}
        <div className="relative">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {slides.map(({ img, text, icon: Icon, title }, index) => (
                    <div key={index} className="w-full flex-shrink-0 p-8">
                      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
                        {/* Image Section */}
                        <div 
                          className="group cursor-pointer"
                          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                        >
                          <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-amber-100 to-orange-100 p-4 transition-all duration-500 group-hover:shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img
                              src={img}
                              alt={`${title} visualization`}
                              className="w-full h-96 object-contain rounded-xl transition-all duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-6">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl text-white shadow-lg">
                              <Icon className="w-8 h-8" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                              <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2"></div>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 text-lg leading-relaxed font-medium">
                            {text}
                          </p>
                          
                          {/* Stats or additional info */}
                          <div className="flex gap-4 pt-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-amber-600">{index + 1}</div>
                              <div className="text-sm text-gray-500">Plot {index + 1}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold text-orange-600">XGBoost</div>
                              <div className="text-sm text-gray-500">Model</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-yellow-600">97%</div>
                              <div className="text-sm text-gray-500">Accuracy</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
                <button
                  onClick={prevSlide}
                  className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-amber-600" />
                </button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
                <button
                  onClick={nextSlide}
                  className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-amber-600" />
                </button>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                <div className="flex gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                        index === activeSlide 
                          ? "w-12 h-3 bg-gradient-to-r from-amber-400 to-orange-500" 
                          : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                      }`}
                    >
                      {index === activeSlide && (
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Auto-play indicator */}
          <div className="flex items-center justify-center mt-6">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              isAutoPlaying ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
            }`}>
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-sm font-medium">
                {isAutoPlaying ? 'Auto-playing' : 'Manual control'}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;