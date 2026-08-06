import BackgroundLayer from './components/BackgroundLayer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#FAFAFA]">
      {/* Fixed background layer — z-0 */}
      <BackgroundLayer />

      {/* Navigation — z-50 */}
      <Navbar />

      {/* Command Palette — z-50 */}
      <CommandPalette />

      {/* Page content — z-10 */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
