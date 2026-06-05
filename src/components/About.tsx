"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import GradientText from "./GradientText";

const paragraphs = [
  `Full Stack Developer, TypeScript and Node day to day.`,
  `I build interfaces, backends, e-commerce, and full systems from scratch.`,
  `I'm the creator of`,
  `TattooAgenda`,
  `, a SaaS that helps tattoo artists manage clients, sessions, and supplies, so they can spend more time doing what they're good at.`,
  `I also work with AI, automation, and lately 3D on the web.`,
  `The kind of thing where people open the browser and go "huh, didn't know you could do that."`,
  `Two years in, fast learner, and I like working on stuff that's a little harder than it looks.`,
];

function RevealParagraph({ text, index, total, scrollYProgress, purple }: {
  text: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  purple?: boolean;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["rgb(60,60,60)", purple ? "rgb(180,130,255)" : "rgb(227,227,227)"]
  );

  return (
    <motion.span style={{ color }} className="inline">
      {text}{" "}
    </motion.span>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} id="about-section" style={{ height: "400vh" }}>
      <div
        className="sticky top-0 min-h-screen bg-[#131313] text-[#e3e3e3] flex flex-col justify-center gap-12 sm:gap-16 select-none overflow-hidden"
        style={{ paddingLeft: "clamp(1.5rem, 8vw, 8rem)", paddingRight: "clamp(1.5rem, 8vw, 8rem)" }}
      >
        <div className="ml-0 sm:ml-8">
          <div className="py-4 sm:py-6">
            <h2 className="text-base sm:text-xl font-bold bg-linear-to-t from-[#7d4ef5] to-[#e87dff] bg-clip-text text-transparent">
              Hi, I'm Gus!
            </h2>
          </div>
          <GradientText
            text="SOFTWARE DEVELOPER"
            className="text-white text-[1.6rem] sm:text-[3.5rem] md:text-[5rem] font-bold max-w-full leading-tight"
          />
        </div>

        <div className="max-w-4xl w-full mx-auto flex flex-col gap-8">

          {/* Profile Row */}
          <div className="flex items-center gap-5">
            <img
              src="/pfp.png"
              alt="Gus Professional Developer"
              referrerPolicy="no-referrer"
              className="w-20 h-20 sm:w-32 sm:h-32 rounded-full object-cover"
            />
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141215]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] text-zinc-400 font-medium tracking-wide">
                open to create
              </span>
            </div>
          </div>

          {/* Texto com reveal */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed font-normal">
            {paragraphs.map((text, i) => (
              <RevealParagraph
                key={i}
                text={text}
                index={i}
                total={paragraphs.length}
                scrollYProgress={scrollYProgress}
                purple={i === 3 || i === 6}
              />
            ))}
          </p>

        </div>
      </div>
    </div>
  );
}
