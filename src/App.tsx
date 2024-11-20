import React from 'react';
import { Sparkles, Waves, Heart, Calendar, MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhySTO from './components/WhySTO';
import Services from './components/Services';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-gray-100">
      <Header />
      <main>
        <Hero />
        <WhySTO />
        <Services />
        <Journey />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;