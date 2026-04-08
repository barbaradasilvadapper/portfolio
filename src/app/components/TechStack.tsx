import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function TechStack() {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const technologies = [
    'Python',
    'Machine Learning',
    'Data Analysis',
    'Data Visualization',
    'Artificial Intelligence',
    'Swift',
    'SwiftUI',
    'UIKit',
    'Git',
    'Figma'
  ];

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
          {language === 'en' ? 'tech stack' : 'tecnologias'}
        </h2>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <div
              key={tech}
              className={`px-6 py-3 bg-card/20 backdrop-blur-sm border border-primary/20 rounded-full
                       text-foreground/80 transition-all duration-700`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
