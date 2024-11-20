import React from 'react';
import { Waves, Sparkles, Heart } from 'lucide-react';

const services = [
  {
    icon: <Waves className="h-8 w-8" />,
    title: 'Терапевтический массаж',
    description: 'Глубокая работа с телом, где каждое прикосновение — это диалог с вашим внутренним миром.',
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Косметология',
    description: 'Естественное сияние через осознанный уход и гармонию внутреннего состояния.',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Сеансы телесной осознанности',
    description: 'Практики, соединяющие тело и разум в единое целое, открывающие путь к глубинному спокойствию.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Услуги</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800/50 rounded-lg p-8 transition-all duration-300 hover:bg-slate-800/80"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="relative">
                <div className="text-purple-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}