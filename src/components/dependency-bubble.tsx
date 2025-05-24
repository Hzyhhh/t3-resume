"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip"

interface Dependency {
  name: string
  usageCount: number
  description: string
  proficiency: "初级" | "中级" | "高级" | "专家"
}

interface DependencyBubbleProps {
  dependencies: Dependency[]
}

export default function DependencyBubble({ dependencies }: DependencyBubbleProps) {
  const [hoveredDep, setHoveredDep] = useState<string | null>(null)

  // Sort by usage count (descending)
  const sortedDeps = [...dependencies].sort((a, b) => b.usageCount - a.usageCount)

  // Calculate sizes based on usage count
  const maxUsage = Math.max(...sortedDeps.map((d) => d.usageCount))
  const minSize = 60
  const maxSize = 160

  const getSize = (usageCount: number) => {
    return minSize + (usageCount / maxUsage) * (maxSize - minSize)
  }

  // Get color based on proficiency
  const getColor = (proficiency: string) => {
    switch (proficiency) {
      case "初级":
        return "bg-yellow-500"
      case "中级":
        return "bg-green-500"
      case "高级":
        return "bg-blue-500"
      case "专家":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="w-full h-[500px] relative">
      <TooltipProvider>
        <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-4">
          {sortedDeps.map((dep, index) => {
            const size = getSize(dep.usageCount)
            const color = getColor(dep.proficiency)

            return (
              <Tooltip key={dep.name}>
                <TooltipTrigger asChild>
                  <motion.div
                    className={`rounded-full flex items-center justify-center text-white font-medium cursor-pointer ${
                      hoveredDep === dep.name ? "z-10" : "z-0"
                    } ${color}`}
                    style={{ width: size, height: size }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      boxShadow: hoveredDep === dep.name ? "0 0 20px rgba(0,0,0,0.3)" : "none",
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
                    onHoverStart={() => setHoveredDep(dep.name)}
                    onHoverEnd={() => setHoveredDep(null)}
                  >
                    <span className="text-sm md:text-base">{dep.name}</span>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <div className="space-y-2">
                    <p className="font-bold">{dep.name}</p>
                    <p>{dep.description}</p>
                    <p>
                      熟练度: <span className="font-semibold">{dep.proficiency}</span>
                    </p>
                    <p>使用次数: {dep.usageCount}个项目</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            )
          })}
        </div>
      </TooltipProvider>
    </div>
  )
}
