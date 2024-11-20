import React from 'react';
import { Heart } from 'lucide-react';

export default function WhySTO() {
  return (
    <section id="why" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Heart className="mx-auto h-12 w-12 text-purple-400 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Почему СТО?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80"
                alt="Надежда за работой"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-lg" />
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Меня зовут Надежда, и я создала СТО как пространство, где каждый может найти путь к глубинному покою и осознанности через тело.
              </p>
              <blockquote className="border-l-4 border-purple-400 pl-4 italic">
                "Осознанность — это больше, чем тело. Это взгляд внутрь."
              </blockquote>
              <p className="text-lg leading-relaxed">
                Мой подход основан на глубоком понимании связи между телом и сознанием. Каждая сессия — это не просто процедура, а путешествие к себе, где мы вместе находим ключи к вашему внутреннему равновесию.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}