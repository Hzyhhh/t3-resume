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
      <div className="scrollbar h-screen w-full snap-y snap-mandatory overflow-y-scroll">
        <Section title="个人简历">
          <Resume />
        </Section>

        {isMobile && (
          <Section title="项目经历">
            <Project />
          </Section>
        )}
        {isMobile && (
          <Section title="工作经历">
            <Experiences />
          </Section>
        )}
        <Section title="作品集">
          {/* <h2 className="text-2xl font-bold">第三页内容</h2> */}
          <p>这里是作品集的详细内容</p>
        </Section>

        {/* 固定在右下角的访问统计 */}
        <div className="fixed bottom-2 right-4 rounded-lg bg-white/80 p-2 shadow-lg backdrop-blur-sm dark:bg-black/80">
          <p>总访问量：{stats.totalViews}</p>
          <p>独立访客：{stats.uniqueVisitors}</p>
        </div>
      </div>
    </HydrateClient>
  );
}
