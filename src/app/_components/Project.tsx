"use client";

import { motion } from "framer-motion";

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
# 在这里收录过往项目

### 武汉 xx 启停机系统管控 App

技术栈：expo0.51 + @shopify/flash-list + moti + wuba/react-native-echarts
功能亮点：

- 高性能长列表解决方案
  实现 1 万+动态元素 流畅滚动（FPS≥55），采用 分片加载+按需渲染 策略，结合 FlatList 的 windowSize 和 maxToRenderPerBatch 参数调优
  通过 memo 函数与 keyExtractor 精准匹配，降低列表项重渲染率 85%
  集成 FlashList，长列表内存占用减少 40%

- Moti 动效体系设计
  组件级动效规范 ，利用 Moti 的 from/exit 生命周期实现 原子化动画 ，支持全局插值控制（如弹窗入场弹性动画、卡片退场渐隐）
  与手势联动：基于 onPressIn/Out 事件驱动 scale 属性插值，提升用户操作反馈灵敏度

- wuba/react-native-echarts 跨端图表展示
  攻克跨端图表性能瓶颈，针对 10 万级数据点 场景采用 WebWorkers 异步解析+数据分桶降采样
  设计 动态主题引擎 ，支持服务端下发的 JSON Schema 实时切换图表样式
  封装 图表-列表联动组件 ，滚动时同步高亮折线图对应数据节点

### 智能 xxTV 大屏

技术栈：expo0.50/rn-ui/nativeWind/rn-VLC-Player

功能亮点：
大屏多直播流架构
实现 9 路 1080P 直播流 同屏播放，采用 分屏动态卸载 策略：聚焦窗口全分辨率渲染，其余窗口降级为 低码率缩略流

通过 SurfaceView + OpenGL ES 纹理共享方案，多播放器内存占用降低 35%

开发 智能保活机制 ：后台流自动切换 TCP/UDP 双链路，弱网下卡顿率减少 62%

直播流操作体系
搭建 精准回放系统 ：基于 rn-vlc-player 的 seekTo + playbackRate 实现 50ms 级定位 ，支持 2 倍速/逐帧回放

设计 分布式缓存策略 ：本地分段存储最近 4 小时直播流（LRU 算法），回放加载速度提升 3 倍

事件标记系统：通过 Moment 组件在时间轴添加告警标记（红点+悬浮信息卡）

系统级应用集成
实现 设备自启动监控模式 ：监听 Android BOOT_COMPLETED 广播自动拉起应用，初始化耗时压缩至 1.2 秒内

构建混合监控看板：通过 react-native-webview 加载 ECharts 告警图表，设计 postMessage 双向通信协议同步告警事件

开发 安全沙箱机制 ：限制 WebView 网络请求白名单，拦截 XSS 攻击成功率 100%

### 四川 xx 定期工作调度 App

技术栈：RN^0.63/NFC/realm

功能亮点：
表单组件 + NFC 标签 + realm 离线

### 云南 xx 隐患工作打卡管控 App （ 定位打卡 ）

技术栈：RN^0.63/location/map
功能亮点：
定位打卡

### 安庆 xx 电厂门禁出入厂 App （RFID/蓝牙下发开/闭锁操作）

技术栈：RN^0.63/RFID/BLE
功能亮点：
蓝牙下发开/闭锁操作

### 跨平台开发框架建设（工程化实践）（Next、Lynx、鸿蒙、Taro）

技术栈：Nextjs/react-query/@radix-ui/framer-motion/zod/drizzle/postgres/Lynx/Taro
实践中

###

    `,
  },
  {
    name: "企业门户网站重构",
    desc: "主导前端重构，优化页面性能与SEO，提升用户体验。",
  },
];

const Project = () => {
  return (
    <motion.div
      className="mt-8 flex gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 2,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <h2 className="mb-4 text-2xl font-bold">项目经历</h2>
      <ul className="space-y-6">
        {projectExperiences.map((proj, idx) => (
          <li key={idx} className="relative max-h-[300px]">
            <h3 className="sticky top-0 z-10 py-2 text-lg font-semibold">
              {proj.name}
            </h3>
            <div className="max-h-[calc(300px-3rem)] overflow-y-auto">
              <p className="text-sm text-gray-600">{proj.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Project;
