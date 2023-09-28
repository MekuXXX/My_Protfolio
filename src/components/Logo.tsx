"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};
const MotionLink = motion(Link);

export default function Logo({}: Props) {
  return (
    <div className="mt-2 flex select-none items-center justify-center">
      <MotionLink
        href={"/"}
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1.25, repeat: Infinity },
        }}
        className={
          "flex items-center justify-center rounded-full border border-transparent bg-dark px-3.5 py-4 text-2xl text-light dark:border-light"
        }
      >
        MX
      </MotionLink>
    </div>
  );
}
