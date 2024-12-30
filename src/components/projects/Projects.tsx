import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className={styles["projects-container"]}>
      <div className={styles["title-container"]}>
        <h4>What I've Crafted</h4>
        <div className={styles.line}></div>
      </div>
      <div className={styles["raketgo"]}>
        <a
          href="https://github.com/yigitzarbun/roger"
          target="blank"
          className={styles["image-container"]}
        >
          <img src="/images/raketgo.png" alt="RaketGo" />
        </a>
        <a
          href="https://github.com/yigitzarbun/roger"
          target="blank"
          className={styles["raketgo-texts-container"]}
        >
          <p className={styles.featured}>Featured Project</p>
          <h5>RaketGo</h5>
          <div className={styles["raketgo-texts"]}>
            <p>
              RaketGo is a full-stack web app adding a digital layer to the
              tennis experience, connecting players, clubs, and trainers. Clubs
              can list courts and memberships, while players and trainers can
              easily book courts. RaketGo streamlines the process, letting users
              find partners, reserve courts, and split bills—all in just a few
              clicks.
            </p>
            <div className={styles.skills}>
              <p className={styles.skill}>React</p>
              <p className={styles.skill}>Typescript</p>
              <p className={styles.skill}>Node.Js</p>
              <p className={styles.skill}>Redux</p>
            </div>
          </div>
          <FaGithub className={styles.icon} />
        </a>
      </div>
      <h6>Other Projects</h6>
      <div className={styles["other-projects"]}>
        <a
          href="https://github.com/yigitzarbun/bud-e"
          target="_blank"
          className={styles.project}
        >
          <h5>AI Voice Assistant</h5>
          <p>
            A simple app that i built that helps users interact with ChatGpt; it
            converts text-to-voice and vice versa.
          </p>
          <div className={styles["links-container"]}>
            <a href="https://github.com/yigitzarbun/bud-e" target="_blank">
              <FaGithub className={styles.icon} />
            </a>
          </div>
        </a>
        <a
          href="https://github.com/yigitzarbun/peak"
          target="_blank"
          className={styles.project}
        >
          <h5>Multi-Language News App</h5>
          <p>
            A news app that serves news from over 50 countries in local
            languages under various genres.
          </p>
          <div className={styles["links-container"]}>
            <a href="https://github.com/yigitzarbun/peak" target="_blank">
              <FaGithub className={styles.icon} />
            </a>
          </div>
        </a>
        <a
          href="https://fsweb-s11g1-shopping-cart.vercel.app/"
          target="_blank"
          className={styles.project}
        >
          <h5>Shopping Cart</h5>
          <p>
            A single page shopping cart project built with React Context and
            Javascript.
          </p>
          <div className={styles["links-container"]}>
            <a
              href="https://fsweb-s11g1-shopping-cart.vercel.app/"
              target="_blank"
            >
              <FaExternalLinkAlt className={styles.link} />
            </a>
            <a
              href="https://github.com/yigitzarbun/fsweb-s11g1-shopping-cart"
              target="_blank"
            >
              <FaGithub className={styles.icon} />
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
