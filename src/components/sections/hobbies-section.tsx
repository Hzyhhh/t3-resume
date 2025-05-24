"use client"

import { useState, useEffect, useRef } from "react"
import AnimatedElement from "~/components/animated-element"
import { Card, CardContent } from "~/components/ui/card"
import { Book, Code, Music, Camera, Bike, Gamepad, Utensils, Plane } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "~/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const hobbies = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "开源贡献",
    description: "积极参与开源社区，为多个流行库贡献代码，包括React组件库和工具包。",
  },
  {
    icon: <Book className="h-8 w-8" />,
    title: "阅读",
    description: "热爱阅读技术书籍和科幻小说，每年阅读约30本书，保持对新知识的探索。",
  },
  {
    icon: <Music className="h-8 w-8" />,
    title: "音乐",
    description: "业余吉他爱好者，喜欢在闲暇时间弹奏和创作音乐，偶尔参加小型演出。",
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "摄影",
    description: "热爱风景和街头摄影，记录生活中的美好瞬间，探索不同的视角和构图。",
  },
  {
    icon: <Bike className="h-8 w-8" />,
    title: "骑行",
    description: "周末喜欢骑行探索城市和郊外，既锻炼身体又放松心情，享受户外活动。",
  },
  {
    icon: <Gamepad className="h-8 w-8" />,
    title: "电子游戏",
    description: "享受策略和角色扮演类游戏，偶尔参与游戏开发社区，尝试制作小型游戏。",
  },
  {
    icon: <Utensils className="h-8 w-8" />,
    title: "烹饪",
    description: "喜欢尝试不同菜系的烹饪，特别是亚洲和地中海料理，享受创造美食的过程。",
  },
  {
    icon: <Plane className="h-8 w-8" />,
    title: "旅行",
    description: "热爱探索不同文化和风景，已经去过15个国家，计划未来继续增加这个数字。",
  },
]

export default function HobbiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [carouselHeight, setCarouselHeight] = useState(0)

  // 计算并设置轮播的固定高度
  useEffect(() => {
    if (carouselRef.current) {
      // 获取所有卡片中最高的高度
      const cards = carouselRef.current.querySelectorAll(".hobby-card")
      let maxHeight = 0

      cards.forEach((card) => {
        const height = card.getBoundingClientRect().height
        if (height > maxHeight) {
          maxHeight = height
        }
      })

      // 设置固定高度（添加一些额外空间）
      setCarouselHeight(maxHeight + 20)
    }
  }, [])

  // 自动播放
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hobbies.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [autoplay])

  // 暂停自动播放（当用户交互时）
  const pauseAutoplay = () => {
    setAutoplay(false)
    // 5秒后恢复自动播放
    setTimeout(() => setAutoplay(true), 5000)
  }

  const nextSlide = () => {
    pauseAutoplay()
    setCurrentIndex((prev) => (prev + 1) % hobbies.length)
  }

  const prevSlide = () => {
    pauseAutoplay()
    setCurrentIndex((prev) => (prev - 1 + hobbies.length) % hobbies.length)
  }

  const goToSlide = (index: number) => {
    pauseAutoplay()
    setCurrentIndex(index)
  }

  // 计算要显示的卡片（当前卡片和前后各一张）
  const visibleHobbies = [
    hobbies[(currentIndex - 1 + hobbies.length) % hobbies.length],
    hobbies[currentIndex],
    hobbies[(currentIndex + 1) % hobbies.length],
  ]

  return (
    <div className="section bg-gradient-to-b from-background to-muted/50">
      <div className="section-content">
        <AnimatedElement animation="fade-in">
          <h2 className="section-title">个人爱好</h2>
        </AnimatedElement>

        <div className="relative max-w-4xl mx-auto my-12">
          {/* 轮播控制按钮 */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* 轮播内容 */}
          <div
            ref={carouselRef}
            className="overflow-hidden px-12"
            style={{ height: carouselHeight ? `${carouselHeight}px` : "auto" }}
          >
            <div className="flex justify-center items-center gap-4">
              <AnimatePresence mode="popLayout">
                {visibleHobbies.map((hobby, index) => {
                  const isCenter = index === 1

                  return (
                    <motion.div
                      key={`${currentIndex}-${index}`}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        x: index === 0 ? -100 : index === 2 ? 100 : 0,
                      }}
                      animate={{
                        opacity: isCenter ? 1 : 0.7,
                        scale: isCenter ? 1 : 0.85,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        x: index === 0 ? 100 : index === 2 ? -100 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                      className={`${isCenter ? "z-10" : "z-0"} hobby-card`}
                    >
                      <Card className={`w-full ${isCenter ? "shadow-lg" : "shadow-md"}`}>
                        <CardContent className="p-6 flex flex-col items-center text-center">
                          <div
                            className={`p-4 rounded-full bg-primary/10 text-primary mb-4 ${
                              isCenter ? "scale-100" : "scale-90"
                            }`}
                          >
                            {hobby.icon}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                          <p className={`${isCenter ? "text-foreground" : "text-muted-foreground"}`}>
                            {hobby.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* 指示器 */}
          <div className="flex justify-center mt-6 gap-2">
            {hobbies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-primary w-4" : "bg-muted-foreground opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <AnimatedElement animation="fade-in" delay={0.3} className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            感谢您浏览我的个人简历网站。如果您对我的经历和技能感兴趣，欢迎联系我进行进一步交流。
          </p>
        </AnimatedElement>
      </div>
    </div>
  )
}
