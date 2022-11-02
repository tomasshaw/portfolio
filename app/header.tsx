"use client";
import styles from "./header.module.css";
import Link from "next/link";
import { useDarkMode } from "./hooks";

// ☀️
// 🌑

export default function Header() {
  const [darkMode, toggleDarkMode] = useDarkMode();
  return (
    <header className={styles.header}>
      <Link className={styles.sticky} href="/">
        S / L
      </Link>
      <span />
      <span
        onClick={toggleDarkMode}
        className={styles.pointer}
        title="Toggle Dark Mode"
      >
        {darkMode ? "☀️" : "🌑"} Sara Lamberti
      </span>
    </header>
  );
}
