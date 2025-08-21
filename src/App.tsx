import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import AthleteSpotlight from './components/AthleteSpotlight';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
        <AthleteSpotlight />
        <StorySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;