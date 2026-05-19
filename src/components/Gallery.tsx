import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  { src: '/images/nails-service.jpg', title: 'Manucure Élégante', category: 'Ongles' },
  { src: '/images/hair-service.jpg', title: 'Coiffure Glamour', category: 'Cheveux' },
  { src: '/images/pedicure-service.jpg', title: 'Pédicure Spa', category: 'Ongles' },
  { src: '/images/gallery-1.jpg', title: 'Nail Art Floral', category: 'Ongles' },
  { src: '/images/gallery-2.jpg', title: 'Chignon Romantique', category: 'Cheveux' },
  { src: '/images/gallery-3.jpg', title: 'Coloration Tendance', category: 'Cheveux' },
  { src: '/images/gallery-4.jpg', title: 'Nail Art 3D', category: 'Ongles' },
  { src: '/images/gallery-5.jpg', title: 'Brushing Volume', category: 'Cheveux' },
  { src: '/images/gallery-6.jpg', title: 'Spa Pédicure', category: 'Ongles' },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-eden-dark via-[#0f0515] to-eden-dark" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-eden-rose text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Portfolio
          </span>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl gradient-text mb-6">
            Galerie
          </h2>
          <p className="font-serif text-lg text-white/60 max-w-2xl mx-auto">
            Quelques unes de nos créations. Chaque réalisation est unique et personnalisée selon vos envies.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="gallery-item relative rounded-xl overflow-hidden cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full object-cover transition-transform duration-700"
                style={{ minHeight: index % 3 === 0 ? '300px' : index % 3 === 1 ? '240px' : '280px' }}
              />
              <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-eden-dark/90 via-eden-dark/30 to-transparent flex flex-col justify-end p-5">
                <span className="text-eden-rose text-xs tracking-widest uppercase mb-1">
                  {image.category}
                </span>
                <h3 className="font-serif text-xl text-white">{image.title}</h3>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center">
                  <ZoomIn size={16} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full rounded-2xl"
              />
              <div className="mt-4 text-center">
                <span className="text-eden-rose text-xs tracking-widest uppercase">
                  {selectedImage.category}
                </span>
                <h3 className="font-serif text-2xl text-white mt-1">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
