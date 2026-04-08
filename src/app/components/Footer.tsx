import memoji from '../../assets/4f876c610cf014c50199b7153d991a2e4eb7f95b.png';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Footer() {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer
      ref={ref as any}
      className={`py-20 px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Memoji avatar */}
        <div className="mb-8 flex justify-center">
          <img
            src={memoji}
            alt="Memoji"
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>

        {/* Signature */}
        <div className="mb-6">
          <p
            className="text-6xl text-primary opacity-90"
            style={{
              fontFamily: "'Herr Von Muellerhoff', cursive",
              fontWeight: 400,
              fontStyle: 'italic',
              letterSpacing: '-0.02em',
              transform: 'rotate(-1.5deg)'
            }}
          >
            bárbara dapper
          </p>
        </div>

        {/* Tagline */}
        <p className="text-muted-foreground/60 italic text-sm mb-12">
          {language === 'en'
            ? 'built with code, creativity, and a touch of pink'
            : 'construído com código, criatividade e um toque de rosa'}
        </p>

        {/* Copyright */}
        <p className="text-muted-foreground/40 text-sm">
          © 2026 Bárbara Dapper
        </p>
      </div>
    </footer>
  );
}
