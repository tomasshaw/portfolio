"use client";

import { MutableRefObject, useEffect, useRef, useContext } from "react";
import { BackgroundContext } from "./backgroundContext";

type TViewportSize = "desktop" | "mobile" | null;

export default function Background() {
  const backgroundRef = useRef() as MutableRefObject<HTMLDivElement>;
  const { show, setBgRef, image } = useContext(BackgroundContext);

  useEffect(() => {
    if (backgroundRef.current) {
      setBgRef(backgroundRef);
    }
  }, [setBgRef]);

  useEffect(() => {
    let lastKnownWindowSize: TViewportSize = null;
    let newSize: TViewportSize = null;
    const breakpoint = 600;
    const updateBackground = () => {
      if (backgroundRef.current) {
        if (image) {
          backgroundRef.current.style.backgroundImage = `url(/portfolio/${image})`;
          return;
        }

        if (!show) {
          backgroundRef.current.style.backgroundImage = "";
          return;
        }

        newSize = window.innerWidth > breakpoint ? "desktop" : "mobile";
        if (newSize !== lastKnownWindowSize) {
          lastKnownWindowSize = newSize;
          backgroundRef.current.style.backgroundImage =
            "url(/portfolio/bg-" +
            newSize +
            "-" +
            (Math.random() > 0.5 ? "1" : "2") +
            ".jpg)";
        }
      }
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, [show, backgroundRef, image]);

  return <div className="backgroundImage" ref={backgroundRef} />;
}
