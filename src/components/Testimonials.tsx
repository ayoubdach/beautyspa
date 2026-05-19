import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Cliente régulière',
    text: 'Un salon d\'une élégance rare ! L\'équipe est aux petits soins et le résultat est toujours impeccable. Mes ongles n\'ont jamais été aussi beaux.',
    rating: 5,
  },
  {
    name: 'Leila K.',
    role: 'Mariée',
    text: 'J\'ai fait appel à Eden Beauty pour mon mariage et c\'était magique. Ma coiffure et ma manucure étaient exactement comme je les imaginais. Merci infiniment !',
    rating: 5,
  },
  {
    name: 'Nadia B.',
    role: 'Cliente VIP',
    text: 'Le pack beauté est une merveille. 3 heures de pur bonheur dans un cadre luxueux. Je recommande à toutes mes amies.',
    rating: 5,
  },
  {
    name: 'Amel T.',
    role: 'Cliente',
    text: 'Le nail art ici est d\'un niveau exceptionnel. Les designs sont créatifs, précis et tiennent parfaitement dans le temps. Une vraie artiste !',
    rating: 5,
  },
  {
    name: 'Rania H.',
    role: 'Cliente régulière',
    text: 'Ambiance zen, produits de qualité et professionnelles compétentes. Eden Beauty est devenu mon rendez-vous beauté mensuel incontournable.',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-eden-dark via-[#150820] to-eden-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-eden-pink/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-eden-purple/5 blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-eden-rose text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Avis Clients
          </span>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl gradient-text mb-6">
            Témoignages
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-pink rounded-3xl p-8 sm:p-12 text-center"
            >
              <Quote size={40} className="text-eden-pink/30 mx-auto mb-6" />
              
              <p className="font-serif text-xl sm:text-2xl text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <div>
                <h4 className="font-serif text-xl text-white">
                  {testimonials[current].name}
                </h4>
                <p className="text-eden-rose/70 text-sm">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === current
                      ? 'bg-eden-pink w-8'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
