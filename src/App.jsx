import BackgroundLayer from './components/BackgroundLayer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Process from './components/Process';
import Experience from './components/Experience';
import Education from './components/Education';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
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
        <Projects />
        <Process />
        <Experience />
        <Education />
        <Blog />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
