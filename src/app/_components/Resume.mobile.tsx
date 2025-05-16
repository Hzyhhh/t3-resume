import React from "react";
import Image from "next/image";
import MotionText from "./MotionText";

const Resume = () => {
  return (
    // 修改最外层容器，使其在移动端时变为纵向布局
    <div className="flex h-screen flex-col items-start gap-8 p-4 md:flex-row md:p-8">
      <div className="flex w-full flex-col items-center md:w-auto">
        <Image
          src="/images/IMG_4154.JPG"
          alt=""
          width={350}
          height={350}
          className="w-48 rounded-lg object-cover md:w-[350px]"
          draggable={false}
        />
        <h1 className="mt-6 text-center text-3xl md:mt-12 md:text-4xl">
          黄梓阳
        </h1>
      </div>

      <div className="w-full flex-1">
        <MotionText
          className="mb-6 text-sm md:mb-12 md:text-base"
          text="2015 ～ 2019. 北京理工大学珠海学院. 软件工程"
        />
        <MotionText
          className="text-sm md:text-base"
          text="我是Web前端/RN开发工程师，我具备扎实的技术基础和丰富的实战经验。在工业应用领域，我熟悉各种硬件集成和数据处理技术，能够独立完成从需求分析到产品交付的全过程。我注重代码质量和性能优化，同时具备良好的团队协作能力和沟通技巧。我热爱技术创新，不断学习新技术并应用到实际项目中。"
        />
      </div>
    </div>
  );
};

export default Resume;
