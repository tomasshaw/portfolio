"use client";
import { useEffect, useState } from "react";

export const useDarkMode = (): [boolean, () => void] => {
  const [darkMode, setDarkMode] = useState<boolean>(
    typeof window !== undefined
      ? localStorage.getItem("darkMode") === "true"
      : false
  );

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    // Set global dark mode state
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    // Save dark mode on localstorage
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  return [darkMode, toggleDarkMode];
};
