import { motion } from "framer-motion";

export default function ScrollIndicator() {
    const trackHeight = 64;
    const barHeight = 24;

    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none">

            {/* Trilho */}
            <div className="relative w-px bg-white/10 overflow-hidden" style={{ height: trackHeight }}>
                {/* Barra roxa */}
                <motion.div
                    className="absolute top-0 left-0 w-full rounded-full"
                    style={{
                        height: barHeight,
                        background: "linear-gradient(to bottom, #a855f7, #7c3aed)",
                    }}
                    animate={{ y: [0, trackHeight - barHeight, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Seta fixa */}
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path
                    d="M1 1L6 6L11 1"
                    stroke="#ffffff40"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            {/* SCROLL fixo */}
            <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-medium">
                Scroll
            </span>

        </div>
    );
}