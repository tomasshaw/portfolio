"use client";
import { useContext, useEffect } from "react";
import styles from "./page.module.css";
import { BackgroundContext } from "@/backgroundContext";
import { bandas, TProducts } from "@/constants";

export default function Page() {
  const { setShow } = useContext(BackgroundContext);

  useEffect(() => {
    setShow(false);

    return () => {
      setShow(true);
    };
  }, [setShow]);

  return (
    <div className={styles.wrapper}>
      {bandas.map((banda) => (
        <ProductItem key={banda.title} product={banda} />
      ))}
    </div>
  );
}

/**
 * Each section updates the background image
 *
 * on Scroll:
 *    - fade out the background
 *    - fade out the text
 *    - scroll snap
 *    - update background on scroll over the next section
 *
 */

const ProductItem = ({ product }: { product: TProducts }) => (
  <div className={styles.productItem}>
    <h2>{product.title}</h2>
    <h5>{product.subtitle}</h5>
  </div>
);
