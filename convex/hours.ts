import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const log = mutation({
  args: {
    clientId: v.id("clients"),
    date: v.string(),
    hours: v.number(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("hours", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

export const byClient = query({
  args: { clientId: v.id("clients") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("hours")
      .withIndex("by_client", (q) => q.eq("clientId", args.clientId))
      .collect();
  },
});

export const thisWeek = query({
  args: {},
  handler: async (ctx) => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const monday = new Date(now);
    monday.setDate(now.getDate() - ((dayOfWeek + 6) % 7));
    monday.setHours(0, 0, 0, 0);
    const mondayStr = monday.toISOString().split("T")[0];

    const allHours = await ctx.db
      .query("hours")
      .withIndex("by_date")
      .filter((q) => q.gte(q.field("date"), mondayStr))
      .collect();

    return allHours.reduce((sum, h) => sum + h.hours, 0);
  },
});

export const available = query({
  args: {},
  handler: async (ctx) => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const monday = new Date(now);
    monday.setDate(now.getDate() - ((dayOfWeek + 6) % 7));
    monday.setHours(0, 0, 0, 0);
    const mondayStr = monday.toISOString().split("T")[0];

    const allHours = await ctx.db
      .query("hours")
      .withIndex("by_date")
      .filter((q) => q.gte(q.field("date"), mondayStr))
      .collect();

    const used = allHours.reduce((sum, h) => sum + h.hours, 0);
    return 20 - used;
  },
});
