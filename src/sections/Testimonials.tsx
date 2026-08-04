import { useState, useEffect, useCallback } from 'react';
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

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, goNext]);

  return (
    <section id="testimonials" className="bg-warm-sand py-[72px] md:py-[120px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="scroll-reveal text-terracotta text-[13px] uppercase tracking-[2px] font-medium mb-4">
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
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-[600ms] ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-0 md:px-[8%]"
                >
                  <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm max-w-[800px] mx-auto">
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

          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="testimonial-nav-button absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-[var(--stone)]/20 items-center justify-center text-deep-olive hover:bg-cream transition-colors"
            aria-label="Reseña anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            className="testimonial-nav-button absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-[var(--stone)]/20 items-center justify-center text-deep-olive hover:bg-cream transition-colors"
            aria-label="Reseña siguiente"
          >
            <ChevronRight size={20} />
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
