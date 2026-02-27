"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

const credentials = [
  {
    number: "01",
    title: "AI Expert",
    description:
      "Deep experience using AI across a wide range of business applications — business systems, workflow automation, creative assets, content strategy, data analysis, software development, and more. I've been working at the frontier of what AI can do for businesses since before it was mainstream, and I apply it practically every day.",
  },
  {
    number: "02",
    title: "Experienced Business Builder",
    description:
      "I built a language learning website from nothing, grew it to over 100,000 monthly visitors with a team of six contributors, and sold it for $960K. I've run marketing, managed teams, negotiated deals, and handled operations. I understand business problems because I've had them.",
  },
  {
    number: "03",
    title: "I Show Up",
    description:
      "I'll come to your office, travel to your field location, and get into the details with your business. The best solutions come from seeing how things actually work on the ground — not guessing from a Zoom call.",
  },
  {
    number: "04",
    title: "One Person, Not an Agency",
    description:
      "You work directly with me. No account managers, no juniors, no handoffs. When you hire me, you get me.",
  },
  {
    number: "05",
    title: "Built to Last Without Me",
    description:
      "Everything I build is designed to work independently — you and your team can run it without me being there. I document everything, train your people, and make sure the systems keep running. And if something breaks or you want to expand later, I'm a phone call away.",
  },
];

export default function WhyMe() {
  return (
    <SectionWrapper id="why-me">
      <ScrollFadeIn>
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-accent)] text-center mb-12">
          Why work with me
        </h2>
      </ScrollFadeIn>

      <div className="max-w-3xl mx-auto">
        {credentials.map((cred, i) => (
          <ScrollFadeIn key={cred.number} delay={i * 80}>
            <div className="flex gap-6 items-start py-6 border-b border-[var(--color-border)] last:border-b-0">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)] text-sm font-bold">
                {cred.number}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  {cred.title}
                </h3>
                <p className="mt-2 text-[var(--color-text-secondary)] leading-relaxed">
                  {cred.description}
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>

      {/* Mini Portfolio */}
      <ScrollFadeIn delay={200}>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-3xl mx-auto">
          <ImagePlaceholder
            label="Portfolio collage coming soon"
            aspectRatio="aspect-video"
          />
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            I&apos;ve built and shipped products across education, health tech,
            fantasy sports, DeFi, and personal productivity — from full-stack web
            apps to AI-powered content platforms to automated knowledge
            management systems.
          </p>
        </div>
      </ScrollFadeIn>
    </SectionWrapper>
  );
}
