"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TypeWriter({ text, className, delay = 100 }: TypeWriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((current) => current + text[currentIndex]);
        setCurrentIndex((current) => current + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, delay, text]);

  return <span className={className}>{displayText}</span>;
}
