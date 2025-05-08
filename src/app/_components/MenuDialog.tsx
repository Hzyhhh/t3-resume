"use client";

import { motion } from "framer-motion";

interface SectionProps {
  children?: React.ReactNode;
}

export function Section(props: SectionProps) {
  return (
    <motion.section
      className="flex h-screen w-full snap-start flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {props.children}
    </motion.section>
  );
}
