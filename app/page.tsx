"use client";

import { useContext } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { BackgroundContext } from "./backgroundContext";

type TMenuItem = {
  name: string;
  link: string;
};

const menuItems: TMenuItem[] = [
  { name: "Fotografia", link: "/photogridtest" },
  { name: "Video", link: "/video" },
  { name: "Maquillaje", link: "/makeup" },
  { name: "Info", link: "/info" },
];

export default function Home() {
  const { onMouseOver } = useContext(BackgroundContext);
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.menuItems}>
          {menuItems.map(({ name, link }, index) => (
            <Link
              key={name}
              href={link}
              className={styles.menuItem}
              onMouseOver={() => onMouseOver(index.toString())}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
