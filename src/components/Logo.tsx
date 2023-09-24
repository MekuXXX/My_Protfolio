"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};
const MotionLink = motion(Link);

export default function Logo({}: Props) {
  return (
    <motion.div className="flex items-center justify-center mt-2">
      <MotionLink
        href={"href"}
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
          "text-light bg-dark flex items-center justify-center rounded-full text-2xl py-4 px-3.5"
        }
      >
        MX
      </MotionLink>
    </motion.div>
  );
}
