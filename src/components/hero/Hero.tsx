import styles from "./styles.module.scss";

interface HeroProps {
  handleScrollTo: (id: string) => void;
}
const Hero = (props: HeroProps) => {
  const { handleScrollTo } = props;
  return (
    <div className={styles["hero-container"]}>
      <p>Hi, my name is</p>
      <h1>Yigit Zarbun.</h1>
      <h2>I layer digital solutions on reality.</h2>
      <h3>
        I’m a full-stack developer with diverse skills and experiences.
        Currently, I specialize in ensuring the quality and performance of
        financial products at a leading bank, while constantly exploring
        innovative ways to make everyday tasks easier through technology.
      </h3>
      <button onClick={() => handleScrollTo("contact")}>
        Let's work together!
      </button>
    </div>
  );
};
export default Hero;
