import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import MenuModal from "./menu-modal/MenuModal";

interface HeaderProps {
  handleScrollTo: (id: string) => void;
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
  menuOpen: boolean;
}

const Header = (props: HeaderProps) => {
  const { handleScrollTo, handleOpenMenu, handleCloseMenu, menuOpen } = props;

  const [isHidden, setIsHidden] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scrolling down
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles["header-container"]} ${
        isHidden ? styles["header-hidden"] : ""
      }`}
    >
      <div className={styles["logo-container"]}>
        <h1>YZ</h1>
      </div>
      <nav>
        <NavLink
          to="#about"
          onClick={() => handleScrollTo("about")}
          className={styles["nav-link"]}
        >
          About
        </NavLink>
        <NavLink
          to="#projects"
          onClick={() => handleScrollTo("projects")}
          className={styles["nav-link"]}
        >
          Projects
        </NavLink>
        <NavLink
          to="#experience"
          onClick={() => handleScrollTo("experience")}
          className={styles["nav-link"]}
        >
          Experience
        </NavLink>
        <NavLink
          to="#contact"
          onClick={() => handleScrollTo("contact")}
          className={styles["nav-link"]}
        >
          Contact
        </NavLink>
        <button className={styles.resume}>Resume</button>
      </nav>
      <RiMenu3Line className={styles["menu-icon"]} onClick={handleOpenMenu} />
      {menuOpen && (
        <MenuModal
          menuOpen={menuOpen}
          handleCloseMenu={handleCloseMenu}
          handleScrollTo={handleScrollTo}
        />
      )}
    </div>
  );
};

export default Header;
