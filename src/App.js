import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/navsections/navbar/navbar/navbar";
import Main from "./components/navsections/main/main";
import Features from "./components/navsections/features/features";
import TabContent from "./components/navsections/tabs/tabs";
import Download from "./components/navsections/download/download";
import Card from "./components/navsections/cards/card";
import Frequently from "./components/navsections/frequently/frequently";
import AccordionSection from "./components/navsections/accordion/accordion";
import FooterOne from "./components/navsections/footerone/footerone";
import FooterTwo from "./components/navsections/footertwo/footertwo";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";

function App() {
  const [goTop, setGoTop] = useState(false);

  const goUpArrowAppear = () => {
    if (window.scrollY >= 95) {
      setGoTop(true);
    } else {
      setGoTop(false);
    }
  };

  window.addEventListener("scroll", goUpArrowAppear);

  return (
    <div>
      <Navbar />
      <div className="content-position">
        <Main />
        <Features />
        <TabContent />
        <Download />
        <Card />
        <Frequently />
        <AccordionSection />
        <FooterOne />
        <FooterTwo />
        <div className={goTop ? "scroll-to-top" : "no-scroll-to-top"}>
          <Fade direction="down">
            <Link
              activeClass="active"
              to="bookmark-main-section"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <i class="fas fa-arrow-circle-up"></i>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default App;
