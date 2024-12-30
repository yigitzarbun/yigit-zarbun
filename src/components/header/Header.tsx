import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import MenuModal from "./menu-modal/MenuModal";
import { useEffect } from "react";

interface HeaderProps {
  handleScrollTo: (id: string) => void;
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
  menuOpen: boolean;
}

const Header = (props: HeaderProps) => {
  const { handleScrollTo, handleOpenMenu, handleCloseMenu, menuOpen } = props;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        if (menuOpen) {
          handleCloseMenu();
        }
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen, handleCloseMenu]);

  return (
    <div className={styles["header-container"]}>
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
