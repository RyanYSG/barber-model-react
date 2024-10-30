import FeedbackCard from "./FeedbackCard";
import Profile from "/profile.png";

function Feedback() {
  return (
    <section className="2xl:justify-center 2xl:gap-3 flex h-full xl:w-1/2 flex-col items-center justify-around xl:gap-0 gap-2 p-2">
      <header>
        <h1 className="text-3xl">Feedback dos Clientes</h1>
      </header>
      <article className="flex flex-col gap-5">
        <FeedbackCard photo={Profile} title="Fulano da Silva">
          Serviço muito bom, sai na regua. Recomendo a todos!
        </FeedbackCard>
        <FeedbackCard photo={Profile} title="Ciclano Ferreira">
          Serviço muito bom, sai na regua. Recomendo a todos!
        </FeedbackCard>
        <FeedbackCard photo={Profile} title="Beltrano Sales">
          Serviço muito bom, sai na regua. Recomendo a todos!
        </FeedbackCard>
      </article>
    </section>
  );
}

export default Feedback;
