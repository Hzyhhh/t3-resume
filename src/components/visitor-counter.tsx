import { Users } from "lucide-react";
import { api } from "~/trpc/server";

export default async function VisitorCounter() {
  const stats = await api.pageView.getStats();

  return (
    <div className="bg-background/80 fixed right-4 bottom-4 z-50 flex items-center gap-1 rounded-full border px-3 py-1 shadow-sm backdrop-blur-sm">
      <Users className="h-4 w-4" />
      <span className="text-sm font-medium">{stats.totalViews}</span>
    </div>
  );
}
