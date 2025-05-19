import { headers } from "next/headers";
// import Link from "next/link";

// import { LatestPost } from "~/app/_components/post";
// import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

import { Section } from "./_components/MenuDialog";
import Project from "./_components/Project.mobile";
import Experiences from "./_components/Experiences.mobile";

export default async function Home() {
  // const session = await auth();
  const headersList = await headers();
  const ip =
    headersList.get("x-real-ip") ??
    headersList.get("x-forwarded-for") ??
    headersList.get("cf-connecting-ip") ?? // Cloudflare
    "unknown";
  const userAgent = headersList.get("user-agent") ?? "unknown";

  // 判断是否为移动端
  const isMobile = /mobile|android|iphone|ipad|ipod/i.test(userAgent);

  // 动态导入对应组件
  const Resume = isMobile
    ? (await import("./_components/Resume.mobile")).default
    : (await import("./_components/Resume")).default;

  // 记录访问
  await api.pageView.recordView.call(null, { ip, userAgent });

  // 获取统计数据
  const stats = await api.pageView.getStats();

  return (
    <HydrateClient>
      <div className="scrollbar h-screen w-full snap-y snap-mandatory overflow-y-scroll bg-white dark:bg-gray-900">
        <Section title="个人简历" className="min-h-screen">
          <Resume />
        </Section>

        {isMobile && (
          <Section title="项目经历" className="min-h-screen">
            <Project />
          </Section>
        )}
        {isMobile && (
          <Section title="工作经历" className="min-h-screen">
            <Experiences />
          </Section>
        )}
        <Section title="作品集" className="min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <p className="text-lg text-gray-700 dark:text-gray-300">这里是作品集的详细内容</p>
          </div>
        </Section>

        <div className="fixed bottom-4 right-4 rounded-lg bg-white/90 p-3 shadow-lg backdrop-blur-sm dark:bg-gray-800/90">
          <p className="text-sm text-gray-700 dark:text-gray-300">总访问量：{stats.totalViews}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">独立访客：{stats.uniqueVisitors}</p>
        </div>
      </div>
    </HydrateClient>
  );
}
