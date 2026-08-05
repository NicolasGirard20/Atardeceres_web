import { MapPin, Car } from 'lucide-react';

const infoPills = [
  { icon: MapPin, text: 'LSM, Entre Ríos' },
  { icon: Car, text: '1,5 km del Sanatorio Adventista' },
  { icon: Car, text: '1,3 km de la Universidad Adventista del Plata' }

];

export default function Location() {
  return (
    <section id="ubicacion" className="bg-cream pt-[72px] md:pt-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Text Content */}
        <div className="max-w-[700px] mx-auto text-center mb-10 md:mb-14">
          <p className="scroll-reveal text-terracotta text-base uppercase tracking-[2px] font-bold mb-4">
            Ubicación
          </p>
          <h2 className="scroll-reveal section-title font-display text-deep-olive mb-5">
            Libertador San martín, Entre Ríos
          </h2>
          <p className="scroll-reveal body-text text-black/70 mb-8">
            Nos encontramos en Libertador San Martín, Entre Ríos, a pocas cuadras del centro de la ciudad y rodeados de las mejores vistas de la región. Nuestro alojamiento ofrece un refugio de tranquilidad y confort, ideal para disfrutar de la naturaleza y relajarse en un entorno único.
          </p>

          {/* Info Pills */}
          <div className="scroll-reveal flex flex-wrap justify-center gap-3">
            {infoPills.map((pill) => (
              <span
                key={pill.text}
                className="inline-flex items-center gap-2 px-[18px] py-2 rounded-full text-[13px] font-medium text-deep-olive"
                style={{ backgroundColor: 'var(--terracotta-light)' }}
              >
                <pill.icon size={15} className="text-terracotta" />
                {pill.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="scroll-reveal-scale w-full h-[300px] md:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d845.1717975593103!2d-60.47669712402414!3d-32.07770834557076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b42f63431cc263%3A0x28f22cd928f7583d!2sATARDECERES!5e0!3m2!1ses!2sar!4v1783701531962!5m2!1ses!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </section>
  );
}
