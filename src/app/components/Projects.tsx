import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { ProjectDetail } from './ProjectDetail';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Import Pow Po Po assets
import powPoPoIcon from '../../assets/b665fcdba0ca37a89ee5c069251f4fb83344332b.png';
import powPoPoScreen0 from '../../assets/c24fdb8f4185f1e88966e6edbcf7af43a6aa9def.png';
import powPoPoScreen1 from '../../assets/ce9b04f5abb10ab17cb8b2032f9712236b1ec76b.png';
import powPoPoScreen2 from '../../assets/0de805456e7ea21e379e76f0f8722fa841164a70.png';
import powPoPoScreen3 from '../../assets/dba9de36610565fa8c7de4bfb91cfc933fff78da.png';
import powPoPoScreen4 from '../../assets/40cdd06e72e1f27cb26c69f1337c5f8cf8207f42.png';

// Import Oh My Grill! assets
import ohMyGrillIcon from '../../assets/93a0601e1442b0a85de55c5de8a6695b3433109d.png';
import ohMyGrillScreen0 from '../../assets/27772ad914f189c30e65c0fd1c2835a928e549ad.png';
import ohMyGrillScreen1 from '../../assets/da38087e842d67901ede71f9e234e99265c7aba2.png';
import ohMyGrillScreen2 from '../../assets/4d12facf71a14b005762088aacec3dd35700e5f0.png';
import ohMyGrillScreen3 from '../../assets/e0b1c2cbbe400e56e3cc85ba0fe68af913eb3da1.png';

// Import Profitto assets
import profittoIcon from '../../assets/ee106bbadc748d5db60914ba7ec9a96953a56c8e.png';
import profittoScreen0 from '../../assets/ea1d0c1c3dddd84ea7c2de456718b767cabbbd85.png';
import profittoScreen1 from '../../assets/3b3381bdc287b6a67b7f2b980198a5a76314e0cd.png';
import profittoScreen2 from '../../assets/b2e376a743945ede18bf73a434b3c20576d0a981.png';
import profittoScreen3 from '../../assets/eb1307e63ac5219968377e1e2c65c0cbe66183e9.png';

// Import Sippin' assets
import sippinIcon from '../../assets/03d60fcdda68330636781f492e89d3a94f021ef5.png';
import sippinScreen0 from '../../assets/3cbd09a4433e8c13396110fdf6194f61276ba95a.png';
import sippinScreen1 from '../../assets/72c6ff7bcf2d3a6ec76472ab5964a6919721551b.png';
import sippinScreen2 from '../../assets/81969428814c100846c85044e290e4d07559258f.png';
import sippinScreen3 from '../../assets/e9e435f7615d9d80781f845bcb4835f59799847e.png';
import sippinScreen4 from '../../assets/81170fad5e64885035374b1f824ddf90a8da00a7.png';
import sippinScreen5 from '../../assets/40991915ceeac3bf753885b3ae6a0f6fd0f68b8d.png';

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

