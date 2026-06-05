import GradientText from "../GradientText";

const socialLinks = [
    {
        label: "LI",
        href: "https://linkedin.com/in/ggvelasco/",
        title: "LinkedIn",
    },
    {
        label: "GH",
        href: "https://github.com/ggvelasco/",
        title: "GitHub",
    },
];

export default function ContactHeader() {
    return (
        <div className="mb-8 flex items-start justify-between gap-8">
            <GradientText
                text="CONTACT"
                animated={false}
                className="text-[3.6rem] font-bold leading-none text-neutral-900 sm:text-[4.8rem] lg:text-[5.8rem]"
            />

            <div className="flex items-center gap-5 pt-2">
                {socialLinks.map((s) => (
                    <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={s.title}
                        className="grid size-14 place-items-center rounded-full bg-neutral-950 text-white transition-transform duration-200 hover:scale-110"
                    >
                        <span className="text-sm font-black">{s.label}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}