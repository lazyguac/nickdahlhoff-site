import { query } from "./_generated/server";

export const summary = query({
  args: {},
  handler: async (ctx) => {
    const allLeads = await ctx.db.query("leads").collect();
    const leadsByStatus = allLeads.reduce(
      (acc, lead) => {
        acc[lead.status] = (acc[lead.status] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    const activeClients = await ctx.db
      .query("clients")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .collect();

    // Hours this week
    const now = new Date();
    const dayOfWeek = now.getDay();
    const monday = new Date(now);
    monday.setDate(now.getDate() - ((dayOfWeek + 6) % 7));
    monday.setHours(0, 0, 0, 0);
    const mondayStr = monday.toISOString().split("T")[0];

    const weekHours = await ctx.db
      .query("hours")
      .withIndex("by_date")
      .filter((q) => q.gte(q.field("date"), mondayStr))
      .collect();

    const hoursUsedThisWeek = weekHours.reduce((sum, h) => sum + h.hours, 0);

    // Total committed (paid, not yet worked) across all active clients
    let totalCommitted = 0;
    for (const client of activeClients) {
      const payments = await ctx.db
        .query("payments")
        .withIndex("by_client", (q) => q.eq("clientId", client._id))
        .filter((q) => q.eq(q.field("status"), "confirmed"))
        .collect();
      const purchased = payments.reduce((sum, p) => sum + p.hoursPurchased, 0);

      const hours = await ctx.db
        .query("hours")
        .withIndex("by_client", (q) => q.eq("clientId", client._id))
        .collect();
      const used = hours.reduce((sum, h) => sum + h.hours, 0);

      totalCommitted += purchased - used;
    }

    return {
      leads: leadsByStatus,
      totalLeads: allLeads.length,
      activeClients: activeClients.length,
      hoursUsedThisWeek,
      hoursAvailableThisWeek: 20 - hoursUsedThisWeek,
      hoursCommittedUnworked: totalCommitted,
    };
  },
});
