import AboutImage from "/about-image.png";

function About() {
  return (
    <section
      id="Sobre"
      className="flex flex-col xl:flex-row w-full h-[50vh] bg-black text-white"
    >
      <header
        className="bg-cover w-full h-1/2 xl:h-full xl:w-1/2"
        style={{
          backgroundImage: `url("${AboutImage}")`,
          backgroundPosition: "50%",
        }}
      ></header>
      <footer className="w-full h-1/2 lg:h-full lg:w-1/2 flex flex-col items-start p-10 justify-center">
        <h2 className="text-2xl xl:text-3xl font-bold">HISTÓRIA</h2>
        <h1 className="text-4xl xl:text-6xl">YSG Barbearia</h1>
        <p className=" xl:text-2xl font-light">
          Fundada em 2015 por Fulano, foi feita com a intenção de trazer a tona
          o padrão de beleza masculino. Venha nos conhecer e aproveite o
          ambiente descontraído da barbearia.
        </p>
      </footer>
    </section>
  );
}

export default About;
