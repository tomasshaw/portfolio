"use client";

import { useContext, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./page.module.css";
import pic1 from "../../../public/images/1.png";
import pic2 from "../../../public/images/2.png";
import pic3 from "../../../public/images/3.png";
import pic4 from "../../../public/images/4.png";
import pic5 from "../../../public/images/5.png";
import pic6 from "../../../public/images/6.png";
import pic7 from "../../../public/images/7.png";
import pic8 from "../../../public/images/8.png";
import pic9 from "../../../public/images/9.png";
import pic10 from "../../../public/images/10.png";
import pic11 from "../../../public/images/11.png";
import pic12 from "../../../public/images/12.png";
import pic13 from "../../../public/images/13.png";
import pic14 from "../../../public/images/14.png";
import pic15 from "../../../public/images/15.png";
import pic16 from "../../../public/images/16.png";
import pic17 from "../../../public/images/17.png";
import pic18 from "../../../public/images/18.png";
import pic19 from "../../../public/images/19.png";
import pic20 from "../../../public/images/20.png";
import { BackgroundContext } from "@/background";

const GridImage = ({ src }: { src: string | StaticImageData }) => (
  <Image
    src={src}
    alt={""}
    className={styles.gridImage}
    style={{ animationDelay: `${Math.random()}s` }}
  />
);

export default function Page() {
  const { setShow } = useContext(BackgroundContext);

  useEffect(() => {
    setShow(false);

    return () => {
      setShow(true);
    };
  }, [setShow]);

  return (
    <div className={styles.masonryWrapper}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}>
        <Masonry gutter="1rem">
          <GridImage src={pic1} />
          <GridImage src={pic2} />
          <GridImage src={pic3} />
          <GridImage src={pic4} />
          <GridImage src={pic5} />
          <GridImage src={pic6} />
          <GridImage src={pic7} />
          <GridImage src={pic8} />
          <GridImage src={pic9} />
          <GridImage src={pic10} />
          <GridImage src={pic11} />
          <GridImage src={pic12} />
          <GridImage src={pic13} />
          <GridImage src={pic14} />
          <GridImage src={pic15} />
          <GridImage src={pic16} />
          <GridImage src={pic17} />
          <GridImage src={pic18} />
          <GridImage src={pic19} />
          <GridImage src={pic20} />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
