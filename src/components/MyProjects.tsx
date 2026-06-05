import { HoverExpand_001 } from "./ui/skiper-ui/skiper52";

const projects = [
    {
        src: "/projects/spotcreators.mp4",
        mediaType: "video" as const,
        alt: "Spot Creators",
        title: "Spot Creators",
        description: "Website para agência de influenciadores, com foco em SEO e 3D.",
        tag: "Website · Next.js · SEO · 3D",
        link: "https://spotcreators.com.br",
    },
    {
        src: "/projects/tattooagenda.png",
        mediaType: "image" as const,
        alt: "TattooAgenda",
        title: "TattooAgenda",
        description: "SaaS para tatuadores gerenciarem clientes, sessões e materiais.",
        tag: "SaaS · Full Stack",
        link: "https://tattooagenda.ink",

    },
    {
        src: "/projects/speedqueengambelas.mp4",
        mediaType: "video" as const,
        alt: "Speed Queen Gambelas",
        title: "Speed Queen Gambelas",
        description: "Landing page para lavanderia, com foco em conversão e performance.",
        tag: "Landing Page",
        link: "https://speedqueen-al.vercel.app/",
    },
];

export default function MyProjects() {
    return (
        <section
            id="myprojects-section"
            className="min-h-screen bg-[#131313] text-[#e3e3e3] flex flex-col justify-start pt-24 pb-24 select-none overflow-hidden"
            style={{
                paddingLeft: "clamp(1.5rem, 8vw, 8rem)",
                paddingRight: "clamp(1.5rem, 8vw, 8rem)",
                contentVisibility: "auto",
                containIntrinsicSize: "900px",
            }}
        >
            <div className="ml-0 sm:ml-8">
                <div className="py-4 sm:py-6">
                    <h2 className="text-base sm:text-xl font-bold bg-linear-to-t from-[#7d4ef5] to-[#e87dff] bg-clip-text text-transparent pb-12">
                        Explore some public works
                    </h2>
                </div>
            </div>

            <HoverExpand_001 images={projects} />
        </section>
    );
}
