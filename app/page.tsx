"use client";

import { useContext } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import clsx from "clsx";
import { Cormorant_Garamond } from "next/font/google";
import { BackgroundContext } from "@/background/backgroundContext";
import { menuItems } from "@/constants";

const font = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const { onMouseOver } = useContext(BackgroundContext);
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={clsx([styles.menuItems, font.className])}>
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
