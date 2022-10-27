"use client";

import { MutableRefObject, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./page.module.css";

type TMenuItem = {
  name: string;
  link: string;
};

const menuItems: TMenuItem[] = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Work", link: "/work" },
  { name: "About", link: "/about" },
];

export default function Home() {
  const bgRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    bgRef.current.style.backgroundImage =
      "url(/bg-desktop-" + (Math.random() > 0.5 ? "1" : "2") + ".jpg)";
  }, []);

  const handleOnLinkMouseOver = (index: string) => {
    bgRef.current.style.setProperty("--active-index", index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.menuItems}>
          {menuItems.map(({ name, link }, index) => (
            <Link
              key={name}
              href={link}
              className={styles.menuItem}
              onMouseOver={() => handleOnLinkMouseOver(index.toString())}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.menuBackgroundImage} ref={bgRef} />
    </div>
  );
}
