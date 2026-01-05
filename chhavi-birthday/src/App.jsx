import React from 'react';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Timeline from './components/Timeline';
import MessageCard from './components/MessageCard';
import Finale from './components/Finale';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-offwhite font-sans overflow-x-hidden text-slate-800">
      <main>
        <Hero />
        <VideoSection />
        <Timeline />
        <MessageCard />
        <Finale />
        <Footer />
        {/* Other sections will follow */}
      </main>
    </div>
  );
}

export default App;
