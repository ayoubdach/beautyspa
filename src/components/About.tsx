import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Clock, Star } from 'lucide-react';

const stats = [
  { icon: Users, value: '2,500+', label: 'Clientes satisfaites' },
  { icon: Award, value: '8+', label: 'Années d\'expérience' },
  { icon: Star, value: '4.9', label: 'Note moyenne' },
  { icon: Clock, value: '15+', label: 'Services proposés' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-eden-dark via-[#120618] to-eden-dark" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-eden-rose text-sm tracking-[0.3em] uppercase font-medium mb-4">
              À Propos
            </span>
            <h2 className="font-script text-5xl sm:text-6xl md:text-7xl gradient-text mb-6">
              Notre Histoire
            </h2>
            <div className="space-y-4 font-serif text-lg text-white/60 leading-relaxed">
              <p>
                Fondé avec une passion débordante pour l'art de la beauté, Eden Beauty est bien plus qu'un simple salon. C'est un sanctuaire où chaque femme peut se sentir spéciale et choyée.
              </p>
              <p>
                Nos expertes en onglerie et coiffure allient technique impeccable et créativité sans limite pour vous offrir des résultats à la hauteur de vos attentes.
              </p>
              <p>
                Nous utilisons uniquement des produits de qualité professionnelle, sélectionnés avec soin pour préserver la santé de vos ongles et de vos cheveux.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-eden-pink to-eden-purple text-white font-medium text-sm hover:shadow-lg hover:shadow-eden-pink/30 transition-all"
              >
                Prendre rendez-vous
              </a>
              <a
                href="#gallery"
                className="px-8 py-3 rounded-full border border-white/20 text-white/80 font-medium text-sm hover:bg-white/5 transition-all"
              >
                Voir nos réalisations
              </a>
            </div>
          </motion.div>

          {/* Right - Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-pink rounded-2xl p-6 text-center group hover:bg-eden-pink/10 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-eden-pink/20 to-eden-purple/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon size={22} className="text-eden-rose" />
                </div>
                <div className="font-script text-3xl sm:text-4xl gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
