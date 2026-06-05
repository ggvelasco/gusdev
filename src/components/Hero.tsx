import Spline from "@splinetool/react-spline";
import GradientText from "./GradientText";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">

      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* <Spline scene="/scene.splinecode"
        /> */}
      </div>

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