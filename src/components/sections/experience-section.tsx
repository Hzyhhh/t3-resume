"use client"

import AnimatedElement from "~/components/animated-element"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"

const experiences = [
  {
    company: "优特电力科技有限公司",
    position: "高级前端开发工程师",
    period: "2021年至今",
    description:
      "负责公司核心产品的前端架构设计和开发，带领3人团队完成多个重要项目。优化了前端构建流程，将构建时间缩短了40%。",
    achievements: [
      "重构了公司主要产品的前端架构，提升了代码可维护性和开发效率",
      "设计并实现了组件库，提高了团队协作效率和产品一致性",
      "优化了前端性能，使页面加载时间减少了50%",
      "引入了自动化测试和CI/CD流程，提高了代码质量和部署效率",
      "指导和培训初级开发人员，提升团队整体技术水平",
    ],
    technologies: ["ReactNative", "TypeScript", "Realm", "Mqtt"],
  },
  {
    company: "远光软件股份有限公司",
    position: "前端开发工程师",
    period: "2019年 - 2021年",
    description: "参与公司多个Web应用的开发和维护，负责UI组件的开发和优化。",
    achievements: [
      "开发了公司内部使用的UI组件库，提高了开发效率",
      "负责重构旧系统，将jQuery迁移到Vue.js，提升了用户体验",
      "实现了多个复杂的数据可视化功能，获得客户好评",
      "优化了前端构建流程，减少了打包体积，提升了应用性能",
      "参与了多个跨部门项目，协调前后端团队合作",
      "编写了详细的技术文档，方便团队成员理解和维护代码",
    ],
    technologies: ["Vue.js", "JavaScript", "SCSS", "Webpack"],
  },
  {
    company: "某互联网创业公司",
    position: "Web开发实习生",
    period: "2016年 - 2017年",
    description: "参与公司官网和内部管理系统的开发，负责前端页面实现和简单的后端功能。",
    achievements: [
      "独立完成了公司官网的响应式改版，提升了移动端用户体验",
      "参与开发了内部项目管理系统，提高了团队协作效率",
      "学习并应用了前端工程化工具，如Webpack和Babel",
      "解决了多个浏览器兼容性问题，确保了良好的跨浏览器体验",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
  },
]

export default function ExperienceSection() {
  return (
    <div className="section bg-gradient-to-b from-background to-muted/50">
      <div className="section-content h-full overflow-y-auto pb-12">
        <AnimatedElement animation="fade-in">
          <h2 className="section-title sticky top-0 pt-4 pb-6 bg-background/80 backdrop-blur-sm z-10">工作经历</h2>
        </AnimatedElement>

        <div className="space-y-8 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
          {experiences.map((exp, index) => (
            <AnimatedElement key={index} animation="slide-up" delay={index * 0.2}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <CardTitle>{exp.position}</CardTitle>
                      <CardDescription>
                        {exp.company} | {exp.period}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <h4 className="font-semibold mb-2">主要成就：</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </div>
  )
}
