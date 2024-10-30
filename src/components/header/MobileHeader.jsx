import { useState } from "react";
import MenuItem from "./MenuItem";
import LogoLight from "/Logo-Place-Holder-Light.png";

function MobileHeader() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else if (window.scrollY <= 0) {
      setScrolled(false);
    }
  });

  return (
    <header
      className="z-50 fixed bg-black flex flex-col w-full text-white justify-center items-center p-5 gap-5 transition-all"
      style={
        scrolled || show
          ? { backgroundColor: "#000000", padding: "5px" }
          : { backgroundColor: "transparent" }
      }
    >
      <img
        className="h-full max-h-[75px]"
        src={LogoLight}
        onClick={() => {
          setShow(!show);
        }}
      />
      {show && (
        <nav className="flex flex-col w-full justify-center items-center bg-black">
          <ul className="flex flex-col w-full items-center justify-center p-2 gap-1">
            <MenuItem to="Inicio">Incio</MenuItem>
            <MenuItem to="Sobre">Sobre</MenuItem>
            <MenuItem to="Local">Local</MenuItem>
            <MenuItem to="Contato">Contato</MenuItem>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default MobileHeader;
