"use client";
import styles from "./header.module.css";
import Link from "next/link";
import { DarkModeSwitch } from "react-toggle-dark-mode";
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
      <span className={styles.darkModeToggle} title="Toggle Dark Mode">
        <DarkModeSwitch
          checked={darkMode}
          onChange={toggleDarkMode}
          className={styles.icon}
        />
        <span className={styles.text}>Sara Lamberti</span>
      </span>
    </header>
  );
}
