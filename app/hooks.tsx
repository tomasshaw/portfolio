"use client";
import { useEffect, useState } from "react";

export const useDarkMode = (): [boolean, () => void] => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    // TODO: re-implement localstorage
    // typeof window !== undefined
    //   ? window.localStorage.getItem("darkMode") === "true"
    //   : false;

    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    // Save dark mode on localstorage
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  return [darkMode, toggleDarkMode];
};
