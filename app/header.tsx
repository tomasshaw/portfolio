import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.sticky}>S / L</span>
      <span />
      <span>Sara Lamberti</span>
    </header>
  );
}
