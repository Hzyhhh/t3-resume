"use client";

import Image from "next/image";
import AnimatedElement from "~/components/animated-element";
import { Card, CardContent } from "~/components/ui/card";

export default function AboutSection() {
  return (
    <div className="section from-background to-muted/50 bg-gradient-to-b">
      <div className="section-content grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <AnimatedElement
          animation="slide-in-left"
          className="flex flex-col items-center md:items-end"
        >
          <div className="border-primary relative h-64 w-64 overflow-hidden rounded-full border-4 md:h-80 md:w-80">
            <Image
              src="/images/IMG_4154.JPG"
              alt="个人头像"
              width={320}
              height={320}
              className="object-cover"
              priority
            />
          </div>
        </AnimatedElement>

        <AnimatedElement
          animation="slide-in-right"
          className="flex flex-col gap-6"
        >
          <div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl">黄梓阳</h1>
            <h2 className="text-muted-foreground text-xl md:text-2xl">
              React/Vue开发工程师
            </h2>
          </div>
          <AnimatedElement
            animation="slide-in-right"
            className="flex flex-col gap-6"
            delay={0.5}
          >
            <p className="text-lg">
              28岁,
              6年前端开发经验，熟悉React、Next.js、ReactNative、Vue等框架。
            </p>
          </AnimatedElement>

          <h2 className="text-lg font-semibold">
            Talk is cheap, show me your code
          </h2>

          <AnimatedElement animation="fade-in" delay={1}>
            {/* <h3 className="section-subtitle">学历背景</h3> */}
            <div className="space-y-4">
              {/* <div>
                    <h4 className="font-semibold">计算机科学与技术 | 硕士学位</h4>
                    <p className="text-muted-foreground">某知名大学 | 2014-2017</p>
                  </div> */}
              <div>
                <h4 className="font-semibold">北京理工大学珠海学院</h4>
                <p className="text-muted-foreground">
                  本科 | 软件工程 | 2015 ～ 2019
                </p>
              </div>
            </div>
          </AnimatedElement>
        </AnimatedElement>
      </div>
    </div>
  );
}
