export default function OurStory() {
  return (
    <section id="historia" className="bg-cream py-[72px] md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column - 55% */}
          <div className="lg:w-[55%] scroll-reveal-left">
            <p className="text-terracotta text-[13px] uppercase tracking-[2px] font-medium mb-4">
              Nuestra Historia
            </p>
            <h2 className="section-title font-display text-deep-olive mb-6 md:mb-8">
              Un Refugio con Historias
            </h2>
            <p className="body-large text-olive-muted mb-5">
              Atardeceres es más que un lugar para hospedarse; es un refugio donde cada rincón cuenta una historia. Desde la arquitectura que respeta la esencia de la región, hasta los detalles cuidadosamente seleccionados, cada elemento está pensado para ofrecer una experiencia única y memorable.
            </p>
            <p className="body-text text-olive-muted mb-8">
              Aquí no hay prisa. El único horario que importa es el del atardecer, cuando el cielo se tiñe de colores cálidos y la naturaleza nos recuerda la belleza de lo simple. Cada visita es una oportunidad para desconectar, reconectar y crear recuerdos que perdurarán en el tiempo.
            </p>

            {/* Signature Block */}
            <div className="flex items-center gap-4">
              <svg
                width="120"
                height="40"
                viewBox="0 0 120 40"
                fill="none"
                className="text-stone shrink-0"
              >
                <path
                  d="M10 30 Q20 10 35 20 Q50 30 60 18 Q70 6 85 15 Q100 24 110 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M5 32 Q15 22 25 28 Q35 34 45 24 Q55 14 65 22 Q75 30 85 20 Q95 10 115 25"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
              <span className="text-stone text-[13px]">
                Familia García · Anfitriones
              </span>
            </div>
          </div>

          {/* Right Column - 45% */}
          <div className="lg:w-[45%] scroll-reveal-right">
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src="/img-living-room.jpg"
                alt="Interior acogedor de La Casona del Valle con chimenea de piedra y sillones de cuero"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Stats Block */}
            {/* <div className="grid grid-cols-3 gap-4">
              <div className="text-center scroll-reveal" style={{ transitionDelay: '0ms' }}>
                <span className="subsection-title font-display text-terracotta block">15+</span>
                <span className="text-stone text-[13px]">Años de experiencia</span>
              </div>
              <div className="text-center scroll-reveal" style={{ transitionDelay: '100ms' }}>
                <span className="subsection-title font-display text-terracotta block">8</span>
                <span className="text-stone text-[13px]">Habitaciones únicas</span>
              </div>
              <div className="text-center scroll-reveal" style={{ transitionDelay: '200ms' }}>
                <span className="subsection-title font-display text-terracotta block">4.9</span>
                <span className="text-stone text-[13px]">Calificación promedio</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
