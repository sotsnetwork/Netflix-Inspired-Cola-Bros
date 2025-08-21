import React from 'react';
import { Award, Calendar, MapPin } from 'lucide-react';

const AthleteSpotlight = () => {
  const athletes = [
    {
      name: "Griffin Colapinto",
      title: "World Champion 2023",
      image: "https://res.cloudinary.com/daon8me5h/image/upload/v1755786766/Griffin_Cola_ye4hlm.jpg",
      stats: [
        { icon: <Award />, label: "Titles", value: "12" },
        { icon: <Calendar />, label: "Pro Since", value: "2018" },
        { icon: <MapPin />, label: "From", value: "USA" }
      ],
      description: "Known for his aggressive style and fearless approach to massive waves."
    },
    {
      name: "Crosby Colapinto",
      title: "Rising Star",
      image: "https://res.cloudinary.com/daon8me5h/image/upload/v1755787123/Crosby_Cola_gfcrnn.jpg",
      stats: [
        { icon: <Award />, label: "Titles", value: "8" },
        { icon: <Calendar />, label: "Pro Since", value: "2019" },
        { icon: <MapPin />, label: "From", value: "USA" }
      ],
      description: "The technical master with an innovative approach to modern surfing."
    }
  ];

  return (
    <section id="athletes" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet the Athletes
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Two brothers, one mission: to dominate the world's most challenging waves.
          </p>
        </div>

        {/* Athletes Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {athletes.map((athlete, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Athlete Image */}
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-6">
                <img
                  src={athlete.image}
                  alt={athlete.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {athlete.name}
                  </h3>
                  <p className="text-red-400 font-medium mb-4">
                    {athlete.title}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {athlete.description}
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {athlete.stats.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-gray-700 transition-colors duration-300"
                  >
                    <div className="text-red-600 mb-2 flex justify-center">
                      {React.cloneElement(stat.icon, { size: 20 })}
                    </div>
                    <div className="text-xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            View Full Profiles
          </button>
        </div>
      </div>
    </section>
  );
};

export default AthleteSpotlight;