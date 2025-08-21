import React, { useEffect, useState, useRef } from 'react';
import { Play, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = (): void => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = (): void => {
    setVideoError(true);
  };

  const scrollToStories = (): void => {
    document.getElementById('stories')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Background Video */}
      {!videoError ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          aria-label="Background surfing video"
        >
          <source
            src="https://res.cloudinary.com/daon8me5h/video/upload/v1755705590/lv_0_20250820165358_hvf3sr.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        /* Fallback for browsers that don't support video or when video fails */
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-900 to-blue-600"></div>
      )}

      {/* Loading overlay for video */}
      {!videoError && !isVideoLoaded && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-white text-lg">Loading...</div>
        </div>
      )}

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
              onClick={scrollToStories}
              className="flex items-center justify-center gap-3 bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Scroll to stories section"
            >
              <Play size={20} fill="currentColor" />
              Watch Now
            </button>
            
            <button 
              className="flex items-center justify-center gap-3 bg-gray-600/50 backdrop-blur-sm text-white px-8 py-3 rounded font-semibold hover:bg-gray-600/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Get more information"
            >
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToStories}
          className="text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-full p-2"
          aria-label="Scroll down to stories section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;