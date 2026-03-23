import About from "./about";
import Featured from "./feature";
import Hero from "./hero";
import Navbar from "./navbar";
import Why from "./Casavera";
import HowItWorks from "./Works";
import Explore from "./explore";
import Footer from "./Footer";

function app() {
  return <>
    <Navbar />
    <Hero />
    <About />
    <Featured />
    <Why></Why>
    <HowItWorks />
    <Explore />
    <Footer />
  </>
}

export default app;