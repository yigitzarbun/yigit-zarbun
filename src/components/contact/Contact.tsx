import styles from "./styles.module.scss";

const Contact = () => {
  return (
    <div className={styles["contact-container"]}>
      <div className={styles.content}>
        <h4>Get In Touch</h4>
        <p>
          If you’d like to collaborate, have any questions, or just want to
          chat, feel free to drop me an email. I’m always open to new
          opportunities and connections!
        </p>
        <a
          href="mailto:yzarbun@gmail.com?subject=Let's Connect&body=Hi, I'd love to get in touch!"
          target="blank"
          className="email-button"
        >
          Send Email
        </a>
      </div>
      <p className={styles["designed-text"]}>
        Designed & Built by <span>Yigit Zarbun</span>
      </p>
    </div>
  );
};
export default Contact;
