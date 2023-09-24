"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  path: string;
  icon: ReactNode;
};

export default function MediaLink({ icon, path }: Props) {
  return (
    <motion.a
      href={path}
      target={"_blank"}
      whileHover={{ y: -4, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
}
