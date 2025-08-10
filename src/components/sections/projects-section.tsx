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
    title: "App分发平台重构",
    description:
      "负责项目前后端重构，独立开发遗留的.NET+React应用重构为Next.js应用，解决10+未维护接口的安全风险，基于现代化架构重用数据表，代码复用率提升70%，减少50%的跨端协作成本。实现SSR/ISR混合渲染，首屏性能提升3倍",
    technologies: ["Next.js", "TypeScript", "drizzle-orm", "trpc", "zod"],
  },
  {
    title: "云南国投隐患排查管控 ",
    description:
      "从需求分析到开发落地全流程跟进，实现定位模块、webview高德地图模块。App采用ReactNative、前端采用Vue。",
    technologies: ["Vue", "React Native", "geolocation", "AMap", "TypeScript"],
  },
  {
    title: "跨平台开发框架建设",
    description:
      "20+个高复用业务组件设计开发、Sentry 错误追踪、CI/CD、不同RN版本打包控制等",
    technologies: ["React Native", "ui-kitten", "TypeScript", 'Rollup'],
  },
  {
    title: "智能监控TV应用",
    description:
      "使用ReactNative开发TV大屏，rn-vlcplayer对接rtmp流媒体实现多路视频直播，监听电视遥控器事件实现VLC播放器视频进度定位",
    technologies: [
      "React Native",
      "RN-TV",
      "RN-UILib",
      "rn-vlc-player",
      "rtmp",
    ],
  },
  {
    title: "武汉宝钢启停机系统管控",
    description:
      "开发了一套完整的启停机操作票业务，包括标准模版模块、离线执行数据回传模块、多媒体管理模块、流程审批模块、MQTT同步模块、硬件设备数据下发等模块。App采用ReactNative、前端采用Vue。",
    technologies: ["React Native", "Vue", "MQTT", "RN-BLE", "RN-Vision-camera"],
  },
  {
    title: "雅砻江定期工作调度",
    description:
      "使用动态JSON schema解析luckysheet表单生成App表单，高性能长列表解决方案，配合memo、immerjs等工具优化数据重渲染问题，实现10k+表单项流畅滚动、并提升项目可读性",
    technologies: ["React Native", "immer", "superJson", "@shopify/flash-list"],
  },
  {
    title: "安庆门禁出入厂管理",
    description:
      "RFID设备统计人员进出情况。rn-Echarts开发App图表展示，结合moti、navitewind等工具增强动效交互体验",
    technologies: ["React Native", "moti", "navitewind", "RN-echarts"],
  },
  // {
  //   title: "旅游规划应用",
  //   description:
  //     "设计了一款旅游规划应用，提供目的地推荐、行程规划和预订服务。集成了地图服务和用户评价系统。",
  //   technologies: ["React Native", "GraphQL", "MongoDB", "Google Maps API"],
  // },
  // {
  //   title: "内容管理系统",
  //   description:
  //     "开发了一个灵活的内容管理系统，支持多种内容类型和自定义工作流。实现了版本控制和多语言支持。",
  //   technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  // },
];

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="section from-muted/50 to-background overflow-auto bg-gradient-to-b">
      <div className="section-content max-h-[calc(100vh-200px)] overflow-y-auto">
        <AnimatedElement animation="fade-in">
          <h2 className="section-title">项目经历</h2>
        </AnimatedElement>
      </div>
      <div className="mx-auto grid max-h-[calc(100vh-200px)] max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <CardDescription className="line-clamp-4 h-10">
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
  );
}
