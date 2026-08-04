
import { Phone, Clock, MapPin, MessageCircle } from 'lucide-react';

const contactInfo = [
  { icon: Phone, text: '+54 9 343 429-6075' },
  { icon: Clock, text: 'Check-in: 15:00 · Check-out: 11:00' },
  { icon: MapPin, text: 'Luís Ernst, Libertador San Martín, Entre Ríos' },
];



export default function Contact() {





  return (
    <section id="contacto" className="bg-white/85 py-[72px] md:py-[120px]" >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column - 45% */}
          <div className="lg:w-[45%] scroll-reveal-left">
            <p className="text-terracotta text-[13px] uppercase tracking-[2px] font-medium mb-4">
              Reservá Tu Estadía
            </p>
            <h2 className="section-title font-display text-deep-olive mb-5">
              Atardeceres te espera
            </h2>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5493434296075"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mb-10"
            >
              <MessageCircle size={20} />
              Escribir por WhatsApp
            </a>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 mt-8">
              {contactInfo.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <item.icon
                    size={18}
                    className="text-terracotta mt-0.5 shrink-0"
                  />
                  <span className="body-text text-olive-muted">{item.text}</span>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
