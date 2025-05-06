import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { pageViews } from "~/server/db/schema";
import { sql } from "drizzle-orm";

export const pageViewRouter = createTRPCRouter({
  recordView: publicProcedure
    .input(
      z.object({
        ip: z.string(),
        userAgent: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(pageViews).values({
        ip: input.ip,
        userAgent: input.userAgent,
      });
    }),

  getStats: publicProcedure.query(async ({ ctx }) => {
    const totalViews = await ctx.db
      .select({ count: sql<number>`count(*)` })
      .from(pageViews);

    const uniqueVisitors = await ctx.db
      .select({ count: sql<number>`count(distinct ip)` })
      .from(pageViews);

    return {
      totalViews: totalViews[0]?.count,
      uniqueVisitors: uniqueVisitors[0]?.count,
    };
  }),
});
