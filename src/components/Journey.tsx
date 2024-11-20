import React from 'react';
import { MessageCircle, Heart, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: 'Первый разговор',
    description: 'Знакомство и обсуждение ваших потребностей в безопасном пространстве.',
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Погружение',
    description: 'Начало практической работы с телом и сознанием.',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Продолжение пути',
    description: 'Регулярные сессии для поддержания и углубления результатов.',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Ваш путь к осознанности</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-purple-400/30 hidden md:block" />
            
            {/* Steps */}
            {steps.map((step, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                <div className={`md:grid md:grid-cols-2 items-center gap-8 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                    <div className="bg-slate-800/50 p-6 rounded-lg relative group hover:bg-slate-800/80 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                      <div className="relative">
                        <div className="text-purple-400 mb-4">{step.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Marker */}
                  <div className="hidden md:block relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <div className="w-4 h-4 bg-purple-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}