"use client";

import React from "react";
import { motion } from "framer-motion";

interface MotionTextProps {
  className?: string;
  text: string;
  speed?: number; // 每个字符出现的间隔(ms)
}

const MotionText: React.FC<MotionTextProps> = ({
  className,
  text,
  speed = 20,
}) => {
  return (
    <span className={"inline-block " + className}>
      {text.split("").map((char, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (idx * speed) / 1000, duration: 0.7 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default MotionText;