export function Projects() {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      name: 'Pow Po Po',
      description: {
        en: 'A chicken with a dream: Fight to Survive.',
        pt: 'Uma galinha com um sonho: Lutar para Sobreviver.'
      },
      year: '2026',
      icon: powPoPoIcon,
      fullDescription: {
        en: 'A chicken with a dream: Fight to Survive. Your weapons? Eggs. Lots of them. Fast, chaotic, and slightly unhinged. Fight for happy eggs in this chaotic roguelike.',
        pt: 'Uma galinha com um sonho: Lutar para Sobreviver. Suas armas? Ovos. Muitos deles. Rápido, caótico e um pouco descontrolado. Lute por ovos felizes neste roguelike caótico.'
      },
      techStack: ['SpriteKit', 'GameCenter', 'Monetization', 'Ads'],
      team: [
        { name: 'Ana Poletto', role: 'iOS Developer', linkedin: 'https://www.linkedin.com/in/ana-poletto-2a7222318/' },
        { name: 'Bárbara Dapper', role: 'iOS Developer', linkedin: 'https://www.linkedin.com/in/barbara-dapper' },
        { name: 'Fernanda Uberti', role: 'iOS Developer', linkedin: 'https://www.linkedin.com/in/fernanda-farias-uberti-34507926b/' },
        { name: 'Luísa Cecília', role: 'UI/UX Designer', linkedin: 'https://www.linkedin.com/in/lucecyl/' },
        { name: 'Marcos Raach', role: 'iOS Developer', linkedin: 'https://www.linkedin.com/in/marcosraach/' }
      ],
      screenshots: [
        powPoPoScreen0,
        powPoPoScreen1,
        powPoPoScreen2,
        powPoPoScreen3,
        powPoPoScreen4
      ],
      appStoreUrl: 'https://apps.apple.com/br/app/pow-po-po/id6760563455?l=en-GB'
    },
    {
      id: '2',
      name: 'Oh My Grill!',
      description: {
        en: 'Slice, grill and toss ingredients to your team in this fast-paced co-op kitchen chaos.',
        pt: 'Corte, grelhe e lance ingredientes para sua equipe neste caos de cozinha cooperativo em ritmo acelerado.'
      },
      year: '2025',
      icon: ohMyGrillIcon,
      fullDescription: {
        en: 'Slice, grill and toss ingredients to your team in this fast-paced co-op kitchen chaos. Can you keep the grill hot and orders on time?',
        pt: 'Corte, grelhe e lance ingredientes para sua equipe neste caos de cozinha cooperativo em ritmo acelerado. Você consegue manter a churrasqueira quente e os pedidos no prazo?'
      },
      techStack: ['SpriteKit', 'MultipeerConnectivity', 'GamePlayKit', 'CoreMotion'],
      team: [
        { name: 'Bárbara Dapper', role: 'iOS Developer', linkedin: 'https://www.linkedin.com/in/barbara-dapper' },
        { name: 'Jean Pierre', role: 'iOS Developer', linkedin: 'https://www.linkedin.com/in/jeanpierrerodrigues/' },
        { name: 'João Pedro Carvalho', role: 'iOS Developer', linkedin: 'https://www.linkedin.com/in/joão-pedro-teixeira-de-carvalho-6631b6224/' },
        { name: 'Maria Maidana', role: 'iOS Developer', linkedin: 'https://www.linkedin.com/in/mariaeduardasantellano/' },
        { name: 'Vítor Martins', role: 'UI/UX Designer', linkedin: 'https://www.linkedin.com/in/vítor-martins-940576207/' }
      ],
      screenshots: [
        ohMyGrillScreen0,
        ohMyGrillScreen1,
        ohMyGrillScreen2,
        ohMyGrillScreen3
      ],
      appStoreUrl: 'https://apps.apple.com/br/app/oh-my-grill/id6756377473?l=en-GB'
    },
    {
      id: '3',
      name: 'Profitto',
      description: {
        en: 'Profitto brings together everything you need to simplify your routine and offer more control in the daily life of small business owners.',
        pt: 'O Profitto reúne tudo o que você precisa para simplificar a rotina e oferecer mais controle e praticidade no dia a dia do pequeno empreendedor.'
      },
      year: '2025',
      icon: profittoIcon,
      fullDescription: {
        en: 'Profitto brings together everything you need to simplify your routine and offer more control and convenience in the daily life of small business owners.',
        pt: 'O Profitto reúne tudo o que você precisa para simplificar a rotina e oferecer mais controle e praticidade no dia a dia do pequeno empreendedor.'
      },
      techStack: ['SwiftData', 'CloudKit', 'LiquidGlass', 'MVVM'],
      team: [
        { name: 'Adriel de Souza', role: 'iOS Developer', linkedin: 'https://www.linkedin.com/in/dsadriel/' },
        { name: 'Bárbara Dapper', role: 'iOS Developer', linkedin: 'https://www.linkedin.com/in/barbara-dapper' },
        { name: 'Bruna Marschner', role: 'iOS Developer', linkedin: 'https://www.linkedin.com/in/brunamarschner/' },
        { name: 'Carolina dos Santos', role: 'iOS Developer', linkedin: 'https://www.linkedin.com/in/carolina-silva-dos-santos-a320111a7/' },
        { name: 'Martina Adegas', role: 'UI/UX Designer', linkedin: 'https://www.linkedin.com/in/martina-nogueira-da-gama-adegas/' }
      ],
      screenshots: [
        profittoScreen0,
        profittoScreen1,
        profittoScreen2,
        profittoScreen3
      ],
      appStoreUrl: 'https://apps.apple.com/br/app/profitto/id6752310169?l=en-GB'
    },
    {
      id: '4',
      name: "Sippin'",
      description: {
        en: "Sippin' is a coffee shop tracking app designed to transform everyday café visits into a more intentional and memorable experience.",
        pt: "Sippin' é um app de rastreamento de cafeterias projetado para transformar visitas cotidianas em cafés em uma experiência mais intencional e memorável."
      },
      year: '2025',
      icon: sippinIcon,
      fullDescription: {
        en: "Sippin' is a coffee shop tracking app designed to transform everyday café visits into a more intentional and memorable experience. From initial research to concept development and interface design, the project explores how people connect with places, routines, and small rituals. The app allows users to log visits, organize their favorite spots, and revisit experiences in a simple and visually pleasing way.",
        pt: "Sippin' é um app de rastreamento de cafeterias projetado para transformar visitas cotidianas em cafés em uma experiência mais intencional e memorável. Da pesquisa inicial ao desenvolvimento de conceito e design de interface, o projeto explora como as pessoas se conectam com lugares, rotinas e pequenos rituais. O app permite aos usuários registrar visitas, organizar seus lugares favoritos e revisitar experiências de uma forma simples e visualmente agradável."
      },
      techStack: ['Figma', 'UX', 'Benchmarking', 'Persona', 'Style Guide', 'User Research'],
      team: [
        { name: 'Bárbara Dapper', role: 'UX/UI Designer | iOS Developer', linkedin: 'https://www.linkedin.com/in/barbara-dapper' }
      ],
      screenshots: [
        sippinScreen0,
        sippinScreen1,
        sippinScreen2,
        sippinScreen3,
        sippinScreen4,
        sippinScreen5
      ]
    }
  ];

  return (
    <>
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
            {language === 'en' ? 'projects' : 'projetos'}
          </h2>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="w-full group px-8 py-8 bg-card/20 backdrop-blur-sm border border-white/5 rounded-3xl
                         hover:bg-primary/5 hover:border-primary/20 transition-all duration-700 cursor-pointer
                         text-left"
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {typeof project.icon === 'string' && project.icon.length < 5 ? (
                      <div className="text-5xl">{project.icon}</div>
                    ) : (
                      <img
                        src={project.icon}
                        alt={project.name}
                        className="w-20 h-20 rounded-2xl object-cover"
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description[language]}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-muted-foreground/50">
                      {project.year}
                    </span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
