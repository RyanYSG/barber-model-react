import { Link } from "react-scroll";
import SemiCircle from "/semi-circle.png";

function Location() {
  return (
    <section
      id="Local"
      className="h-[50vh] lg:flex lg:flex-row-reverse lg:items-center lg:justify-between"
    >
      <div className="xl:p-5 h-full w-full xl:flex-row-reverse xl:w-1/2 xl:items-center xl:justify-start flex flex-col items-center">
        <header className="w-full xl:max-w-[300px] 2xl:max-w-[500px] 2xl:max-h-[500px] xl:max-h-[300px] xl:w-full xl:h-full h-1/2 border-b-2 border-black">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7271571829506!2d-46.42119282547324!3d-23.50633505957134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce638c9c206f47%3A0xef187776d9fe2685!2sRua%20Guarait%C3%A1%2C%20979%20-%20Vila%20Curu%C3%A7%C3%A1%20Velha%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008030-310!5e0!3m2!1spt-BR!2sbr!4v1730233336624!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </header>

        <footer className="w-full xl:w-full xl:h-full h-1/2 flex flex-col items-center p-2 justify-between">
          <header className="xl:w-full">
            <h1 className="xl:text-right text-center text-4xl font-normal">
              Unidade e Endereço
            </h1>
            <p className="text-2xl xl:text-right font-light text-center">
              Temos apenas uma unidade na zona-leste de são paulo.
            </p>
          </header>
          <footer className="flex flex-col w-full">
            <p className="font-light text-xl">
              Curuça Velha, Rua Guaraíta - 979
            </p>
            <Link
              to="Serviços"
              spy={true}
              smooth={true}
              duration={500}
              offset={-85}
              href="#"
              className="hover:bg-black hover:text-white transition-colors text-3xl font-light border-2 border-black text-center p-3 rounded-xl"
            >
              SERVIÇOS
            </Link>
          </footer>
        </footer>
      </div>

      {window.innerWidth > 760 && (
        <img className="h-full self-end" src={SemiCircle} />
      )}
    </section>
  );
}

export default Location;
