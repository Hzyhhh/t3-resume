import React from "react";

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

const Project = () => (
  <div className="w-full md:w-1/2">
    <h2 className="mb-4 text-xl font-bold md:text-2xl">项目经历</h2>
    <ul className="space-y-4 md:space-y-6">
      {projectExperiences.map((proj, idx) => (
        <li key={idx}>
          <h3 className="text-base font-semibold md:text-lg">{proj.name}</h3>
          <p className="text-xs whitespace-pre-wrap text-gray-600 md:text-sm">
            {proj.desc}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default Project;
