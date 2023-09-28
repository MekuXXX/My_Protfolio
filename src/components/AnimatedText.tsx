"use client";
import { motion } from "framer-motion";

type Props = {
  text: string;
  classname?: string;
};

const SingleWordVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function AnimatedText({ text, classname }: Props) {
  return (
    <div
      className={
        "mx-auto flex w-full items-center justify-center py-2 text-center"
      }
    >
      <motion.h1
        variants={SingleWordVariant}
        initial={"hidden"}
        animate={"visible"}
        className={`inline-block w-full text-4xl font-extrabold capitalize text-dark dark:text-light md:text-6xl ${classname}`}
      >
        {text.split(" ").map((word, ind) => (
          <motion.span
            variants={SingleWordVariant}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
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
