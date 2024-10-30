import About from "./components/about/About";
import Location from "./components/about/Location";
import Contact from "./components/Contact/Contact";
import Feedback from "./components/feedback/Feedback";
import Footer from "./components/Footer";
import DesktopHeader from "./components/header/DesktopHeader";
import MobileHeader from "./components/header/MobileHeader";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/services-section/Services";

function App() {
  return (
    <>
      {window.innerWidth <= 760 ? <MobileHeader /> : <DesktopHeader />}
      <HeroBanner />
      <Services />
      <About />
      <Location />
      <div className="flex xl:h-[50vh] flex-col h-full w-full xl:flex-row">
        <Contact />
        <Feedback />
      </div>
      <Footer />
    </>
  );
}

export default App;
