import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import DataVisualization from '@/components/sections/data-visualization';
import Contact from '@/components/sections/contact';
import Navbar from '@/components/layout/navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <DataVisualization />
        <Contact />
      </main>
    </div>
  );
}