import React from 'react';
import { Trophy, Users, Target } from 'lucide-react';

const StorySection = () => {
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
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white font-semibold text-sm">
                  Episode {item}
                </h4>
                <p className="text-gray-300 text-xs">
                  Journey to greatness
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;