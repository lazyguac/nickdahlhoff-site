import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const record = mutation({
  args: {
    clientId: v.id("clients"),
    amount: v.number(),
    hoursPurchased: v.number(),
    stripePaymentIntentId: v.optional(v.string()),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("failed")
    ),
    method: v.optional(v.union(v.literal("ach"), v.literal("card"))),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("payments", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

export const byClient = query({
  args: { clientId: v.id("clients") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("payments")
      .withIndex("by_client", (q) => q.eq("clientId", args.clientId))
      .collect();
  },
});
