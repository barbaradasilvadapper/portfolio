import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HelloWorld } from './components/HelloWorld';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <HelloWorld />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
