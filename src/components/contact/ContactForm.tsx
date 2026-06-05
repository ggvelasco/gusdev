import { useState } from "react";

function FieldLabel({ children }: { children: React.ReactNode }) {
    return (
        <span className="block text-xs font-black uppercase tracking-wide text-neutral-900 sm:text-sm">
            {children}
        </span>
    );
}

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <form className="grid w-full grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[0.95fr_1.9fr] lg:gap-12">
            <div className="grid gap-8 md:gap-10">
                <label className="grid h-[118px] content-between sm:h-[132px] lg:h-[142px]">
                    <FieldLabel>Full Name *</FieldLabel>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-12 w-full border-0 border-b-[3px] border-neutral-950 bg-transparent text-lg font-medium text-neutral-950 outline-none transition-colors placeholder:text-neutral-950/35 focus:border-neutral-950 sm:text-xl"
                        autoComplete="name"
                    />
                </label>

                <label className="grid h-[118px] content-between sm:h-[132px] lg:h-[142px]">
                    <FieldLabel>Email *</FieldLabel>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 w-full border-0 border-b-[3px] border-neutral-950 bg-transparent text-lg font-medium text-neutral-950 outline-none transition-colors placeholder:text-neutral-950/35 focus:border-neutral-950 sm:text-xl"
                        autoComplete="email"
                    />
                </label>
            </div>

            <label className="relative grid h-[118px] content-between sm:h-[132px] lg:h-[324px]">
                <FieldLabel>Message *</FieldLabel>

                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={1}
                    className="h-12 w-full resize-none border-0 border-b-[3px] border-neutral-950 bg-transparent pr-20 text-lg font-medium text-neutral-950 outline-none transition-colors placeholder:text-neutral-950/35 focus:border-neutral-950 sm:pr-24 sm:text-xl"
                />

                <button
                    type="button"
                    aria-label="Send message"
                    className="absolute bottom-2 right-0 grid size-14 place-items-center rounded-full bg-neutral-950 text-white transition-transform duration-200 hover:scale-105 sm:size-20"
                >
                    <svg
                        className="size-7 sm:size-9"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 2 11 13" />
                        <path d="m22 2-7 20-4-9-9-4Z" />
                    </svg>
                </button>
            </label>
        </form>
    );
}