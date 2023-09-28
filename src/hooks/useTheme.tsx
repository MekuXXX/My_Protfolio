import { useEffect, useState } from "react";

export type Mode = "dark" | "light";

const useTheme = () => {
  const [mode, setMode] = useState<Mode | undefined>();

  useEffect(() => {
    const localTheme = window.localStorage.getItem("my-theme");
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const checkedMode =
      localTheme === "dark"
        ? "dark"
        : localTheme === "light"
        ? "light"
        : matchMedia
        ? "dark"
        : "light";
    setMode(checkedMode);
  }, []);

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem("my-theme", mode);
      mode === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return { mode, setMode };
};

export default useTheme;
