import { useEffect, useState } from "react";

export type Mode = "dark" | "light";

const useTheme = () => {
  if (typeof window !== "undefined") {
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
    const [mode, setMode] = useState<Mode>(checkedMode);

    useEffect(() => {
      window.localStorage.setItem("my-theme", mode);
      mode === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    }, [mode]);

    return { mode, setMode };
  } else {
    return { mode: "dark", setMode: () => {} };
  }
};

export default useTheme;
