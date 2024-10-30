import { CircleUserRound, Mail, Phone } from "lucide-react";
import ContactCard from "./ContactCard";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const MotionContactCard = new motion.create(ContactCard);

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-40%",
  });

  return (
    <section
      ref={ref}
      id="Contato"
      className="overflow-hidden  w-full xl:w-1/2 h-[50vh] gap-3 flex p-5 flex-col items-center justify-center"
    >
      <header className="w-full flex items-center justify-center">
        <h1 className="text-3xl text-center w-full">Informações de Contato</h1>
      </header>
      <article className="2xl:w-1/2 2xl:h-auto flex flex-col xl:gap-0 2xl:justify-center  2xl:gap-5 xl:justify-between xl:h-full gap-3 items-start justify-center w-full ">
        <MotionContactCard
          animate={{ x: isInView ? "0%" : "150%" }}
          transition={{ delay: 0 }}
          icon={<CircleUserRound size={32} strokeWidth={1} />}
        >
          @ysg.barber2024
        </MotionContactCard>
        <MotionContactCard
          animate={{ x: isInView ? "0%" : "150%" }}
          transition={{ delay: 0.25 }}
          icon={<Mail size={32} strokeWidth={1} />}
        >
          ysg@barber.com
        </MotionContactCard>
        <MotionContactCard
          animate={{ x: isInView ? "0%" : "150%" }}
          transition={{ delay: 0.5 }}
          icon={<Phone size={32} strokeWidth={1} />}
        >
          (11) 99999-9999
        </MotionContactCard>
      </article>
    </section>
  );
}

export default Contact;
