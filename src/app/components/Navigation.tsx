import { useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <div
          className="text-primary text-xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          bárbara dapper
        </div>

        <div className="flex items-center gap-8">
          <a
            href="https://github.com/barbaradasilvadapper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/barbara-dapper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            LinkedIn
          </a>

          {/* Language Toggle */}
          <div className="flex items-center ml-4">
            <div className="flex items-center bg-card/30 rounded-full p-1 border border-white/5">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground/70'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                  language === 'pt'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground/70'
                }`}
              >
                PT
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
