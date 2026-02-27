"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

const painPoints = [
  {
    title: "Flying Blind",
    illustration: "Illustration: disconnected screens, duct tape, shrug emoji",
    copy: "Your systems are held together with duct tape and spreadsheets. Your CRM doesn't talk to your invoicing. Your data lives in six different places. You're making important decisions based on gut feeling because getting the real numbers takes too long — or nobody knows where they are.",
  },
  {
    title: "Drowning in Busywork",
    illustration:
      "Illustration: person buried under papers, spinning clock, mundane tasks",
    copy: "You and your team spend hours every week on repetitive tasks that a good system could handle in seconds. Data entry, scheduling, follow-up emails, report generation, copying information from one place to another. It's not the hard work that's killing productivity — it's the busywork.",
  },
  {
    title: "Invisible Online",
    illustration:
      "Illustration: faded storefront, competitors bright and visible",
    copy: "Your website is outdated or nonexistent. Customers can't find you online. Your competitors are showing up in searches and you're not. You know you should be doing something with social media and content, but you don't have the time or know-how to make it work. Meanwhile, new tools can create professional content faster than ever.",
  },
  {
    title: "Every Business Is Different",
    illustration:
      "Illustration: person walking shop floor with clipboard, talking to workers",
    copy: "Your business isn't a template. Generic advice doesn't cut it. I come to your office, walk your floor, follow you through your day, and figure out specifically where technology can make the biggest difference for how YOUR business actually works. Not theory — hands-on, in-person, built around your reality.",
  },
];

export default function PainPoints() {
  return (
    <SectionWrapper id="pain-points" alternate>
      <ScrollFadeIn>
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-accent)] text-center mb-12">
          Sound familiar?
        </h2>
      </ScrollFadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {painPoints.map((point, i) => (
          <ScrollFadeIn key={point.title} delay={i * 100}>
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)] shadow-sm h-full">
              <ImagePlaceholder
                label={point.illustration}
                aspectRatio="aspect-video"
              />
              <h3 className="mt-6 text-xl font-bold text-[var(--color-accent)]">
                {point.title}
              </h3>
              <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
                {point.copy}
              </p>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
