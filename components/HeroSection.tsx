"use client";

import { useEffect, useState } from "react";

const HeroSection = () => {
  const heroVideos = [
    {
      src: "/videos/igen-bg.mp4",
      title: "IGEN Inc.\nCompany Builder",
      subtitle: "스타트업을 위한 컴퍼니 빌더",
    },
    {
      src: "/videos/greenwhale-bg-1.mp4",
      title: "IGEN Inc.\nCompany Builder",
      subtitle: "스타트업을 위한 컴퍼니 빌더",
    },
    {
      src: "/videos/igen-bg.mp4",
      title: "IGEN Inc.\nCompany Builder",
      subtitle: "스타트업을 위한 컴퍼니 빌더",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroVideos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroVideos.length]);

  return (
    <section
      id="hero-section"
      className="relative h-screen w-full overflow-hidden"
    >
      <video
        key={currentSlide}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={heroVideos[currentSlide].src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="container mx-auto px-4 md:px-12 text-left text-white">
          <h1
            className="text-6xl md:text-8xl font-bold tracking-tighter whitespace-pre-wrap"
            style={{ animation: "text-fade-in 1.5s ease-out forwards" }}
          >
            {heroVideos[currentSlide].title}
          </h1>
          <p
            className="mt-4 text-xl md:text-2xl"
            style={{ animation: "text-fade-in 1.5s ease-out forwards" }}
          >
            {heroVideos[currentSlide].subtitle}
          </p>
          <div className="mt-8 flex items-center space-x-4">
            <span className="font-mono text-lg">
              0{currentSlide + 1}
            </span>
            <div className="flex space-x-2">
              {heroVideos.map((_, index) => (
                <div
                  key={index}
                  className={`w-8 h-0.5 transition-colors duration-300 ${
                    index <= currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-lg text-white/50">
              0{heroVideos.length}
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes text-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;