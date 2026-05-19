import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Heart, Scissors, Gem, Flower2, Droplets, Leaf, ScissorsLineDashed, Paintbrush, Palette } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Pose Vernis',
    description: 'Pose de vernis classique ou semi-permanent avec soin des cuticules pour des ongles impeccables.',
    price: '20 DT',
    oldPrice: '30 DT',
    image: '/images/nails-service.jpg',
  },
  {
    icon: Sparkles,
    title: 'Mini Soin',
    description: 'Soin express pour un coup d\'éclat rapide. Parfait pour celles qui sont pressées.',
    price: '10 DT',
    oldPrice: '15 DT',
    image: '/images/pedicure-service.jpg',
  },
  {
    icon: Scissors,
    title: 'Brushing',
    description: 'Brushing professionnel pour donner du volume et de la brillance à votre chevelure.',
    price: '12 DT',
    oldPrice: '18 DT',
    image: '/images/hair-service.jpg',
  },
  {
    icon: Heart,
    title: 'Pack Main & Pied',
    description: 'Forfait complet incluant soin des mains et des pieds pour une beauté totale.',
    price: '50 DT',
    oldPrice: '70 DT',
    image: '/images/pedicure-service.jpg',
  },
  {
    icon: Gem,
    title: 'Capsule Américaine VP',
    description: 'Pose de capsules américaines de qualité supérieure pour des ongles longs et élégants.',
    price: '40 DT',
    oldPrice: '55 DT',
    image: '/images/gallery-1.jpg',
  },
  {
    icon: Flower2,
    title: 'Soin Visage',
    description: 'Soin du visage complet pour hydrater, purifier et illuminer votre peau.',
    price: '40 DT',
    oldPrice: '55 DT',
    image: '/images/gallery-2.jpg',
  },
  {
    icon: Droplets,
    title: 'Épilation Corps',
    description: 'Épilation complète du corps avec des techniques douces et des produits de qualité.',
    price: '60 DT',
    oldPrice: '80 DT',
    image: '/images/gallery-3.jpg',
  },
  {
    icon: Leaf,
    title: 'Soin Capillaire',
    description: 'Traitement nourrissant et réparateur pour des cheveux sains et brillants.',
    price: '40 DT',
    oldPrice: '55 DT',
    image: '/images/gallery-5.jpg',
  },
  {
    icon: ScissorsLineDashed,
    title: 'Kératine',
    description: 'Lissage à la kératine pour des cheveux lisses, brillants et faciles à coiffer.',
    price: '120 DT',
    oldPrice: '160 DT',
    image: '/images/hair-service.jpg',
  },
  {
    icon: Palette,
    title: 'Coloration & Mèche',
    description: 'Coloration professionnelle et mèches personnalisées pour un look unique.',
    price: '180 DT',
    oldPrice: '220 DT',
    image: '/images/gallery-3.jpg',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-eden-dark via-[#150820] to-eden-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Offer banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-6"
          >
            <span className="text-lg">👑</span>
            <span className="text-amber-300 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
              Offre Privilège · Clientes Fidèles
            </span>
          </motion.div>

          <span className="inline-block text-eden-rose text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Nos Prestations
          </span>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl gradient-text mb-6">
            Services
          </h2>
          <p className="font-serif text-lg text-white/60 max-w-2xl mx-auto">
            Des soins sur mesure pour révéler votre beauté naturelle. Chaque prestation est réalisée avec passion et expertise.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="service-card group relative rounded-2xl overflow-hidden glass-pink"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eden-dark via-eden-dark/40 to-transparent" />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center">
                  <service.icon size={16} className="text-eden-rose" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-xl text-white mb-2 group-hover:text-eden-rose transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-eden-rose font-bold text-lg">
                      {service.price}
                    </span>
                    <span className="text-white/30 text-xs line-through">
                      {service.oldPrice}
                    </span>
                  </div>
                  <a
                    href="#booking"
                    className="text-xs text-white/40 hover:text-white transition-colors flex items-center gap-1"
                  >
                    Réserver →
                  </a>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 60px rgba(233, 30, 140, 0.1)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
