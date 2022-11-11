"use client";
import { useContext, useEffect, useRef } from "react";
import styles from "./page.module.css";
import { BackgroundContext } from "@/backgroundContext";
import { bandas, TProducts } from "@/constants";

const useBackgroundPictureUpdater = () => {
  const { setImage } = useContext(BackgroundContext);

  useEffect(() => {
    setImage(bandas[0].image);
    return () => setImage(null);
  }, [setImage]);

  return [setImage];
};

const useIntersectionObserver = () => {
  const [setImage] = useBackgroundPictureUpdater();
  const refs = useRef<Array<HTMLDivElement>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImage(refs.current[entry.target.id].dataset.image);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    Object.values(refs.current).forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [setImage]);

  return [refs];
};

export default function Page() {
  const [setImage] = useBackgroundPictureUpdater();
  const [productsRef] = useIntersectionObserver();
  // const productsRef = useRef<Array<HTMLDivElement>>([]);

  const handleOnClick = (image: string) => {
    setImage(image);
  };

  return (
    <div className={styles.wrapper}>
      {bandas.map((banda) => (
        <ProductItem
          key={banda.title}
          wrapperRef={(el: HTMLDivElement) =>
            (productsRef.current[banda.id] = el)
          }
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
  wrapperRef,
}: {
  product: TProducts;
  onClick: any;
  wrapperRef: any;
}) => (
  <div
    className={styles.productItem}
    id={product.id}
    onClick={() => onClick(product.image)}
    ref={wrapperRef}
    data-image={product.image}
  >
    <h2>{product.title}</h2>
    <h5>{product.subtitle}</h5>
  </div>
);
