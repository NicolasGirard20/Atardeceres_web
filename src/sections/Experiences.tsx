import { Mountain, Flame, Coffee, Fish, Moon, ChefHat } from 'lucide-react';

const experiences = [
  {
    icon: Mountain,
    title: 'Senderismo Guiado',
    description:
      'Recorré los senderos más bellos de las Sierras Grandes con guías locales. Desde caminatas suaves hasta ascensos con vistas panorámicas.',
  },
  {
    icon: Flame,
    title: 'Fogatas Bajo las Estrellas',
    description:
      'Noches mágicas alrededor del fuego con vino caliente, historias locales y el cielo más estrellado que vas a ver.',
  },
  {
    icon: Coffee,
    title: 'Desayuno Casero de Campo',
    description:
      'Pan casero recién horneado, mermeladas artesanales, frutas de la huerta y café recién tostado. Servido en nuestro comedor con vista al jardín.',
  },
  {
    icon: Fish,
    title: 'Pesca con Mosca',
    description:
      'Las aguas cristalinas de los arroyos de La Cumbrecita son perfectas para la pesca con mosca. Equipo y guía disponibles.',
  },
  {
    icon: Moon,
    title: 'Caminata Nocturna',
    description:
      'Una experiencia sensorial única: recorré el bosque de noche con linternas, descubriendo la vida nocturna y el silencio de la montaña.',
  },
  {
    icon: ChefHat,
    title: 'Taller de Cocina Regional',
    description:
      'Aprendé a preparar las recetas tradicionales cordobesas: locro, empanadas, pastel de cabrito y más, con ingredientes de nuestra huerta.',
  },
];

export default function Experiences() {
  return (
    <section id="experiencias" className="bg-cream py-[72px] md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="scroll-reveal text-terracotta text-[13px] uppercase tracking-[2px] font-medium mb-4">
            Experiencias
          </p>
          <h2 className="scroll-reveal section-title font-display text-deep-olive">
            Más que un Alojamiento
          </h2>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="experience-card scroll-reveal flex flex-col items-center text-center"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Icon Circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{ backgroundColor: 'var(--terracotta-light)' }}
              >
                <exp.icon size={28} style={{ color: 'var(--olive-muted)' }} strokeWidth={1.5} />
              </div>

              <h3 className="card-title font-display text-deep-olive mb-3">
                {exp.title}
              </h3>
              <p className="body-text text-olive-muted max-w-[280px]">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
