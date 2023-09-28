"use client";
import { motion } from "framer-motion";
type Props = {
  progress: number;
};
export default function ProgressBar({ progress }: Props) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 1, ease: "linear" }}
      className={`relative h-4 rounded-l-lg bg-primary dark:bg-primaryDark ${
        progress === 100 ? "!rounded-lg" : undefined
      }`}
    >
      <span
        className={`absolute bottom-8 left-[95%] rounded-2xl !bg-primary bg-transparent px-3 py-1 font-bold text-light before:absolute before:bottom-[-0.85rem] before:left-1/2 before:translate-x-[-70%] before:border-8 before:border-b-transparent  before:border-l-transparent before:border-r-transparent before:border-t-primary before:content-[''] dark:!bg-primaryDark dark:before:border-t-primaryDark`}
      >
        {progress}%
      </span>
    </motion.div>
  );
}
