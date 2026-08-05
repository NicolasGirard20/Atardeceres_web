import { useState } from 'react';
import { Play } from 'lucide-react';

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'aME0G3ZMYxk';

  return (
    <section id="video" className="bg-white py-[72px] md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="scroll-reveal text-terracotta text-base uppercase tracking-[2px] font-bold mb-4">
            Un Lugar especial
          </p>
          <h2 className="scroll-reveal section-title font-display text-deep-olive">
            Sentí la Magia de los Atardeceres Entrerianos
          </h2>
        </div>

        {/* Video Container */}
        <div className="scroll-reveal-scale max-w-[1000px] mx-auto rounded-xl overflow-hidden relative" style={{ aspectRatio: '16/9' }}>
          {!isPlaying ? (
            <>
              {/* Thumbnail overlay */}
              <img
                src="/img-cabin-exterior.jpg"
                alt="Vista de los Atardeceres"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                  style={{ backgroundColor: 'var(--terracotta)' }}
                  aria-label="Reproducir video"
                >
                  <Play size={28} fill="white" />
                </button>
              </div>
            </>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
              title="Video de Atardeceres"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          )}
        </div>

        {/* Description */}

      </div>
    </section>
  );
}
