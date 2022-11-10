"use client";
import { useContext, useEffect } from "react";
import styles from "./page.module.css";
import { BackgroundContext } from "@/backgroundContext";
import { bandas, TProducts } from "@/constants";

export default function Page() {
  const { setImage } = useContext(BackgroundContext);

  useEffect(() => {
    setImage(bandas[0].image);
    return () => setImage(null);
  }, [setImage]);

  const handleOnClick = (image: string) => {
    setImage(image);
  };

  return (
    <div className={styles.wrapper}>
      {bandas.map((banda) => (
        <ProductItem
          key={banda.title}
          product={banda}
          onClick={handleOnClick}
        />
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

const ProductItem = ({
  product,
  onClick,
}: {
  product: TProducts;
  onClick: any;
}) => (
  <div
    className={styles.productItem}
    id={product.id}
    onClick={() => onClick(product.image)}
  >
    <h2>{product.title}</h2>
    <h5>{product.subtitle}</h5>
  </div>
);
