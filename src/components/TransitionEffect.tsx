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
          "fixed bottom-0 left-0 right-full z-10 h-screen w-screen bg-primary dark:bg-primaryDark"
        }
      />
      <motion.div
        className={
          "fixed bottom-0 left-0 z-30 h-screen w-screen bg-dark dark:bg-light"
        }
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className={
          "fixed bottom-0 left-0 z-20 h-screen w-screen bg-slate-600 dark:bg-slate-300"
        }
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeInOut" }}
      />
    </>
  );
}
