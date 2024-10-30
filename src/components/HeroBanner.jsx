import { Link } from "react-scroll";
import HeroImage from "/hero-banner.png";
function HeroBanner() {
  return (
    <section
      id="Inicio"
      className="w-screen h-screen xl:h-[50vh] bg-cover flex flex-col items-center justify-center 2xl:justify-center xl:justify-end xl:items-end"
      style={{
        backgroundImage: `url("${HeroImage}")`,
        backgroundPosition: "70%",
      }}
    >
      <article className="text-white text-center xl:py-5 xl:px-10 xl:text-left flex flex-col gap-10 w-full">
        <header className="flex flex-col gap-2">
          <h3 className="text-3xl font-light">ZONA LESTE - SP</h3>
          <h1 className="text-5xl font-bold">YSG Barbearia</h1>
          <h2 className="text-3xl font-normal">DESDE 2015</h2>
        </header>
        <footer className="w-full 2xl:w-1/4 xl:w-1/3 flex items-center justify-center xl:justify-start">
          <Link
            to="Sobre"
            spy={true}
            smooth={true}
            duration={500}
            offset={-85}
            className="w-full hover:bg-white hover:text-black transition-colors border-white border-2 xl:text-center text-4xl py-5 xl:py-2 font-light rounded-xl"
            href="#"
          >
            SAIBA MAIS
          </Link>
        </footer>
      </article>
    </section>
  );
}

export default HeroBanner;
