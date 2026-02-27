import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
    businessName: v.optional(v.string()),
    phone: v.optional(v.string()),
    website: v.optional(v.string()),
    message: v.string(),
    source: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const leadId = await ctx.db.insert("leads", {
      ...args,
      status: "new",
      createdAt: Date.now(),
    });
    // TODO: schedule email notification via ctx.scheduler.runAfter
    // when Resend API key is available
    return leadId;
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("leads")
      .withIndex("by_created")
      .order("desc")
      .collect();
  },
});

export const updateStatus = mutation({
  args: {
    id: v.id("leads"),
    status: v.union(
      v.literal("new"),
      v.literal("reviewing"),
      v.literal("contacted"),
      v.literal("converted"),
      v.literal("declined")
    ),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    await ctx.db.patch(id, fields);
  },
});

export const getByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("leads")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .collect();
  },
});
