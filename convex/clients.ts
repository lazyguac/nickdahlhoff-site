import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    businessName: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    website: v.optional(v.string()),
    leadId: v.optional(v.id("leads")),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("clients", {
      ...args,
      status: "active",
      createdAt: Date.now(),
    });
  },
});

export const active = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("clients")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .collect();
  },
});

export const hoursRemaining = query({
  args: { clientId: v.id("clients") },
  handler: async (ctx, args) => {
    const payments = await ctx.db
      .query("payments")
      .withIndex("by_client", (q) => q.eq("clientId", args.clientId))
      .filter((q) => q.eq(q.field("status"), "confirmed"))
      .collect();

    const totalPurchased = payments.reduce(
      (sum, p) => sum + p.hoursPurchased,
      0
    );

    const hoursLogged = await ctx.db
      .query("hours")
      .withIndex("by_client", (q) => q.eq("clientId", args.clientId))
      .collect();

    const totalUsed = hoursLogged.reduce((sum, h) => sum + h.hours, 0);

    return {
      purchased: totalPurchased,
      used: totalUsed,
      remaining: totalPurchased - totalUsed,
    };
  },
});
