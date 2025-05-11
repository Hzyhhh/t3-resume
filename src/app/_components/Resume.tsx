import React from "react";
import Image from "next/image";
import MotionText from "./MotionText";

// 工作经历数据
const workExperiences = [
  {
    time: "至今 ～ 2022.07",
    company: "优特电力科技股份有限公司",
    title: "Web前端工程师",
    desc: "作为核心开发成员，我负责多个关键模块的设计与实现。",
  },
  {
    time: "2022.06 ～ 2019.07 ",
    company: "远光软件股份有限公司",
    title: "Web前端工程师",
    desc: "参与多个Web与移动端项目，积累了丰富的实战经验。",
  },
];

// 项目经历数据
const projectExperiences = [
  {
    name: "工业设备监控平台",
    desc: "负责前端架构设计与开发，实现设备数据实时可视化与告警推送。",
  },
  {
    name: "移动端巡检系统",
    desc: `基于React Native开发，提升巡检效率，支持离线数据同步。
    1. 复杂状态管理应用。状态管理采用 MobX，有效解决了大型应用状态复杂的问题
2. 多媒体处理与实时通信能力。集成了VLC视频回放功能，支持实时视频监控和异
常检测
3. 硬件交互能力。集成蓝牙、NFC、热成像（FLIR）、RFID 标签读取等硬件交互
功能
4. 物联网与实时数据处理。和图表更新MQTT 协议、 WebSocket 的实时数据展示
等能力实现了设备实时数据通信和图表展示等功能
5. 离线功能。集成了realm的离线数据收集和网络恢复后的自动同步功能
6. 安全与加密。集成了生物识别（指纹/面部识别）功能，提高了应用安全性
7. 工程化与持续集成。参与构建了组件化开发框架，提高了代码复用率和开发效
率。使用 CodePush 的热更新功能，缩短了版本迭代周期
8. 性能优化。针对应用进行了模块化拆分、对列表渲染和大数据处理进行了性能优
化。提高了应用启动和响应速度
    `,
  },
  {
    name: "企业门户网站重构",
    desc: "主导前端重构，优化页面性能与SEO，提升用户体验。",
  },
];

const Resume = () => {
  return (
    <div className="flex h-screen items-start gap-8">
      {/* 左侧照片 */}
      <div className="flex h-full flex-col">
        <Image
          src="/images/IMG_4154.JPG"
          alt=""
          width={350}
          height={350}
          className="rounded-lg object-cover"
          draggable={false}
        />

        <h1 className="mt-12 text-center text-4xl">黄梓阳</h1>
      </div>
      {/* 右侧文字 */}
      <div className="flex-1">
        <MotionText
          className="mb-12"
          text="2015 ～ 2019. 北京理工大学珠海学院. 软件工程"
        />
        <MotionText text="我是Web前端/RN开发工程师，我具备扎实的技术基础和丰富的实战经验。在工业应用领域，我熟悉各种硬件集成和数据处理技术，能够独立完成从需求分析到产品交付的全过程。我注重代码质量和性能优化，同时具备良好的团队协作能力和沟通技巧。我热爱技术创新，不断学习新技术并应用到实际项目中。" />

        <div className="mt-12 flex gap-8">
          {/* 左侧：工作经历时间轴 */}
          <div className="w-1/2">
            <h2 className="mb-4 text-2xl font-bold">工作经历</h2>
            <ol className="relative border-l-2 border-gray-300">
              {workExperiences.map((exp, idx) => (
                <li className="relative mb-8 pl-6" key={idx}>
                  <span className="absolute top-1.5 -left-2.5 h-4.5 w-4.5 rounded-full bg-blue-500 ring-4 ring-white"></span>
                  <h3 className="text-lg font-semibold">
                    {exp.time} | {exp.company}
                  </h3>
                  <div className="text-gray-600">
                    {exp.title}，{exp.desc}
                  </div>
                </li>
              ))}
            </ol>
          </div>
          {/* 右侧：项目经历 */}
          <div className="w-1/2">
            <h2 className="mb-4 text-2xl font-bold">项目经历</h2>
            <ul className="space-y-6">
              {projectExperiences.map((proj, idx) => (
                <li key={idx}>
                  <h3 className="text-lg font-semibold">{proj.name}</h3>
                  <p className="text-sm text-gray-600">{proj.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
