function ContactCard(props) {
  return (
    <a
      href="#"
      className="hover:bg-black rounded-xl  hover:text-white flex gap-2 text-2xl font-light border-2 border-black w-full p-5 items-center"
    >
      <span className="align-middle ">{props.icon}</span>
      <span className="leading-6 h-full ">{props.children}</span>
    </a>
  );
}

export default ContactCard;
