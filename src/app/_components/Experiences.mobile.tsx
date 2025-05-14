import React from "react";

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

const Experiences = () => (
  <div className="mt-6 flex flex-col gap-8 md:mt-12 md:flex-row">
    <div className="w-full">
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
);

export default Experiences;
