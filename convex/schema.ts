import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    businessName: v.optional(v.string()),
    phone: v.optional(v.string()),
    website: v.optional(v.string()),
    message: v.string(),
    source: v.optional(v.string()),
    status: v.union(
      v.literal("new"),
      v.literal("reviewing"),
      v.literal("contacted"),
      v.literal("converted"),
      v.literal("declined")
    ),
    notes: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_email", ["email"])
    .index("by_created", ["createdAt"]),

  clients: defineTable({
    name: v.string(),
    businessName: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    website: v.optional(v.string()),
    leadId: v.optional(v.id("leads")),
    status: v.union(
      v.literal("active"),
      v.literal("paused"),
      v.literal("completed")
    ),
    notes: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_email", ["email"]),

  hours: defineTable({
    clientId: v.id("clients"),
    date: v.string(),
    hours: v.number(),
    description: v.string(),
    createdAt: v.number(),
  })
    .index("by_client", ["clientId"])
    .index("by_date", ["date"]),

  payments: defineTable({
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
    createdAt: v.number(),
  })
    .index("by_client", ["clientId"])
    .index("by_status", ["status"]),
});
