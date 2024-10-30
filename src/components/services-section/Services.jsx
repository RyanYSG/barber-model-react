import ServiceCard from "./ServiceCard";
import BeardImage from "/card-beard.jpg";
import HairImage from "/card-hair.jpg";

function Services() {
  return (
    <section
      id="Serviços"
      className="flex lg:h-[50vh] flex-col h-screen w-full justify-center items-center lg:justify-around lg:flex-row"
    >
      <ServiceCard image={BeardImage} title="Barba Completa" price="R$ 30,00">
        Oferecemos serviço de barba completa! Degradê, hidratação e acabamento.
      </ServiceCard>

      <ServiceCard image={HairImage} title="Corte de Cabelo" price="R$ 25,00">
        Cortaremos seu cabelo do jeito que desejar! Mid fade, low fade, social
        ou qualquer outro
      </ServiceCard>
    </section>
  );
}

export default Services;
