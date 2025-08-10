"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

interface Dependency {
  name: string;
  description?: string;
  proficiency: "入门" | "初级" | "中级" | "高级";
  link?: string;
}

interface DependencyBubbleProps {
  dependencies: Dependency[];
}

export default function DependencyBubble({
  dependencies,
}: DependencyBubbleProps) {
  const [hoveredDep, setHoveredDep] = useState<string | null>(null);

  // Sort by proficiency level
  const proficiencyOrder = {
    高级: 4,
    中级: 3,
    初级: 2,
    入门: 1,
  };

  const sortedDeps = [...dependencies].sort(
    (a, b) => proficiencyOrder[b.proficiency] - proficiencyOrder[a.proficiency],
  );

  // Get size based on proficiency
  const getSize = (proficiency: string) => {
    switch (proficiency) {
      case "高级":
        return 120;
      case "中级":
        return 100;
      case "初级":
        return 80;
      case "入门":
        return 60;
      default:
        return 40;
    }
  };

  // Get color based on proficiency
  const getColor = (proficiency: string) => {
    switch (proficiency) {
      case "初级":
        return "bg-yellow-500";
      case "中级":
        return "bg-green-500";
      case "高级":
        return "bg-purple-500";
      // case "专家":
      //   return "bg-purple-500"
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="relative h-[500px] w-full">
      <TooltipProvider>
        <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-4">
          {sortedDeps.map((dep, index) => {
            const size = getSize(dep.proficiency);
            const color = getColor(dep.proficiency);

            return (
              <Tooltip key={dep.name}>
                <TooltipTrigger asChild>
                  <motion.div
                    className={`flex cursor-pointer items-center justify-center rounded-full font-medium text-white ${color}`}
                    style={{ width: size, height: size }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      // boxShadow:
                      //   hoveredDep === dep.name
                      //     ? "0 0 20px rgba(0,0,0,0.3)"
                      //     : "none",
                    }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.5,
                      type: "spring",
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                    onClick={() => {
                      if (dep.link) {
                        window.open(dep.link, "_blank");
                      }
                    }}
                    // onHoverStart={() => setHoveredDep(dep.name)}
                    // onHoverEnd={() => setHoveredDep(null)}
                  >
                    <span className="text-sm md:text-base">{dep.name}</span>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <div className="space-y-2">
                    <p className="font-bold">{dep.name}</p>
                    <p>{dep.description}</p>
                    <p>
                      熟练度:{" "}
                      <span className="font-semibold">{dep.proficiency}</span>
                    </p>
                    {/* <p>使用次数: {dep.usageCount}个项目</p> */}
                  </div>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
    </div>
  );
}
