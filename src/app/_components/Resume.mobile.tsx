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

const Resume = () => {
  return (
    // 修改最外层容器，使其在移动端时变为纵向布局
    <div className="flex h-screen flex-col items-start gap-8 p-4 md:flex-row md:p-8">
      {/* 左侧照片部分 */}
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

      {/* 右侧文字部分 */}
      <div className="w-full flex-1">
        <MotionText
          className="mb-6 text-sm md:mb-12 md:text-base"
          text="2015 ～ 2019. 北京理工大学珠海学院. 软件工程"
        />
        <MotionText
          className="text-sm md:text-base"
          text="我是Web前端/RN开发工程师，我具备扎实的技术基础和丰富的实战经验。在工业应用领域，我熟悉各种硬件集成和数据处理技术，能够独立完成从需求分析到产品交付的全过程。我注重代码质量和性能优化，同时具备良好的团队协作能力和沟通技巧。我热爱技术创新，不断学习新技术并应用到实际项目中。"
        />

        {/* 工作经历和项目经历部分 */}
        <div className="mt-6 flex flex-col gap-8 md:mt-12 md:flex-row">
          {/* 左侧：工作经历时间轴 */}
          <div className="w-full md:w-1/2">
            <h2 className="mb-4 text-xl font-bold md:text-2xl">工作经历</h2>
            <ol className="relative border-l-2 border-gray-300">
              {workExperiences.map((exp, idx) => (
                <li className="relative mb-6 pl-6 md:mb-8" key={idx}>
                  <span className="absolute top-1.5 -left-2.5 h-4.5 w-4.5 rounded-full bg-blue-500 ring-4 ring-white"></span>
                  <h3 className="text-base font-semibold md:text-lg">
                    {exp.time} | {exp.company}
                  </h3>
                  <div className="text-sm text-gray-600 md:text-base">
                    {exp.title}，{exp.desc}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
