import { useState, useEffect } from 'react';
import { Search, CalendarDays } from 'lucide-react';

export default function Hero() {

  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/img-hero-lodge.jpeg"
            alt="Atardeceres"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(42,42,42,0.3) 0%, rgba(42,42,42,0.15) 40%, rgba(42,42,42,0.5) 100%)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 md:px-8 pb-12 md:pb-16">
          <div className="max-w-[640px]">
            <p className="hero-eyebrow text-white text-sm md:text-base font-body uppercase tracking-[3px] font-bold mb-4">
              Bienvenidos a
            </p>
            <h1 className="hero-headline-anim hero-headline font-bold text-cream mb-4 md:mb-6">
              Atardeceres
            </h1>
            <p className="hero-subheadline subsection-title font-semibold text-white/90 italic mb-6 md:mb-8 max-w-[520px]">
              Donde el tiempo se detiene en Libertador San Martín
            </p>

          </div>
        </div>


      </section>

      {/* Floating Mini Booking Bar (appears after scrolling past hero) */}
      <div
        className={`fixed top-20 right-6 z-40 hidden lg:flex items-center gap-3 bg-white rounded-full shadow-lg px-5 py-3 transition-all duration-400 ${showFloating
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <CalendarDays size={18} className="text-terracotta" />
        <span className="text-sm font-medium text-deep-olive">Reservar</span>
        <a
          href="#contacto"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-8 h-8 rounded-full flex items-center justify-center text-white"
          style={{ backgroundColor: 'var(--terracotta)' }}
        >
          <Search size={14} />
        </a>
      </div>
    </>
  );
}
