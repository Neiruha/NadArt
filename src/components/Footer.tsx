import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Готовы начать своё путешествие?</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
              <Calendar className="mr-2 h-5 w-5" />
              Записаться
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-purple-400 hover:bg-purple-400/20 transition-colors">
              <MessageCircle className="mr-2 h-5 w-5" />
              Написать в мессенджер
            </button>
          </div>

          <div className="text-sm text-gray-400">
            <p>© 2024 СТО. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}