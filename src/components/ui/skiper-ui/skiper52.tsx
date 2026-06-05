"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");

const HoverExpand_001 = ({
  images,
  className,
}: {
  images: {
    src: string;
    alt: string;
    mediaType?: "image" | "video";
    title?: string;
    description?: string;
    tag?: string;
    link?: string;
  }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    images.forEach((image, index) => {
      const video = videoRefs.current[index];
      if (!video || image.mediaType !== "video") {
        return;
      }

      if (activeImage === index) {
        video.play().catch(() => undefined);
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeImage, images]);

  return (
    <div className={cn("relative w-full max-w-6xl px-5", className)}>
      <div className="flex w-full items-center justify-start gap-1 overflow-x-auto sm:justify-center sm:overflow-visible">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative h-112 shrink-0 cursor-pointer overflow-hidden rounded-3xl transition-[width] duration-300 ease-in-out sm:h-144",
              activeImage === index ? "w-[min(72vw,48rem)]" : "w-24 sm:w-32",
            )}
            onClick={() => setActiveImage(index)}
            onMouseEnter={() => setActiveImage(index)}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {image.mediaType === "video" ? (
              <video
                ref={(element) => {
                  videoRefs.current[index] = element;
                }}
                className="size-full object-cover"
                src={image.src}
                muted
                loop
                playsInline
                preload="auto"
                aria-label={image.alt}
              />
            ) : (
              <img
                src={image.src}
                className="size-full object-cover"
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            )}

            {/* Conteúdo do card */}
            <AnimatePresence>
              {activeImage === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="absolute bottom-0 left-0 right-0 z-20 p-6 flex flex-col gap-2"
                >
                  <span className="text-xs text-white/50 font-mono tracking-widest uppercase">
                    {image.tag}
                  </span>
                  <h3 className="text-white text-2xl font-bold leading-tight">
                    {image.title ?? image.alt}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {image.description ?? image.alt}
                  </p>
                  {image.link && (
                    <a
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors duration-200 pointer-events-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Número quando fechado */}
            <AnimatePresence>
              {activeImage !== index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 flex items-end justify-center pb-4"
                >
                  <span className="text-white/30 text-xs font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export { HoverExpand_001 };
