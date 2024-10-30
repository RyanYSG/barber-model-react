import { CircleUserRound, Mail, Phone } from "lucide-react";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <section
      id="Contato"
      className="w-full xl:w-1/2 h-[50vh] gap-3 flex p-5 flex-col items-center justify-center"
    >
      <header className="w-full flex items-center justify-center">
        <h1 className="text-3xl text-center w-full">Informações de Contato</h1>
      </header>
      <article className="2xl:w-1/2 2xl:h-auto flex flex-col xl:gap-0 2xl:justify-center  2xl:gap-5 xl:justify-between xl:h-full gap-3 items-start justify-center w-full ">
        <ContactCard icon={<CircleUserRound size={32} strokeWidth={1} />}>
          @ysg.barber2024
        </ContactCard>
        <ContactCard icon={<Mail size={32} strokeWidth={1} />}>
          ysg@barber.com
        </ContactCard>
        <ContactCard icon={<Phone size={32} strokeWidth={1} />}>
          (11) 99999-9999
        </ContactCard>
      </article>
    </section>
  );
}

export default Contact;
