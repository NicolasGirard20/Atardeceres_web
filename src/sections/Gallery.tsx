import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/img-hero-lodge.jpeg', alt: 'Vista exterior' },
  { src: '/img-room-fireplace2.jpg', alt: 'Sala de estar con Televisor y sillones de cuero' },
  { src: '/img-bathroom.jpeg', alt: 'Baño con azulejos y mobiliario de madera' },
  { src: '/img-kitchen.jpeg', alt: 'Cocina con isla, amoblamiento de madera, horno y heladera' },
  { src: '/img-bedroom-suite.jpg', alt: 'Cama individual y cama matrimonial' },
  { src: '/img-outdoor.jpg', alt: 'Vista del atardecer' },
  // { src: '/img-dining-room.jpeg', alt: 'Comedor con mesa de madera y sillas' },
  // { src: '/img-living-room.jpeg', alt: 'Sala de estar con sillones y chimenea' },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, goNext, goPrev]);

  return (
    <section id="galeria" className="bg-charcoal py-[26px] md:py-[48px]">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 mb-10 md:mb-14">
        <p className="scroll-reveal text-golden-wheat text-[13px] uppercase tracking-[2px] font-medium mb-4 text-center">
          Galería
        </p>
        <h2 className="scroll-reveal section-title font-display text-cream mb-4 text-center">
          Cada Rincón, una Postal
        </h2>
        <p className="scroll-reveal body-text text-white/60 text-center max-w-[600px] mx-auto">
          Así es el hospedaje Atardeceres, un lugar donde cada detalle está pensado para que tu estadía sea inolvidable.
        </p>
      </div>

      {/* Asymmetric Grid */}
      <div className="w-full">
        {/* Row 1: 60/40 */}
        <div className="flex flex-col md:flex-row gap-2 mb-2 scroll-reveal">
          <div
            className="gallery-item md:w-[60%] h-[320px] md:h-[450px] cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <img src={galleryImages[0].src} alt={galleryImages[0].alt} className="w-full h-full object-cover" loading="lazy" />
            <div className="gallery-overlay"><span className="text-cream text-sm font-medium">Ver</span></div>
          </div>
          <div
            className="gallery-item md:w-[40%] h-[320px] md:h-[450px] cursor-pointer"
            onClick={() => openLightbox(1)}
          >
            <img src={galleryImages[1].src} alt={galleryImages[1].alt} className="w-full h-full object-cover" loading="lazy" />
            <div className="gallery-overlay"><span className="text-cream text-sm font-medium">Ver</span></div>
          </div>
        </div>

        {/* Row 2: Three equal */}
        <div className="flex flex-col md:flex-row gap-2 mb-2 scroll-reveal" style={{ transitionDelay: '150ms' }}>
          {[2, 3, 4].map((i) => (
            <div
              key={i}
              className="gallery-item md:w-1/3 h-[320px] cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <img src={galleryImages[i].src} alt={galleryImages[i].alt} className="w-full h-full object-cover" loading="lazy" />
              <div className="gallery-overlay"><span className="text-cream text-sm font-medium">Ver</span></div>
            </div>
          ))}
        </div>

        {/* Row 3: 40/60 */}
        <div className="flex flex-col md:flex-row scroll-reveal" style={{ transitionDelay: '300ms' }}>
          <div
            className="gallery-item md:w-[40%] h-[280px] md:h-[380px] cursor-pointer"
            onClick={() => openLightbox(5)}
          >
            <img src={galleryImages[5].src} alt={galleryImages[5].alt} className="w-full h-full object-cover" loading="lazy" />
            <div className="gallery-overlay"><span className="text-cream text-sm font-medium">Ver</span></div>
          </div>
          {/* <div
            className="gallery-item md:w-[60%] h-[320px] md:h-[380px] cursor-pointer"
            onClick={() => openLightbox(6)}
          >
            <img src={galleryImages[6].src} alt={galleryImages[6].alt} className="w-full h-full object-cover" loading="lazy" />
            <div className="gallery-overlay"><span className="text-cream text-sm font-medium">Ver</span></div>
          </div> */}
        </div>

        {/* Row 4: Two wide panoramas */}
        {/* <div className="flex flex-col md:flex-row gap-2 scroll-reveal" style={{ transitionDelay: '450ms' }}>
          {[7, 0].map((i, idx) => (
            <div
              key={`${i}-${idx}`}
              className="gallery-item md:w-1/2 h-[280px] cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <img src={galleryImages[i].src} alt={galleryImages[i].alt} className="w-full h-full object-cover" loading="lazy" />
              <div className="gallery-overlay"><span className="text-cream text-sm font-medium">Ver</span></div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Lightbox */}
      <div className={`lightbox ${lightboxOpen ? 'active' : ''}`} onClick={closeLightbox}>
        <button
          className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
          onClick={closeLightbox}
          aria-label="Cerrar lightbox"
        >
          <X size={32} />
        </button>
        <button
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          aria-label="Imagen siguiente"
        >
          <ChevronRight size={24} />
        </button>
        <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center">
          <img
            src={galleryImages[currentIndex].src}
            alt={galleryImages[currentIndex].alt}
          />
          <p className="text-cream/80 text-sm mt-4 max-w-[600px] text-center px-4">
            {galleryImages[currentIndex].alt}
          </p>
          <p className="text-cream/50 text-xs mt-2">
            {currentIndex + 1} / {galleryImages.length}
          </p>
        </div>
      </div>
    </section>
  );
}
