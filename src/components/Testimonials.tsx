import React from 'react';

const testimonials = [
  {
    text: "После первого же сеанса я почувствовала, как напряжение покидает тело. Это было удивительное ощущение возвращения к себе.",
    author: "Анна"
  },
  {
    text: "Надежда помогла мне осознать связь между телом и эмоциями. Теперь я лучше понимаю себя и свои потребности.",
    author: "Мария"
  },
  {
    text: "Регулярные сеансы стали неотъемлемой частью моей жизни. Это не просто массаж, а настоящая терапия.",
    author: "Елена"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Истории преображения</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 p-8 rounded-lg relative group hover:bg-slate-800/80 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="relative">
                <blockquote className="text-lg mb-4">"{testimonial.text}"</blockquote>
                <p className="text-purple-400">— {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}