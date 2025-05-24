"use client";

import { useState } from "react";
import AnimatedElement from "~/components/animated-element";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "电商平台重构",
    description:
      "使用Next.js和TypeScript重构传统电商平台，提升了50%的页面加载速度和SEO表现。实现了SSR和ISR，优化了移动端体验。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    title: "企业管理系统",
    description:
      "开发了一套完整的企业资源管理系统，包括人事管理、财务报表、库存管理等模块。使用微服务架构，前端采用Vue.js。",
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "社交媒体应用",
    description:
      "构建了一个具有实时聊天功能的社交媒体应用，支持图片和视频分享，使用WebSocket实现即时通讯。",
    technologies: ["React", "Socket.io", "Firebase", "Material UI"],
  },
  {
    title: "在线教育平台",
    description:
      "开发了一个在线教育平台，支持视频课程、直播教学和在线测验。实现了自适应学习路径和个性化推荐系统。",
    technologies: ["React", "Node.js", "PostgreSQL", "WebRTC"],
  },
  {
    title: "健康追踪应用",
    description:
      "设计并开发了一款健康追踪应用，支持活动记录、饮食管理和睡眠分析。集成了多种可穿戴设备的数据同步。",
    technologies: ["React Native", "GraphQL", "AWS", "Firebase"],
  },
  {
    title: "金融数据分析工具",
    description:
      "构建了一个金融数据分析工具，提供实时市场数据、技术指标计算和可视化图表。支持自定义警报和策略回测。",
    technologies: ["Vue.js", "D3.js", "Express", "MongoDB"],
  },
  {
    title: "智能家居控制系统",
    description:
      "开发了一套智能家居控制系统，支持多种设备的远程控制和自动化场景设置。实现了语音控制和能源使用分析。",
    technologies: ["React", "Node.js", "MQTT", "TensorFlow.js"],
  },
  {
    title: "旅游规划应用",
    description:
      "设计了一款旅游规划应用，提供目的地推荐、行程规划和预订服务。集成了地图服务和用户评价系统。",
    technologies: ["React Native", "GraphQL", "MongoDB", "Google Maps API"],
  },
  {
    title: "内容管理系统",
    description:
      "开发了一个灵活的内容管理系统，支持多种内容类型和自定义工作流。实现了版本控制和多语言支持。",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
];

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="section from-muted/50 to-background overflow-auto bg-gradient-to-b">
      <div className="section-content max-h-[calc(100vh-200px)] overflow-y-auto">
        <AnimatedElement animation="fade-in">
          <h2 className="section-title mb-12">项目经历</h2>
        </AnimatedElement>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative h-full"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{
                scale: hoveredIndex === index ? 1.05 : 1,
                zIndex: hoveredIndex === index ? 10 : 1,
                transition: { duration: 0.2 },
              }}
            >
              <AnimatedElement animation="slide-up" delay={index * 0.05}>
                <Card className="flex h-full flex-col">
                  <CardHeader className="flex-grow-0">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2 h-10">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-grow flex-col justify-end">
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
