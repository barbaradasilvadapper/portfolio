import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Project {
  id: string;
  name: string;
  description: { en: string; pt: string };
  year: string;
  icon: string;
  fullDescription: { en: string; pt: string };
  techStack: string[];
  team: { name: string; role: string; linkedin: string }[];
  screenshots: string[];
  appStoreUrl?: string;
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const { language } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl overflow-y-auto">
      <div className="min-h-screen px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 p-3 rounded-full bg-card/50 hover:bg-primary/10
                     border border-white/5 hover:border-primary/20 transition-all duration-300"
          >
            <X className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
          </button>

          {/* Top Section - Horizontal Layout */}
          <div className="mb-16 flex gap-8 items-start">
            {/* App Icon */}
            <div className="flex-shrink-0">
              {typeof project.icon === 'string' && project.icon.length < 5 ? (
                <div className="text-8xl w-32 h-32 flex items-center justify-center
                              rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5">
                  {project.icon}
                </div>
              ) : (
                <img
                  src={project.icon}
                  alt={project.name}
                  className="w-32 h-32 rounded-3xl object-cover"
                />
              )}
            </div>

            {/* Right Side: Title, Description, Button */}
            <div className="flex-1">
              <h1
                className="text-5xl text-primary mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {project.name}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {project.fullDescription[language]}
              </p>

              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground
                           rounded-full hover:bg-primary/90 transition-all duration-300 font-medium"
                >
                  <span>
                    {language === 'en' ? 'Download on the App Store' : 'Baixar na App Store'}
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Screenshots Section - Horizontal Preview */}
          {project.screenshots.length > 0 && (
            <div className="mb-16">
              <h3
                className="text-3xl mb-8 text-primary"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {language === 'en' ? 'preview' : 'prévia'}
              </h3>
              <div className="overflow-x-auto pb-4 -mx-6 px-6">
                <div className="flex gap-4">
                  {project.screenshots.map((screenshot, index) => {
                    // Determine if screenshot is landscape (Oh My Grill) or portrait (Pow Po Po)
                    const isOhMyGrill = project.name === 'Oh My Grill!';
                    const heightClass = isOhMyGrill ? 'h-[240px]' : 'h-[500px]';

                    return (
                      <div
                        key={index}
                        className="flex-shrink-0 rounded-3xl overflow-hidden border border-primary/10"
                      >
                        <img
                          src={screenshot}
                          alt={`${project.name} screenshot ${index + 1}`}
                          className={`${heightClass} w-auto object-contain`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-16">
            <h3
              className="text-3xl mb-8 text-primary"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {language === 'en' ? 'tech stack' : 'tecnologias'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 bg-card/20 backdrop-blur-sm border border-primary/20 rounded-full text-foreground/80"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h3
              className="text-3xl mb-8 text-primary"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {language === 'en' ? 'team' : 'equipe'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.team.map((member, index) => (
                <a
                  key={index}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-start gap-1 px-6 py-3 bg-card/20 backdrop-blur-sm
                           border border-white/5 rounded-2xl
                           hover:bg-primary/5 hover:border-primary/20 transition-all duration-300
                           text-foreground/80 hover:text-primary group"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{member.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
                  </div>
                  <span className="text-sm text-muted-foreground/60">{member.role}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
