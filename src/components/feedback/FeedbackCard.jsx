function FeedbackCard(props) {
  return (
    <article className="flex gap-2 items-center justify-center w-full 2xl:max-h-[100px] max-h-[75px] shadow-md rounded-md shadow-gray-200">
      <header className="max-h-full max-w-full">
        <img
          className="max-h-[75px] 2xl:max-h-[100px] max-w-auto rounded-full"
          src={props.photo}
        />
      </header>
      <section>
        <h1 className="2xl:text-2xl xl:text-lg">{props.title}</h1>
        <p className="text-xs xl:text-base font-light">{props.children}</p>
        <p>⭐⭐⭐⭐⭐</p>
      </section>
    </article>
  );
}

export default FeedbackCard;
