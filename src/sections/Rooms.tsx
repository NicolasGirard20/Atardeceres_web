import { Users, Wifi, Flame, Bath, Tv, Refrigerator, AirVent } from 'lucide-react';

const rooms = [
  {
    name: 'Suite Familiar',
    image: '/img-bedroom-suite.jpg',
    capacity: '4/5 huéspedes',
    amenities: [
      { icon: Wifi, label: 'WiFi' },
      { icon: Flame, label: 'Calefacción' },
      { icon: Bath, label: 'Baño Privado' },
      { icon: Tv, label: 'Tv' },
      { icon: Refrigerator, label: 'Heladera' },
      { icon: AirVent, label: 'Aire Acondicionado' },
    ],
    description:
      'Suite familiar con todas las comodidades para disfrutar de un descanso perfecto. Cuenta con una cama matrimonial y una cama individual, baño privado y vistas panorámicas únicas de Libertador San Martín.',

  },
  // {
  //   name: 'Habitación del Bosque',
  //   image: '/img-room-forest.jpg',
  //   capacity: '2-3 huéspedes',
  //   amenities: [
  //     { icon: Wifi, label: 'WiFi' },
  //     { icon: Flame, label: 'Calefacción' },
  //     { icon: Bath, label: 'Baño Privado' },
  //     { icon: Mountain, label: 'Vista al Bosque' },
  //   ],
  //   description:
  //     'Acogedora habitación con paredes de madera noble, vistas panorámicas al bosque de pinos y detalles artesanales.',
  //   price: '$38.000',
  // },
  // {
  //   name: 'Cabaña Familiar',
  //   image: '/img-cabin-exterior.jpg',
  //   capacity: '4-5 huéspedes',
  //   amenities: [
  //     { icon: Wifi, label: 'WiFi' },
  //     { icon: Flame, label: 'Calefacción' },
  //     { icon: Bath, label: '2 Baños' },
  //     { icon: UtensilsCrossed, label: 'Cocina' },
  //     { icon: Flame, label: 'Parrilla' },
  //   ],
  //   description:
  //     'Espaciosa cabaña independiente de dos dormitorios, cocina equipada y deck privado con parrilla.',
  //   price: '$62.000',
  // },
];

export default function Rooms() {
  return (
    <section id="habitaciones" className="bg-cream py-[72px] md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="scroll-reveal text-terracotta text-base uppercase tracking-[2px] font-bold mb-4">
            Servicios
          </p>
          <h2 className="scroll-reveal section-title font-display text-deep-olive">
            Descanso con Vista únicas
          </h2>
        </div>

        {/* Room Cards */}
        <div className="flex justify-center">
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className="room-card scroll-reveal bg-white rounded-xl overflow-hidden shadow-sm"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="h-[280px] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="card-title font-display text-deep-olive mb-2">
                  {room.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <Users size={16} className="text-stone" />
                  <span className="text-stone text-[13px]">{room.capacity}</span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-1.5" title={amenity.label}>
                      <amenity.icon size={16} className="text-olive-muted" />
                      <span className="text-[12px] text-olive-muted">{amenity.label}</span>
                    </div>
                  ))}
                </div>

                <p className="text-stone text-[13px] leading-relaxed mb-5 line-clamp-none md:line-clamp-2">
                  {room.description}
                </p>

                <div className="flex items-end justify-between">

                  <a
                    href="#contacto"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex text-terracotta text-base font-bold px-4 py-2 -ml-4 rounded-lg transition-all duration-300 hover:bg-terracotta hover:text-white active:scale-95"
                  >
                    Consultar disponibilidad →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
