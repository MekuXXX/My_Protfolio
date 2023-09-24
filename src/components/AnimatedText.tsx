"use client";
import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
};

const SingleWordVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    tranision: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export default function AnimatedText({ text, className }: Props) {
  return (
    <div
      className={
        "w-full mx-auto py-2 flex items-center justify-center text-center"
      }
    >
      <motion.h1
        initial={"hidden"}
        animate={"visible"}
        transition={{
          delay: 0.5,
          staggerChildren: 0.08,
        }}
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
      >
        {text.split(" ").map((word, ind) => (
          <motion.span
            variants={SingleWordVariant}
            key={word + "-" + ind}
            className={"inline-block"}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
