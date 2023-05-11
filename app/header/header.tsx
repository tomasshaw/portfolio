"use client";
import styles from "./header.module.css";
import Link from "next/link";
import clsx from "clsx";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "@/hooks";

// ☀️
// 🌑

export default function Header() {
  const [darkMode, toggleDarkMode] = useDarkMode();
  return (
    <header className={styles.header}>
      <Link
        className={clsx(styles.sticky, styles.slightlyTransparent)}
        href="/"
      >
        S / L
      </Link>
      <span />
      <span className={styles.darkModeToggle} title="Toggle Dark Mode">
        <DarkModeSwitch
          checked={darkMode}
          onChange={toggleDarkMode}
          className={styles.icon}
        />
        <span className={clsx(styles.text, styles.slightlyTransparent)}>
          Sara Lamberti
        </span>
      </span>
    </header>
  );
}
