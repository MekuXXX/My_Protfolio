"use client";

import useTheme from "@/hooks/useTheme";
import { HeroiconsSolidMoon, HeroiconsSolidSun } from "./Icons";

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
      {mode === "dark" ? (
        <HeroiconsSolidSun
          className={"ml-[-0.5rem] text-2xl text-yellow-500 md:ml-0"}
        />
      ) : (
        <HeroiconsSolidMoon
          className={"ml-[-0.5rem] rotate-[-90deg] text-2xl md:ml-0"}
        />
      )}
    </div>
  );
}
