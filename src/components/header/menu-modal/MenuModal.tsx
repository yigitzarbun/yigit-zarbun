import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import { IoCloseSharp } from "react-icons/io5";

interface MenuModalProps {
  menuOpen: boolean;
  handleCloseMenu: () => void;
  handleScrollTo: (id: string) => void;
}

const MenuModal = (props: MenuModalProps) => {
  const { menuOpen, handleCloseMenu, handleScrollTo } = props;

  return (
    <Modal
      isOpen={menuOpen}
      onRequestClose={handleCloseMenu}
      overlayClassName={styles.modalOverlay}
      className={styles.modal}
    >
      <IoCloseSharp className={styles.close} onClick={handleCloseMenu} />
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
    </Modal>
  );
};

export default MenuModal;
