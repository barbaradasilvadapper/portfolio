import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function HelloWorld() {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const content = {
    en: {
      title: 'hello world',
      p1: "I'm a developer passionate about building thoughtful, well-crafted digital experiences.",
      p2: 'Currently studying Data Science and Artificial Intelligence at PUCRS and part of the Apple Developer Academy Program, I focus on creating iOS apps that balance performance, design, and usability, with a strong interest in how data can enhance user experiences.',
      p3: "I'm always exploring new ideas, learning new tools, and finding ways to turn simple concepts into meaningful, data-informed products."
    },
    pt: {
      title: 'olá mundo',
      p1: 'Sou uma desenvolvedora apaixonada por criar experiências digitais bem elaboradas e cuidadosas.',
      p2: 'Atualmente estudando Ciência de Dados e Inteligência Artificial na PUCRS e participante da Apple Developer Academy, foco em criar apps iOS que equilibram performance, design e usabilidade, com forte interesse em como dados podem aprimorar a experiência do usuário.',
      p3: 'Estou sempre explorando novas ideias, aprendendo novas ferramentas e encontrando maneiras de transformar conceitos simples em produtos significativos e orientados por dados.'
    }
  };

  return (
    <section
      ref={ref as any}
      className={`py-20 px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-5xl mb-12 text-primary"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {content[language].title}
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>{content[language].p1}</p>
          <p>{content[language].p2}</p>
          <p>{content[language].p3}</p>
        </div>
      </div>
    </section>
  );
}
