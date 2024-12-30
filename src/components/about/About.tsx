import styles from "./styles.module.scss";

const About = () => {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["title-container"]}>
        <h4>About me</h4>
        <div className={styles.line}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.texts}>
          <p>
            Hi, I’m Yigit, a developer with a global perspective and a passion
            for continuous learning. Originally from Istanbul, Turkey, I pursued
            my higher education in London and Edinburgh, which broadened my view
            on both technology and life. My career has taken me to several
            countries, where I gained valuable experience in international
            business and hosted clients.
          </p>
          <p>
            Outside of my professional life, I’ve welcomed over 100 guests
            through Couchsurfing, which has enriched my global perspective and
            deepened my understanding of different cultures. I’ve also been
            passionate about tennis since a young age, which inspired me to
            develop a web app connecting tennis clubs, players, and coaches.
          </p>
          <p>
            Now, as a QA Test Automation Engineer, I work with tools like C#, MS
            SQL, and Selenium, but my true passion lies in developing web
            applications that enhance user experiences.
          </p>
          <p>
            I’m always eager to collaborate with dynamic teams, whether in
            startups or large companies, and continue growing as a developer and
            an individual.
          </p>
          <p>
            These are some of the technologies I've been working with lately:
          </p>
          <div className={styles.lists}>
            <ul>
              <li>Javascript (ES6+)</li>
              <li>C#</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <li>React</li>
              <li>Typescript</li>
              <li>Selenium</li>
            </ul>
          </div>
        </div>
        <img src="/images/yigit-profile.jpeg" />
      </div>
    </div>
  );
};
export default About;
