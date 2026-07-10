import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Nuestra Historia', href: '#historia' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Habitaciones', href: '#habitaciones' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] md:h-[72px] transition-all duration-400 ${
          scrolled
            ? 'bg-[var(--cream)]/95 backdrop-blur-[12px] border-b border-[var(--stone)]/20 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-display text-xl font-semibold transition-colors duration-300 ${
              scrolled ? 'text-deep-olive' : 'text-cream'
            }`}
          >
            ATARDECERES
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link text-[14px] font-medium transition-colors duration-200 ${
                  scrolled
                    ? activeSection === link.href
                      ? 'text-deep-olive'
                      : 'text-olive-muted hover:text-deep-olive'
                    : 'text-white font-bold hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          {/* <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, '#contacto')}
            className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-250 hover:-translate-y-px"
            style={{
              backgroundColor: 'var(--terracotta)',
              color: 'var(--white)',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = 'var(--terracotta-hover)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = 'var(--terracotta)')
            }
          >
            Reservar
          </a> */}

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? 'text-deep-olive' : 'text-cream'
            }`}
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${mobileOpen ? 'active' : ''}`}>
        <button
          className="absolute top-6 right-6 text-cream p-2"
          onClick={() => setMobileOpen(false)}
          aria-label="Cerrar menú"
        >
          <X size={28} />
        </button>
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="font-display text-2xl text-cream hover:text-golden-wheat transition-colors"
            style={{
              animationDelay: `${i * 100}ms`,
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contacto"
          onClick={(e) => handleNavClick(e, '#contacto')}
          className="btn-primary mt-4"
        >
          Reservar Ahora
        </a>
      </div>
    </>
  );
}
