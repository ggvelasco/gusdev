import CircularText from "../CircularText";

export default function ContactMarquee() {
    const content = (
        <div className="flex shrink-0 items-center">
            <p
                className="shrink-0 translate-y-[0.12em] select-none whitespace-nowrap px-12 text-[300px] font-black leading-[0.9] tracking-[-0.04em] text-neutral-900"
                style={{
                    fontFamily: "'Diagraph Etc Bold', 'Diagraph Etc', sans-serif",
                    fontWeight: 800,
                }}
            >
                GET&nbsp;&nbsp;IN&nbsp;&nbsp;TOUCH&nbsp;&nbsp;
            </p>

            <div className="shrink-0 translate-y-[2.5em]">
                <CircularText size={120} />
            </div>
        </div>
    );

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none"
        >
            <div className="contact-marquee-track flex w-max">
                {content}
                {content}
            </div>
        </div>
    );
}