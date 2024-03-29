import About from "../components/sections/About";
import Achievements from "../components/sections/Achievements";
import Banner from "../components/sections/Banner";
import Experience from "../components/sections/Experience";
import Footer from "../components/sections/Footer";
import GetInTouch from "../components/sections/GetInTouch";
import Portfolio from "../components/sections/Portfolio";
import Skills from "../components/sections/Skills";

function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Achievements />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default Home;
