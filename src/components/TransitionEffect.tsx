"use client";
import { motion } from "framer-motion";
type Props = {};

export default function TransitionEffect({}: Props) {
  return (
    <>
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 1 }}
        className={
          "fixed w-screen h-screen left-0 bottom-0 right-full z-10 bg-primary dark:bg-primaryDark"
        }
      />
      <motion.div
        className={
          "fixed w-screen h-screen left-0 bottom-0 z-30 bg-dark dark:bg-light"
        }
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className={
          "fixed w-screen h-screen left-0 bottom-0 z-20 bg-slate-600 dark:bg-slate-300"
        }
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeInOut" }}
      />
    </>
  );
}
