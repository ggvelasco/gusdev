import GradientText from "./GradientText";
import ServiceAccordion from "./ServiceAccordion";

export default function Services() {
    return (
        <section
            id="services-section"
            className="min-h-screen bg-[#131313] text-[#e3e3e3] flex flex-col justify-start pt-24 pb-24 select-none overflow-hidden"
            style={{
                paddingLeft: "clamp(1.5rem, 8vw, 8rem)",
                paddingRight: "clamp(1.5rem, 8vw, 8rem)",
                contentVisibility: "auto",
                containIntrinsicSize: "900px",
            }}
        >
            <div className="ml-0 sm:ml-8">
                <div className="py-6">
                    <h2 className="text-base sm:text-xl font-bold bg-linear-to-t from-[#7d4ef5] to-[#e87dff] bg-clip-text text-transparent">
                        Development
                    </h2>
                </div>
                <GradientText text="SERVICES" animated={false} className="text-white text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] font-bold max-w-full leading-tight" />
            </div>

            <ServiceAccordion />
        </section>
    );
}
