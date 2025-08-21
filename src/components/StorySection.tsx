import React, { useState } from 'react';
import { Trophy, Users, Target, Play, X } from 'lucide-react';

const StorySection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Handle ESC key to close video
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedVideo(null);
      }
    };

    if (selectedVideo) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [selectedVideo]);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Brotherhood",
      description: "More than teammates, the Cola Bros share an unbreakable bond forged through countless hours training together and pushing each other to new heights."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "World Champions",
      description: "Multiple World Surf League titles and counting. Their dominance on the world stage continues to inspire the next generation of surfers."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Relentless Pursuit",
      description: "Every wave is an opportunity to push boundaries. Their commitment to excellence has redefined what's possible in professional surfing."
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Episode 1: The Beginning",
      description: "From small-town waves to the world stage",
      videoUrl: "https://res.cloudinary.com/daon8me5h/video/upload/v1755705340/Instagram_Downloader_-_Download_Instagram_Video_Photos_IGTV_Reels_tb1xn0.mp4"
    },
    {
      id: 2,
      title: "Episode 2: Rising Stars",
      description: "Breaking into professional surfing",
      videoUrl: "https://res.cloudinary.com/daon8me5h/video/upload/v1755705590/lv_0_20250820165358_hvf3sr.mp4"
    },
    {
      id: 3,
      title: "Episode 3: World Champions",
      description: "Dominating the World Surf League",
      videoUrl: "https://res.cloudinary.com/daon8me5h/video/upload/v1755705341/A_good_omen_with_the_dolphins_today_hampositive_-_badboyryry__fhazjh.mp4"
    },
    {
      id: 4,
      title: "Episode 4: Brotherhood",
      description: "The unbreakable bond between brothers",
      videoUrl: "https://res.cloudinary.com/daon8me5h/video/upload/v1755705339/Instagram_Downloader_-_Download_Instagram_Video_Photos_IGTV_Reels_2_c7jchr.mp4"
    },
    {
      id: 5,
      title: "Episode 5: Pushing Limits",
      description: "Redefining what's possible on waves",
      videoUrl: "https://res.cloudinary.com/daon8me5h/video/upload/v1755746447/Instagram_Downloader_-_Download_Instagram_Video_Photos_IGTV_Reels_1_tfmvku.mp4"
    },
    {
      id: 6,
      title: "Episode 6: Legacy",
      description: "Inspiring the next generation",
      videoUrl: "https://res.cloudinary.com/daon8me5h/video/upload/v1755746751/2_Instagram_Downloader_-_Download_Instagram_Video_Photos_IGTV_Reels_ce6uo3.mp4"
    }
  ];



  return (
    <section id="stories" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            The Cola Bros Story
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to world championship glory, witness the journey 
            that transformed two brothers into surfing legends.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 hover:bg-gray-900/70 transition-colors duration-300"
            >
              <div className="text-red-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video.videoUrl)}
              className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden group cursor-pointer"
            >
               <video 
                 src={video.videoUrl}
                 className="w-full h-full object-cover"
                 muted
                 preload="metadata"
                 poster=""
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                   <Play size={24} className="text-white ml-1" />
                 </div>
               </div>
               <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <h4 className="text-white font-semibold text-sm">
                   {video.title}
                 </h4>
                 <p className="text-gray-300 text-xs">
                   {video.description}
                 </p>
               </div>
             </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-black rounded-xl shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-3 -right-3 w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 z-10 shadow-lg"
            >
              <X size={20} />
            </button>
            
            {/* Video Player */}
            <div className="p-2">
              <video
                className="w-full rounded-lg"
                controls
                autoPlay
                src={selectedVideo}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Close Text */}
            <div className="text-center pb-4">
              <p className="text-gray-400 text-sm">Click the X button or press ESC to close</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StorySection;