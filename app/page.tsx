"use client";

import { MutableRefObject, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./page.module.css";

type TMenuItem = {
  name: string;
  link: string;
};

type TViewportSize = "desktop" | "mobile" | null;

const menuItems: TMenuItem[] = [
  { name: "Fotografia", link: "/photo" },
  { name: "Video", link: "/video" },
  { name: "Maquillaje", link: "/makeup" },
  { name: "Info", link: "/info" },
];

export default function Home() {
  const bgRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    let lastKnownWindowSize: TViewportSize = null;
    let newSize: TViewportSize = null;
    const breakpoint = 600;
    const updateBackground = () => {
      console.log("update background");
      if (window.innerWidth > breakpoint) {
        newSize = "desktop";
      } else {
        newSize = "mobile";
      }
      if (newSize !== lastKnownWindowSize) {
        lastKnownWindowSize = newSize;
        bgRef.current.style.backgroundImage =
          "url(/bg-" +
          newSize +
          "-" +
          (Math.random() > 0.5 ? "1" : "2") +
          ".jpg)";
      }
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
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
