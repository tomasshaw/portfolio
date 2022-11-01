import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.text}
        href="https://github.com/tomasshaw"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made with <span className={styles.heart}>❤️</span> by Tom
      </a>
    </footer>
  );
}
