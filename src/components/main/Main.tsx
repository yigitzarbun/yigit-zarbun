import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Projects from "../../components/projects/Projects";
import Experience from "../../components/experience/Experience";
import Contact from "../../components/contact/Contact";
import About from "../../components/about/About";

const Main = () => {
  const [isHidden, setIsHidden] = useState(false);

  let lastScrollTop = 0;

  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight =
        document.querySelector(`.${styles["header-container"]}`)
          ?.clientHeight || 0;

      window.scrollTo({
        top: element.offsetTop - headerHeight, // Add the header height as an offset
        behavior: "smooth",
      });
      handleCloseMenu(); // Close the menu after navigation (for mobile)
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
