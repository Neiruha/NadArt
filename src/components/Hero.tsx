import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const [opacity, setOpacity] = useState(0.6);

  useEffect(() => {
    const breathingAnimation = () => {
      setOpacity(prev => prev === 0.6 ? 1 : 0.6);
    };

    const interval = setInterval(breathingAnimation, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80")',
          filter: 'brightness(0.2)'
        }}
      />

      {/* Overlay with breathing animation */}
      <div 
        className="absolute inset-0 bg-indigo-950/50 transition-opacity duration-4000 ease-in-out"
        style={{ opacity }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider">
          СТО: пространство для<br />осознанного возвращения к себе
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
          Место, где тело и разум находят покой и гармонию
        </p>
        <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium tracking-wide text-white bg-transparent border-2 border-purple-400 rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:bg-purple-400/20">
          <Sparkles className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
          <span>Начать свой путь</span>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </button>
      </div>
    </section>
  );
}