import React, { useEffect, useState } from 'react';
import { Play, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/daon8me5h/video/upload/v1755705590/lv_0_20250820165358_hvf3sr.mp4"
          type="video/mp4"
        />
        {/* Fallback for browsers that don't support video */}
        <div className="w-full h-full bg-gradient-to-b from-blue-900 to-blue-600"></div>
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Content */}
      <div className="relative flex items-center h-screen max-w-7xl mx-auto px-6">
        <div className={`max-w-2xl transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 leading-tight">
            The Ocean Wrote Our Story
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 font-light">
            From small-town breaks to world-class waves, this is the journey of the Cola Bros — two surfing brothers chasing both dreams and tides.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10 max-w-xl">
            Follow the Cola Bros as they dominate the World Surf League, pushing boundaries 
            and redefining what's possible on the waves. This is their story of brotherhood, 
            competition, and the relentless pursuit of excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => {
                document.getElementById('stories')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="flex items-center justify-center gap-3 bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors duration-200"
            >
              <Play size={20} fill="currentColor" />
              Watch Now
            </button>
            
            <button className="flex items-center justify-center gap-3 bg-gray-600/50 backdrop-blur-sm text-white px-8 py-3 rounded font-semibold hover:bg-gray-600/70 transition-colors duration-200">
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/70" />
      </div>
    </section>
  );
};

export default Hero;