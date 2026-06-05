export default function CircularText({
    text = "© 2026 Gustavo Velasco • São Paulo •",
    size = 120,
}: {
    text?: string;
    size?: number;
}) {
    const id = "contact-circular-text";
    const center = size / 2;
    const radius = size * 0.39;

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="block shrink-0 text-neutral-950"
            aria-hidden="true"
        >
            <defs>
                <path
                    id={id}
                    d={`
            M ${center},${center}
            m -${radius},0
            a ${radius},${radius} 0 1,1 ${radius * 2},0
            a ${radius},${radius} 0 1,1 -${radius * 2},0
          `}
                />
            </defs>

            <text
                fill="currentColor"
                style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: size * 0.135,
                    letterSpacing: "0.01em",
                    lineHeight: "1em",
                }}
            >
                <textPath href={`#${id}`} startOffset="0">
                    {text}
                </textPath>
            </text>
        </svg>
    );
}