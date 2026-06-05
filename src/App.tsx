import './index.css';
import { useEffect, useRef, useState } from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Services from './components/Services';
import MyProjects from './components/MyProjects';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Loader from "./components/Loader";

export default function App() {
  const contactRevealRef = useRef<HTMLDivElement>(null);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const contactReveal = contactRevealRef.current;
    if (!contactReveal) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowContact(entry.isIntersecting),
      { rootMargin: "100% 0px", threshold: 0.01 }
    );

    observer.observe(contactReveal);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <main className="relative">

        {showContact && (
          <div className="fixed bottom-0 left-0 z-0 h-screen w-full">
            <Contact />
          </div>
        )}

        {/* Tudo que passa por cima do contact */}
        <div className="relative z-10">

          {/* Hero sticky */}
          <div className="sticky top-0 h-screen">
            <Hero />
          </div>

          {/* Seções do meio — ficam por cima do hero */}
          <div className="relative z-10 bg-neutral-950">
            <About />
            <Services />
            <MyProjects />
          </div>

        </div>

        {/* Spacer pra revelar o contact */}
        <div ref={contactRevealRef} className="h-screen" />

      </main>
    </>
  );
}
