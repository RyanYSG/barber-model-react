import { Link } from "react-scroll";

function MenuItem(props) {
  return (
    <li className="flex items-center justify-center w-full lg:w-auto ">
      <Link
        to={props.to}
        spy={true}
        smooth={true}
        duration={500}
        offset={-85}
        className="p-2 w-full border-b-2 border-white border-opacity-20 text-center hover:border-opacity-100"
        href="#"
      >
        {props.children}
      </Link>
    </li>
  );
}

export default MenuItem;
