"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete?: () => void }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(() => onComplete?.(), 1000);
        }, 2200);
        return () => clearTimeout(timer);
    }, [onComplete]);

    const bars = 5;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex pointer-events-none"
                    exit={{ opacity: 1 }}
                >
                    {Array.from({ length: bars }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 h-full origin-top"
                            style={{ background: i % 2 === 0 ? "#131313" : "#1a1a1a" }}
                            initial={{ scaleY: 1 }}
                            animate={{ scaleY: 1 }}
                            exit={{
                                scaleY: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: [0.76, 0, 0.24, 1],
                                    delay: i * 0.07,
                                },
                            }}
                        />
                    ))}

                    {/* Texto central */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.6 } }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    >
                        <div className="flex flex-col items-center gap-4">
                            <motion.span
                                className="text-[#e3e3e3] text-[5rem] sm:text-[8rem] font-bold leading-none tracking-tighter select-none"
                                style={{ fontFamily: "'Diagraph Etc', sans-serif", fontWeight: 700 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6, ease: "easeOut" } }}
                            >
                                GV
                            </motion.span>

                            {/* Barra de progresso */}
                            <div className="w-32 h-px bg-white/10 overflow-hidden">
                                <motion.div
                                    className="h-full"
                                    style={{ background: "linear-gradient(to right, #7c3aed, #a855f7)" }}
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%", transition: { delay: 0.5, duration: 1.5, ease: "easeInOut" } }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}