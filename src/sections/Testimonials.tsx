import { useState, useEffect, useCallback, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Néstor Pinelli',
    date: '13 Abril 2026',
    avatar: 'https://ui-avatars.com/api/?name=Nestor+Pinelli&background=C4693A&color=fff&size=128',
    text: 'Quiero expresar mi gratitud a "Atardeceres" por lo acogedor, amplio, sus vistas, la relacion precio/calidad y la hermosa atención. Fuimos con tres amigos y todos quedamos súper conformes. Lo recomendamos sin lugar a dudas.',
  },
  {
    name: 'Estela Girard',
    date: '13 Junio 2026',
    avatar: 'https://ui-avatars.com/api/?name=Estela+Girard&background=C4693A&color=fff&size=128',
    text: 'Estuvimos 4 días alojados en el departamento.  La verdad es que es super cómodo, con todas las comodidades para sentirte como en casa. ¡Super recomendado!',
  },

  {
    name: 'Roxana Faila',
    date: '23 Mayo 2026',
    avatar: 'https://ui-avatars.com/api/?name=Roxana+Faila&background=C4693A&color=fff&size=128',
    text: 'Hermosa estadía. El depto es súper cálido, cómodo y está decorado con mucho gusto; realmente te hace sentir como en casa. Lo mejor, sin dudas, es la vista al campo y al horizonte, que se disfruta desde el ventanal y también desde la cocina, con unos atardeceres divinos y una paz increíble. Además, pudimos ir con nuestra perrita, y eso hizo el viaje todavía más special. El entorno es tranquilo, rodeado de naturaleza, ideal para descansar y desconectarse. Y la anfitriona, un amor: súper accesible, flexible y atenta en todo momento. Un lugar para volver y para recomendar sin dudar.'
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined);

  const updateHeight = useCallback(() => {
    if (slideRefs.current[current]) {
      setContainerHeight(slideRefs.current[current]?.offsetHeight);
    }
  }, [current]);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [updateHeight]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, goNext]);

  return (
    <section id="testimonials" className="bg-warm-sand ">
      <div className=" py-[56px] md:py-[72px] overflow-hidden max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="scroll-reveal text-terracotta text-base uppercase tracking-[2px] font-bold mb-4">
            Lo que Dicen Nuestros Huéspedes
          </p>
          <h2 className="scroll-reveal section-title font-display text-deep-olive">
            Historias de Quienes ya Nos Visitaron
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="scroll-reveal relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides container */}
          <div
            className="overflow-hidden transition-[height] duration-[500ms] ease-in-out"
            style={{ height: containerHeight ? `${containerHeight}px` : 'auto' }}
          >
            <div
              className="flex items-start transition-transform duration-[600ms] ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  ref={(el) => { slideRefs.current[index] = el; }}
                  className="w-full flex-shrink-0 px-0 md:px-[8%]"
                >
                  <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm max-w-[800px] mx-auto relative">
                    {/* Mobile Navigation Arrows */}
                    <div className="md:hidden absolute top-6 right-6 flex gap-2 z-10">
                      <button
                        onClick={goPrev}
                        className="flex w-9 h-9 rounded-full bg-cream border border-[var(--stone)]/10 items-center justify-center text-deep-olive transition-colors"
                        aria-label="Reseña anterior"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={goNext}
                        className="flex w-9 h-9 rounded-full bg-cream border border-[var(--stone)]/10 items-center justify-center text-deep-olive transition-colors"
                        aria-label="Reseña siguiente"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="star-filled"
                          fill="var(--golden-wheat)"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="relative mb-6">
                      <span
                        className="absolute -top-4 -left-2 md:-top-4 md:-left-2 font-display text-[48px] md:text-[60px] leading-none opacity-30"
                        style={{ color: 'var(--terracotta)' }}
                      >
                        "
                      </span>
                      <p className="body-large font-display italic text-deep-olive pl-6">
                        {review.text}
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="card-title font-display text-deep-olive">
                          {review.name}
                        </h4>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation Arrows */}
          <button
            onClick={goPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-[var(--stone)]/20 items-center justify-center text-deep-olive hover:bg-cream transition-colors z-10"
            aria-label="Reseña anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-[var(--stone)]/20 items-center justify-center text-deep-olive hover:bg-cream transition-colors z-10"
            aria-label="Reseña siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === current
                  ? 'w-8'
                  : 'hover:opacity-70'
                  }`}
                style={{
                  backgroundColor:
                    index === current ? 'var(--terracotta)' : 'var(--stone)',
                  opacity: index === current ? 1 : 0.4,
                }}
                aria-label={`Ir a reseña ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
