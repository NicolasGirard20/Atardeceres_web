export default function Hero() {

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

    </>
  );
}
