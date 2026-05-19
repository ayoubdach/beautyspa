import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import Butterfly, { ButterflyCanvas } from './Butterfly';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      heroRef.current.style.setProperty('--parallax-x', `${x}px`);
      heroRef.current.style.setProperty('--parallax-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translate(var(--parallax-x, 0), var(--parallax-y, 0)) scale(1.1)',
          transition: 'transform 0.3s ease-out',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-eden-dark/80 via-eden-dark/60 to-eden-dark" />
      
      {/* Particle canvas */}
      <ButterflyCanvas />

      {/* Floating butterflies */}
      <div className="absolute top-[15%] left-[10%] z-[2] opacity-60">
        <Butterfly size={40} color="#ff6b9d" delay={0} />
      </div>
      <div className="absolute top-[25%] right-[15%] z-[2] opacity-50">
        <Butterfly size={30} color="#c77dff" delay={2} />
      </div>
      <div className="absolute bottom-[30%] left-[20%] z-[2] opacity-40">
        <Butterfly size={25} color="#e91e8c" delay={4} />
      </div>
      <div className="absolute top-[60%] right-[10%] z-[2] opacity-50">
        <Butterfly size={35} color="#ff6b9d" delay={1} />
      </div>
      <div className="absolute top-[40%] left-[5%] z-[2] opacity-30">
        <Butterfly size={20} color="#c77dff" delay={3} />
      </div>

      {/* Content */}
      <div className="relative z-[3] text-center px-4 max-w-4xl mx-auto">
        {/* Logo butterfly */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <Butterfly size={80} color="#e91e8c" delay={0} />
            <div className="absolute inset-0 blur-xl bg-eden-pink/30 rounded-full" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl gradient-text mb-4"
        >
          Eden Beauty
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-eden-rose" />
          <Sparkles size={16} className="text-eden-rose" />
          <span className="text-eden-rose/90 tracking-[0.4em] uppercase text-sm font-medium">
            Ongles & Coiffure
          </span>
          <Sparkles size={16} className="text-eden-rose" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-eden-rose" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Découvrez l'art de la beauté dans un cadre luxueux et apaisant.
          Vos ongles et vos cheveux méritent l'excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-eden-pink to-eden-purple text-white font-medium text-sm tracking-wide overflow-hidden transition-all hover:shadow-xl hover:shadow-eden-pink/40"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={16} />
              Réserver maintenant
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-eden-purple to-eden-pink opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium text-sm tracking-wide hover:bg-white/5 hover:border-white/40 transition-all"
          >
            Nos services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3]"
      >
        <a href="#services" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
          <span className="text-xs tracking-widest uppercase">Découvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
