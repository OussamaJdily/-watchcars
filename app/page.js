import { Navbar } from './components/Navbar';
import { Preloader } from './components/Preloader';
import { CursorGlow } from './components/CursorGlow';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CanvasBackdrop } from './components/CanvasBackdrop';

export default function Home() {
  return (
    <>
      <Preloader />
      <CursorGlow />
      <Navbar />

      <main className="relative">
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Pricing />
        <Gallery />
        <Testimonials />
        <About />
        <Contact />
      </main>

      <Footer />

      {/* Fixed canvas overlay for ambient particles */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-50">
        <CanvasBackdrop density={40} />
      </div>
    </>
  );
}