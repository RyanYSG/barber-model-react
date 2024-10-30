import { forwardRef, Ref } from "react";

const ServiceCard = forwardRef(function (props, ref) {
  return (
    <article
      ref={ref}
      className="flex flex-col h-1/2 xl:flex-row items-center xl:items-center xl:gap-5 justify-center text-center p-5 "
    >
      <header>
        <div className="relative overflow-hidden">
          <img
            className="max-w-[250px] max-h-[250px] 2xl:max-w-[350px] 2xl:max-h-[350px] xl:max-h-full xl:hover:scale-125 transition-all xl:cursor-pointer"
            src={props.image}
          />
          {window.innerWidth < 760 && (
            <p className="absolute bottom-0 right-0 bg-black text-white p-2 text-2xl italic font-light">
              {props.price}
            </p>
          )}
        </div>
      </header>
      <footer className="flex flex-col 2xl:h-[350px] 2xl:w-1/2 h-[250px] justify-center xl:justify-between">
        <section>
          <h1 className="text-4xl xl:text-left font-normal">{props.title}</h1>
          <p className="font-light xl:text-left text-xl">{props.children}</p>
        </section>

        {window.innerWidth > 760 && (
          <section>
            <p className="text-left text-3xl font-light italic">
              {props.price}
            </p>
          </section>
        )}
      </footer>
    </article>
  );
});

export default ServiceCard;
