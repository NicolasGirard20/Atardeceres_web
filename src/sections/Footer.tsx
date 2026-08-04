
const navLinks = [
  { label: 'Nuestra Historia', href: '#historia' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Habitaciones', href: '#habitaciones' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
];

// const infoLinks = [
//   'Políticas de Cancelación',
//   'Términos y Condiciones',
//   'Preguntas Frecuentes',
//   'Cómo Llegar',
// ];


export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-deep-olive pt-16 md:pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="scroll-reveal">
            <h3 className="font-display text-2xl  mb-2" style={{ color: 'var(--golden-wheat)' }}>
              ATARDECERES
            </h3>
            <p className="text-white/60 text-[15px] font-medium mb-4">
              El descanso con la mejor vista
            </p>

          </div>

          {/* Navigation Column */}
          <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
            <h4
              className="text-sm uppercase tracking-[1px] font-medium mb-5"
              style={{ color: 'var(--golden-wheat)' }}
            >
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/70 hover:text-white text-[13px] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Column */}
          {/* <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
            <h4
              className=" uppercase text-2xl tracking-[1px] font-medium mb-5"
              style={{ color: 'var(--golden-wheat)' }}
            >
              Información
            </h4>
            <ul className="flex flex-col gap-3">
              {infoLinks.map((link) => (
                <li key={link}>
                  <span className="text-white/70 text-[13px] cursor-default">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Hours Column */}
          <div className="scroll-reveal" style={{ transitionDelay: '300ms' }}>
            <h4
              className="text-sm uppercase tracking-[1px] font-medium mb-5"
              style={{ color: 'var(--golden-wheat)' }}
            >
              Horarios Del Hospedaje
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-white/70 text-[13px]">Check-in: 15:00</li>
              <li className="text-white/70 text-[13px]">Check-out: 11:00</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10"
          style={{ borderTop: '1px solid rgba(247, 243, 232, 0.15)' }}
        />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/70 text-[13px]">
            © {new Date().getFullYear()} Atardeceres. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}
