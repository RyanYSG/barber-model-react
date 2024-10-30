import LightLogo from "/Logo-Place-Holder-Light.png";

function Footer() {
  return (
    <footer className="bg-black flex p-5 text-white flex-col items-center justify-center gap-3">
      <img className="max-h-[150px]" src={LightLogo} />
      <h1 className="font-bold text-3xl">YSG Barbearia</h1>
      <h2 className="font-light text-xl opacity-20">Feito por Ryan Yuri</h2>
    </footer>
  );
}

export default Footer;
