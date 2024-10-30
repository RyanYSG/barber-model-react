import { useEffect, useRef } from "react";
import ServiceCard from "./ServiceCard";
import BeardImage from "/card-beard.jpg";
import HairImage from "/card-hair.jpg";
import { motion, useInView } from "framer-motion";

const MotionServiceCard = motion.create(ServiceCard);

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50%",
  });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <section
      ref={ref}
      id="Serviços"
      className="overflow-hidden flex lg:h-[50vh] flex-col h-screen w-full justify-center items-center lg:justify-around lg:flex-row"
    >
      <MotionServiceCard
        animate={{
          x: isInView ? "0%" : "-100%",
        }}
        transition={{
          delay: 0,
        }}
        image={BeardImage}
        title="Barba Completa"
        price="R$ 30,00"
      >
        Oferecemos serviço de barba completa! Degradê, hidratação e acabamento.
      </MotionServiceCard>

      <MotionServiceCard
        animate={{
          x: isInView ? "0%" : "100%",
        }}
        transition={{
          delay: 0.25,
        }}
        image={HairImage}
        title="Corte de Cabelo"
        price="R$ 25,00"
      >
        Cortaremos seu cabelo do jeito que desejar! Mid fade, low fade, social
        ou qualquer outro
      </MotionServiceCard>
    </section>
  );
}

export default Services;
