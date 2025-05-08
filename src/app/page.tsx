import { headers } from "next/headers";
// import Link from "next/link";

// import { LatestPost } from "~/app/_components/post";
// import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

import { Section } from "./_components/MenuDialog";

export default async function Home() {
  // const session = await auth();
  const headersList = await headers();
  const ip =
    headersList.get("x-real-ip") ??
    headersList.get("x-forwarded-for") ??
    headersList.get("cf-connecting-ip") ?? // Cloudflare
    "unknown";
  const userAgent = headersList.get("user-agent") ?? "unknown";

  // 记录访问
  await api.pageView.recordView.call(null, { ip, userAgent });

  // 获取统计数据
  const stats = await api.pageView.getStats();

  return (
    <HydrateClient>
      <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll">
        <Section>
          <div>个人简历</div>
          <div className="mt-4 text-sm">
            <p>总访问量：{stats.totalViews}</p>
            <p>独立访客：{stats.uniqueVisitors}</p>
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl font-bold">第二页内容</h2>
          <p>这里是第二页的详细内容</p>
        </Section>
        <Section>
        <h2 className="text-2xl font-bold">第三页内容</h2>
        <p>这里是第三页的详细内容</p>
        </Section>
      </div>
    </HydrateClient>
  );
}
