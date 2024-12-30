import { useState } from "react";
import styles from "./styles.module.scss";
import { IoLocationSharp } from "react-icons/io5";

const Experience = () => {
  const [grid1Open, setGrid1Open] = useState(false);
  const [grid2Open, setGrid2Open] = useState(false);
  const [grid3Open, setGrid3Open] = useState(false);
  const [grid4Open, setGrid4Open] = useState(false);
  const [grid5Open, setGrid5Open] = useState(false);
  const [grid6Open, setGrid6Open] = useState(false);

  const openGrid = (gridNumber: number) => {
    if (gridNumber === 1) {
      setGrid1Open((prev) => (!prev ? true : false));
      setGrid2Open(false);
      setGrid3Open(false);
      setGrid4Open(false);
      setGrid5Open(false);
      setGrid6Open(false);
    } else if (gridNumber === 2) {
      setGrid2Open((prev) => (!prev ? true : false));
      setGrid1Open(false);
      setGrid3Open(false);
      setGrid4Open(false);
      setGrid5Open(false);
      setGrid6Open(false);
    } else if (gridNumber === 3) {
      setGrid3Open((prev) => (!prev ? true : false));
      setGrid1Open(false);
      setGrid2Open(false);
      setGrid4Open(false);
      setGrid5Open(false);
      setGrid6Open(false);
    } else if (gridNumber === 4) {
      setGrid4Open((prev) => (!prev ? true : false));
      setGrid1Open(false);
      setGrid2Open(false);
      setGrid3Open(false);
      setGrid5Open(false);
      setGrid6Open(false);
    } else if (gridNumber === 5) {
      setGrid2Open(false);
      setGrid3Open(false);
      setGrid4Open(false);
      setGrid1Open(false);
      setGrid6Open(false);
      setGrid5Open((prev) => (!prev ? true : false));
    } else if (gridNumber === 6) {
      setGrid6Open((prev) => (!prev ? true : false));
      setGrid1Open(false);
      setGrid2Open(false);
      setGrid3Open(false);
      setGrid4Open(false);
      setGrid5Open(false);
    }
  };

  const handleToggle = (e: React.MouseEvent, gridNumber: number) => {
    e.stopPropagation();
    openGrid(gridNumber);
  };

  return (
    <div className={styles["experience-container"]}>
      <div className={styles["title-container"]}>
        <h4>My Career Path</h4>
        <div className={styles.line}></div>
      </div>
      <div className={styles["experiences-list"]}>
        <div className={styles.experience} onClick={() => openGrid(1)}>
          <p>2023 - present</p>
          <div className={styles.texts}>
            <p>QA & Test Automation Engineer @ Intertech</p>
            <p
              className={
                grid1Open ? styles["grid1-hidden"] : styles["grid1-active"]
              }
              onClick={(e) => handleToggle(e, 1)}
            >
              +
            </p>
            <p
              className={
                grid1Open ? styles["grid1-active"] : styles["grid1-hidden"]
              }
              onClick={(e) => handleToggle(e, 1)}
            >
              -
            </p>
          </div>
        </div>
        <div
          className={
            grid1Open ? styles["experience-open"] : styles["experience-hidden"]
          }
        >
          <div className={styles["experience-top"]}>
            <IoLocationSharp />
            <p>Istanbul, Turkey (Remote)</p>
          </div>
          <p>
            Developed API, ESB, and UI test automation using C#, Selenium,
            TypeScript, and React in an Agile environment. Built test data
            generation services and integrated tests into CI/CD pipelines.
          </p>
          <div className={styles.skills}>
            <p className={styles.skill}>C#</p>
            <p className={styles.skill}>Selenium</p>
            <p className={styles.skill}>Ms SQL</p>
            <p className={styles.skill}>React</p>
            <p className={styles.skill}>Jira</p>
            <p className={styles.skill}>Jenkins</p>
          </div>
        </div>
        <div className={styles.experience} onClick={() => openGrid(2)}>
          <p>May - Oct 2023</p>
          <div className={styles.texts}>
            <p>Frontend Developer @ Ogrenci Baksana</p>
            <p
              className={
                grid2Open ? styles["grid2-hidden"] : styles["grid2-active"]
              }
              onClick={(e) => handleToggle(e, 2)}
            >
              +
            </p>
            <p
              className={
                grid2Open ? styles["grid2-active"] : styles["grid2-hidden"]
              }
              onClick={(e) => handleToggle(e, 2)}
            >
              -
            </p>
          </div>
        </div>
        <div
          className={
            grid2Open ? styles["experience-open"] : styles["experience-hidden"]
          }
        >
          <div className={styles["experience-top"]}>
            <IoLocationSharp />
            <p>Istanbul, Turkey (Remote)</p>
          </div>
          <p>
            I worked with a small frontend team to develop key components for a
            website targeting students. Using React, TypeScript, and SCSS, I
            helped create a dynamic and responsive user interface.
          </p>
          <div className={styles.skills}>
            <p className={styles.skill}>Typescript</p>
            <p className={styles.skill}>React</p>
            <p className={styles.skill}>Redux</p>
            <p className={styles.skill}>SCSS</p>
            <p className={styles.skill}>Figma</p>
            <p className={styles.skill}>Jira</p>
          </div>
        </div>
        <div className={styles.experience} onClick={() => openGrid(3)}>
          <p>May - Dec 2022</p>
          <div className={styles.texts}>
            <p>Business Development Executive @Yollando.com</p>
            <p
              className={
                grid3Open ? styles["grid3-hidden"] : styles["grid3-active"]
              }
              onClick={(e) => handleToggle(e, 3)}
            >
              +
            </p>
            <p
              className={
                grid3Open ? styles["grid3-active"] : styles["grid3-hidden"]
              }
              onClick={(e) => handleToggle(e, 3)}
            >
              -
            </p>
          </div>
        </div>
        <div
          className={
            grid3Open ? styles["experience-open"] : styles["experience-hidden"]
          }
        >
          <div className={styles["experience-top"]}>
            <IoLocationSharp />
            <p>Istanbul, Turkey (On-site)</p>
          </div>
          <p>
            At Yollando, an e-commerce tech startup, I implemented reporting
            routines, improved internal communication, and developed
            customer-facing services. I managed a team of interns and
            collaborated with Operations and Development, which inspired my
            transition to full-stack web development.
          </p>
          <div className={styles.skills}>
            <p className={styles.skill}>MS Office</p>
          </div>
        </div>
        <div className={styles.experience} onClick={() => openGrid(4)}>
          <p>2021 - 2022</p>
          <div className={styles.texts}>
            <p>
              Business Development & Strategy Specialist @ Demiroren Technology
            </p>
            <p
              className={
                grid4Open ? styles["grid4-hidden"] : styles["grid4-active"]
              }
              onClick={(e) => handleToggle(e, 4)}
            >
              +
            </p>
            <p
              className={
                grid4Open ? styles["grid4-active"] : styles["grid4-hidden"]
              }
              onClick={(e) => handleToggle(e, 4)}
            >
              -
            </p>
          </div>
        </div>
        <div
          className={
            grid4Open ? styles["experience-open"] : styles["experience-hidden"]
          }
        >
          <div className={styles["experience-top"]}>
            <IoLocationSharp />
            <p>Istanbul, Turkey (Remote)</p>
          </div>
          <p>
            After three years in exports, I pivoted to digital products at
            Demirören Technology, a subsidiary of a major Turkish conglomerate.
            I conducted research, tracked KPIs, and provided strategic
            recommendations to the parent company and its subsidiaries.
          </p>
          <div className={styles.skills}>
            <p className={styles.skill}>MS Office</p>
          </div>
        </div>
        <div className={styles.experience} onClick={() => openGrid(5)}>
          <p>2020 - 2021</p>
          <div className={styles.texts}>
            <p>Export Sales Specialist @ Lila Group</p>
            <p
              className={
                grid5Open ? styles["grid5-hidden"] : styles["grid5-active"]
              }
              onClick={(e) => handleToggle(e, 5)}
            >
              +
            </p>
            <p
              className={
                grid5Open ? styles["grid5-active"] : styles["grid5-hidden"]
              }
              onClick={(e) => handleToggle(e, 5)}
            >
              -
            </p>
          </div>
        </div>
        <div
          className={
            grid5Open ? styles["experience-open"] : styles["experience-hidden"]
          }
        >
          <div className={styles["experience-top"]}>
            <IoLocationSharp />
            <p>Istanbul, Turkey (On-site)</p>
          </div>
          <p>
            At Lila Group, a leading Turkish tissue producer, I managed export
            sales across global markets. Initially handling spot inquiries, I
            later took responsibility for the Israel and Palestine markets. My
            role included launching new products, pricing, and coordinating
            internal reports for production and marketing strategies.
          </p>
          <div className={styles.skills}>
            <p className={styles.skill}>MS Office</p>
            <p className={styles.skill}>SAP</p>
          </div>
        </div>
        <div className={styles.experience} onClick={() => openGrid(6)}>
          <p>2018 - 2020</p>
          <div className={styles.texts}>
            <p>Export Sales Specialist @ Vivatinell</p>
            <p
              className={
                grid6Open ? styles["grid6-hidden"] : styles["grid6-active"]
              }
              onClick={(e) => handleToggle(e, 6)}
            >
              +
            </p>
            <p
              className={
                grid6Open ? styles["grid6-active"] : styles["grid6-hidden"]
              }
              onClick={(e) => handleToggle(e, 6)}
            >
              -
            </p>
          </div>
        </div>
        <div
          className={
            grid6Open ? styles["experience-open"] : styles["experience-hidden"]
          }
        >
          <div className={styles["experience-top"]}>
            <IoLocationSharp />
            <p>Istanbul, Turkey (On-Site)</p>
          </div>
          <p>
            In my first full-time role, I supported daily operations, attended
            client meetings in Ukraine, Italy, and Georgia, and represented the
            company at exhibitions in Germany and Turkey. I contributed to the
            expansion strategy in the UK and led the project for developing the
            corporate and brand websites.
          </p>
          <div className={styles.skills}>
            <p className={styles.skill}>MS Office</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
