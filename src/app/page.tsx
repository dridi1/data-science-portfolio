import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import DataVisualization from '@/components/sections/data-visualization';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <DataVisualization />
      <Projects />
      <Contact />
    </>
  );
}