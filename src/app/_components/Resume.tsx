import React from "react";
import Image from "next/image";
import MotionText from "./MotionText";
import Experiences from "./Experiences.mobile";
import Project from "./Project";

const Resume = () => {
  return (
    <div className="flex h-screen items-start gap-8">
      {/* 左侧内容 */}
      <div className="flex h-full w-64 flex-col">
        <div className="flex justify-center">
          <Image
            src="/images/IMG_4154.JPG"
            alt=""
            width={200}
            height={200}
            className="rounded-lg object-cover"
            draggable={false}
          />
        </div>
        <h1 className="mt-4 text-center text-4xl">黄梓阳</h1>

        {/* 左侧：工作经历时间轴 */}
        <Experiences />
      </div>
      {/* 右侧文字 */}
      <div className="flex-1">
        <MotionText
          className="mb-8"
          text="2015 ～ 2019. 北京理工大学珠海学院. 软件工程"
        />
        <MotionText text="我是Web前端/RN开发工程师，我具备扎实的技术基础和丰富的实战经验。在工业应用领域，我熟悉各种硬件集成和数据处理技术，能够独立完成从需求分析到产品交付的全过程。我注重代码质量和性能优化，同时具备良好的团队协作能力和沟通技巧。我热爱技术创新，不断学习新技术并应用到实际项目中。" />

        <Project />
      </div>
    </div>
  );
};

export default Resume;
