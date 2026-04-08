import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';

export function Hero() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="h-[85vh] flex items-center justify-center relative overflow-hidden pt-20">
      {/* Soft glow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 text-center px-6 transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <h1
          className="text-[clamp(3rem,12vw,10rem)] leading-[0.9] tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="block text-primary drop-shadow-[0_0_40px_rgba(232,174,183,0.3)]">
            Bárbara
          </span>
          <span className="block text-primary/90 drop-shadow-[0_0_40px_rgba(232,174,183,0.3)]">
            Dapper
          </span>
        </h1>

        <p className="mt-8 text-muted-foreground text-lg tracking-wide">
          {language === 'en'
            ? 'iOS Developer | Data Science and AI Student'
            : 'Desenvolvedora iOS | Estudante de Ciência de Dados e IA'}
        </p>
      </div>
    </section>
  );
}
