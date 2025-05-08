"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 500, damping: 30 } },
};

interface SectionProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
}

export function Section(props: SectionProps) {
  return (
    <motion.section
      className="flex p-6 h-screen w-full snap-start flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {props.title && (
        <motion.div
          className="mb-8 text-3xl font-bold text-center w-full flex justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {typeof props.title === "string"
            ? props.title.split("").map((char, idx) =>
                char === " " ? (
                  <span key={idx} style={{ display: "inline-block", width: "0.6em" }}>&nbsp;</span>
                ) : (
                  <motion.span
                    key={idx}
                    variants={letterVariants}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                )
              )
            : props.title}
        </motion.div>
      )}
      {props.children}
    </motion.section>
  );
}
