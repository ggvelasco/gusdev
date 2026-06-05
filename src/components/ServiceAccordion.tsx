"use client";
import { useState } from "react";

const services = [
    {
        title: "Web Development",
        description:
            "Sites, landing pages, and full web systems built from scratch. Fast, responsive, and production-ready.",
    },
    {
        title: "E-commerce",
        description:
            "Online stores built to convert. From product pages to checkout flow, everything your business needs to sell.",
    },
    {
        title: "SaaS Development",
        description:
            "Full-stack SaaS products like TattooAgenda — auth, dashboards, billing, and everything in between.",
    },
    {
        title: "AI & Automation",
        description:
            "AI integrations and automated workflows using n8n. Connect tools, reduce manual work, and build smarter systems.",
    },
    {
        title: "3D Web Experiences",
        description:
            "Immersive 3D interfaces with WebGL and WebGPU. The kind of thing that makes people say: didn't know you could do that in a browser.",
    },
    {
        title: "Backend & APIs",
        description:
            "Node.js and TypeScript backends, REST APIs, database architecture, and third-party integrations.",
    },
];

export default function ServiceAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="w-full mt-16 px-0 sm:px-12 md:px-24 lg:px-36">
            {services.map((service, i) => {
                const isOpen = openIndex === i;
                return (
                    <div
                        key={i}
                        className="border-t border-zinc-800 last:border-b"
                    >
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                            className="w-full flex items-center justify-between py-6 group cursor-pointer"
                        >
                            {/* Number + Title */}
                            <div className="flex items-center gap-6">
                                <span className="text-xs text-zinc-600 font-mono w-6 text-right select-none">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span
                                    className={`text-2xl sm:text-3xl font-medium tracking-tight transition-colors duration-300 ${isOpen ? "text-white" : "text-zinc-400 group-hover:text-white"
                                        }`}
                                >
                                    {service.title}
                                </span>
                            </div>

                            {/* Plus / Minus icon */}
                            <span
                                className={`text-[#9e16ff] text-3xl font-normal transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"
                                    }`}
                                style={{ lineHeight: 1 }}
                            >
                                +
                            </span>
                        </button>

                        {/* Expandable content */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="pb-6 pl-8 sm:pl-12 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                                {service.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}