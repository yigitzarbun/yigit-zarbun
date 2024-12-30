import { useState } from "react";
import styles from "./styles.module.scss";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Projects from "../../components/projects/Projects";
import Experience from "../../components/experience/Experience";
import Contact from "../../components/contact/Contact";
import About from "../../components/about/About";

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      handleCloseMenu();
    }
  };
  return (
    <div className={styles.main}>
      <Header
        handleScrollTo={handleScrollTo}
        handleOpenMenu={handleOpenMenu}
        handleCloseMenu={handleCloseMenu}
        menuOpen={menuOpen}
      />
      <div id="hero">
        <Hero handleScrollTo={handleScrollTo} />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Main;
