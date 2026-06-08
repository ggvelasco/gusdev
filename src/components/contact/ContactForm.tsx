import { useState } from "react";

function FieldLabel({ children }: { children: React.ReactNode }) {
    return (
        <span className="block text-xs font-black uppercase tracking-wide text-neutral-900 sm:text-sm">
            {children}
        </span>
    );
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<Status>("idle");

    async function handleSubmit() {
        if (!name || !email || !message) return;
        setStatus("loading");

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setStatus("success");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <form
            className="grid w-full grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[0.95fr_1.9fr] lg:gap-12"
            onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
        >
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
                        className="h-12 w-full border-0 border-0 border-b-[3px] border-neutral-950 bg-transparent text-lg font-medium text-neutral-950 outline-none transition-colors placeholder:text-neutral-950/35 focus:border-neutral-950 sm:text-xl"
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

                {/* Feedback message */}
                {status === "success" && (
                    <span className="absolute -top-6 right-0 text-xs font-semibold text-neutral-950">
                        Message sent!
                    </span>
                )}
                {status === "error" && (
                    <span className="absolute -top-6 right-0 text-xs font-semibold text-red-700">
                        Something went wrong. Try again.
                    </span>
                )}

                <button
                    type="submit"
                    disabled={status === "loading"}
                    aria-label="Send message"
                    className="absolute bottom-2 right-0 grid size-14 place-items-center rounded-full bg-neutral-950 text-white transition-transform duration-200 hover:scale-105 disabled:opacity-50 sm:size-20"
                >
                    {status === "loading" ? (
                        <svg className="size-7 animate-spin sm:size-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                            <path d="M12 2a10 10 0 0 1 10 10" />
                        </svg>
                    ) : status === "success" ? (
                        <svg className="size-7 sm:size-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    ) : (
                        <svg className="size-7 sm:size-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 2 11 13" />
                            <path d="m22 2-7 20-4-9-9-4Z" />
                        </svg>
                    )}
                </button>
            </label>
        </form>
    );
}