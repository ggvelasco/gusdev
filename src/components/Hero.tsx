import { Suspense, lazy, useEffect, useRef, useState } from "react";
import GradientText from "./GradientText";
import ScrollIndicator from "./ScrollIndicator";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { rootMargin: "240px 0px" }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen bg-black overflow-hidden">

      <div className="absolute inset-0 w-full h-full z-0">
        {isHeroVisible && (
          <>
            <ScrollIndicator />
            <Suspense fallback={null}>
              <Spline scene="/scene.splinecode" />
            </Suspense>
          </>
        )}
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center pl-4 sm:pl-16 md:pl-24 lg:pl-36 pointer-events-none">
        <GradientText text="GUSTAVO" animated={false} className="text-white text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] font-bold mb-6 max-w-full leading-tight" />
      </div>
    </section>
  );
}
