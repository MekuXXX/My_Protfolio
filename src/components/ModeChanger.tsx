"use client";

import useTheme from "@/utils/useTheme";

type Props = {};

export default function ModeChanger({}: Props) {
  const { mode, setMode } = useTheme();

  return (
    <div
      className={"cursor-pointer"}
      onClick={() => {
        setMode(() => (mode === "dark" ? "light" : "dark"));
      }}
    >
      {mode === "dark" ? "Light" : "Dark"}
    </div>
  );
}
