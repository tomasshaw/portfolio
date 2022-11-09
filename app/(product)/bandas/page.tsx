"use client";
import { useContext, useEffect } from "react";
import styles from "./page.module.css";
import { BackgroundContext } from "@/backgroundContext";

export default function Page() {
  const { setShow } = useContext(BackgroundContext);

  useEffect(() => {
    setShow(false);

    return () => {
      setShow(true);
    };
  }, [setShow]);

  // return <div style={{ border: "1px solid red", height: "100%" }}>Page</div>;
  return <ProductItem />;
}

const ProductItem = ({ product = "" }: { product?: string }) => (
  <div className={styles.productItem}>
    <div>La Media Docena</div>
    <div>{"Niceto Lado B \\ Buenos Aires - 2022"}</div>
  </div>
);
