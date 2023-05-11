import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        className={styles.text}
        href="https://github.com/tomasshaw"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made with <span className={styles.heart}>❤️</span> by Tom
      </Link>
    </footer>
  );
}
