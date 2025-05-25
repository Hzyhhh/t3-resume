"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "~/hooks/use-media-query";
import { ChevronDown } from "lucide-react";

interface FullPageScrollProps {
  children: ReactNode[];
}

export default function FullPageScroll({ children }: FullPageScrollProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isScrollable = (element: HTMLElement): boolean => {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  };

  const canScroll = (element: HTMLElement, deltaY: number): boolean => {
    if (!isScrollable(element)) return false;

    const isAtTop = element.scrollTop === 0;
    const isAtBottom = element.scrollHeight - element.scrollTop === element.clientHeight;

    return (
      (deltaY < 0 && !isAtTop) || // 向上滚动且不在顶部
      (deltaY > 0 && !isAtBottom) // 向下滚动且不在底部
    );
  };

  const findScrollableParent = (element: HTMLElement | null): HTMLElement | null => {
    if (!element) return null;
    if (isScrollable(element)) return element;
    return findScrollableParent(element.parentElement);
  };

  const goToNextPage = () => {
    if (currentPage < children.length - 1 && !isScrolling) {
      setIsScrolling(true);
      setScrollDirection("down");
      setCurrentPage(currentPage + 1);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0 && !isScrolling) {
      setIsScrolling(true);
      setScrollDirection("up");
      setCurrentPage(currentPage - 1);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      const scrollableParent = findScrollableParent(target);

      if (scrollableParent && canScroll(scrollableParent, e.deltaY)) {
        return; // 允许子组件滚动
      }

      e.preventDefault();

      if (isScrolling) return;

      if (e.deltaY > 200) {
        goToNextPage();
      } else if (e.deltaY < -200) {
        goToPrevPage();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      if (e.key === "ArrowDown") {
        setScrollDirection("down");
        goToNextPage();
      } else if (e.key === "ArrowUp") {
        setScrollDirection("up");
        goToPrevPage();
      }
    };

    const currentContainer = containerRef.current;
    if (currentContainer && !isMobile) {
      currentContainer.addEventListener("wheel", handleWheel, {
        passive: false,
      });
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (currentContainer && !isMobile) {
        currentContainer.removeEventListener("wheel", handleWheel);
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [currentPage, isScrolling, children.length, isMobile]);

  // If on mobile, don't use full page scroll
  if (isMobile) {
    return (
      <div className="w-full">
        {children.map((child, index) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            id={`section-${index}`}
            className="min-h-screen w-full"
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.section
          key={currentPage}
          initial={{ opacity: 0, y: scrollDirection === "down" ? 100 : -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: scrollDirection === "down" ? -100 : 100 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="h-screen w-full"
        >
          {children[currentPage]}

          {currentPage < children.length - 1 && (
            <motion.div
              className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 cursor-pointer"
              onClick={goToNextPage}
              initial={{ opacity: 0.6, y: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <ChevronDown className="text-primary h-8 w-8" />
            </motion.div>
          )}
        </motion.section>
      </AnimatePresence>

      <div className="fixed top-1/2 right-4 z-40 -translate-y-1/2">
        <div className="flex flex-col gap-2">
          {children.map((_, index) => (
            <button
              type="button"
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              onClick={() => {
                if (!isScrolling) {
                  setIsScrolling(true);
                  setCurrentPage(index);
                  setTimeout(() => setIsScrolling(false), 1000);
                }
              }}
              className={`h-3 w-3 rounded-full transition-all ${
                currentPage === index
                  ? "bg-primary h-4 w-4"
                  : "bg-muted-foreground opacity-50"
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
