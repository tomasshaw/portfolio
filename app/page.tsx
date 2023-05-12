"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import styles from "@/page.module.css";
import clsx from "clsx";
import { BackgroundContext } from "@/background/backgroundContext";
import { menuItems } from "@/constants";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleItemClick = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.menuItems}>
          {menuItems.map((props, index: number) =>
            props?.submenu ? (
              <MenuItemWithSubmenu
                key={props.name}
                index={index}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
                {...props}
              />
            ) : (
              <MenuItem key={props.name} index={index} {...props} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

function MenuItemWithSubmenu({
  name,
  submenu,
  index,
  isOpen,
  onClick,
}: TMenuItem & {
  index: number;
  isOpen: boolean;
  onClick: () => void;
}) {
  const { onMouseOver } = useContext(BackgroundContext);
  return (
    <div
      key={name}
      className={styles.menuItem}
      onClick={onClick}
      onMouseOver={() => onMouseOver(index.toString())}
    >
      {name}
      {isOpen
        ? submenu.map((props: TMenuItem, index: number) => (
            <MenuItem key={props.name} index={index} {...props} isSubmenuItem />
          ))
        : null}
    </div>
  );
}

function MenuItem({
  name,
  link,
  index,
  disableOnHover = false,
  isSubmenuItem = false,
}: TMenuItem & {
  index: number;
  disableOnHover?: boolean;
  isSubmenuItem?: boolean;
}) {
  const { onMouseOver } = useContext(BackgroundContext);
  return (
    <Link
      key={name}
      href={link}
      className={clsx(styles.menuItem, isSubmenuItem ? styles.submenuItem : "")}
      onClick={(e) => e.stopPropagation()}
      onMouseOver={() => {
        disableOnHover || isSubmenuItem || onMouseOver(index.toString());
      }}
      prefetch={false}
    >
      {name}
    </Link>
  );
}
