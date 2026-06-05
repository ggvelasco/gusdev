import { lazy, Suspense } from "react";
import GradientText from "./GradientText";
import ScrollIndicator from "./ScrollIndicator";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">

      {/* Spline com lazy load */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <Spline scene="/scene.splinecode" />
        </Suspense>
      </div>

      {/* Conteúdo */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center pl-4 sm:pl-16 md:pl-24 lg:pl-36 pointer-events-none">
        <GradientText
          text="GUSTAVO"
          animated={false}
          className="text-white text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] font-bold mb-6 max-w-full leading-tight"
        />
      </div>

      <ScrollIndicator />

    </section>
  );
}