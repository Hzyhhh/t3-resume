import React from "react";
import Image from "next/image";

const Resume = () => {
  return (
    <div className="flex items-start gap-8">
      {/* 左侧照片 */}
      <Image
        src="/images/IMG_4154.JPG"
        alt=""
        width={350}
        height={350}
        className="rounded-lg object-cover"
        draggable={false}
      />
      {/* 右侧文字 */}
      <div className="flex-1">
        <h1>黄梓阳</h1>
        {/* <ResumeContent /> */}
      </div>
    </div>
  );
};

export default Resume;
