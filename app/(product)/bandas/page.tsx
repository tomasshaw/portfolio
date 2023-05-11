"use client";
import { useContext, useEffect, useRef } from "react";
import styles from "./page.module.css";
import { BackgroundContext } from "@/background";
import { bandas, TProducts } from "@/constants";

const useBackgroundPictureUpdater = () => {
  const { setImage } = useContext(BackgroundContext);

  useEffect(() => {
    console.log("BGPU setimage");
    setImage(bandas[0].image);
    return () => setImage(null);
  }, [setImage]);

  return [setImage];
};

const useIntersectionObserver = () => {
  const [setImage] = useBackgroundPictureUpdater();
  const refs = useRef<Array<HTMLDivElement>>([]);
  const currentRef = useRef<any>(null);
  const timeoutRef = useRef<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      timeoutRef.current = true;
    }, 1000);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && timeoutRef.current) {
            // if (entry.target.dataset.hasloaded === "false") {
            //   entry.target.dataset.hasloaded = "true";
            //   currentRef.current = refs.current[bandas[0].id];
            // } else {
            console.log("observer setimage", entry.target.dataset.image);
            currentRef.current = entry.target;
            setImage(entry.target.dataset.image);
            // }
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
  }, [setImage, currentRef]);

  return [refs, currentRef];
};

export default function Page() {
  const [productsRef, currentProduct] = useIntersectionObserver();
  const { setBlur } = useContext(BackgroundContext);
  const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useBackgroundPictureUpdater();

  useEffect(() => {
    const ref = wrapperRef.current;
    const handleScroll = () => {
      if (currentProduct.current) {
        const currDiv = currentProduct.current.getBoundingClientRect();
        const normalizedTopDiff = Math.abs(currDiv.top - 62);
        console.log(normalizedTopDiff / 100);
        setBlur(Math.trunc(normalizedTopDiff / 30));
      }
    };

    ref.addEventListener("scroll", handleScroll);
    return () => ref.removeEventListener("scroll", handleScroll);
  }, [productsRef, currentProduct, setBlur]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {bandas.map((banda) => (
        <ProductItem
          key={banda.title}
          wrapperRef={(el: HTMLDivElement) =>
            (productsRef.current[banda.id] = el)
          }
          product={banda}
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
  wrapperRef,
}: {
  product: TProducts;
  wrapperRef: any;
}) => (
  <div
    className={styles.productItem}
    id={product.id}
    ref={wrapperRef}
    data-image={product.image}
    data-hasloaded={"false"}
  >
    <h2>{product.title}</h2>
    <h5>{product.subtitle}</h5>
  </div>
);
