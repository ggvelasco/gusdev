import ContactForm from "./contact/ContactForm";
import ContactHeader from "./contact/ContactHeader";
import ContactMarquee from "./contact/ContactMarquee";

export default function Contact() {
    return (
        <footer
            id="contact-section"
            className="relative min-h-screen overflow-hidden text-neutral-950"
            style={{
                background: `
      radial-gradient(circle at 18% 85%, rgba(137, 117, 250, 0.9) 0%, transparent 34%),
      linear-gradient(110deg, #9272F6 0%, #A86CF3 38%, #D45DE9 72%, #F04ED9 100%)
    `,
            }}
        >

            <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-[1540px] flex-col px-6 pt-[14vh] sm:px-10 lg:px-[9vw]">
                <ContactHeader />
                <ContactForm />
            </div>

            <ContactMarquee />
        </footer>
    );
}
