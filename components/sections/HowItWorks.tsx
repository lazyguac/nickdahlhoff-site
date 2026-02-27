"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

const steps = [
  {
    number: 1,
    title: "Tell me what's going on",
    description:
      "Fill out a quick form describing your business and what you're dealing with. Or book a 30-minute call if you'd rather just talk it through. Either way, no commitment — just a conversation.",
  },
  {
    number: 2,
    title: "I put together a plan",
    description:
      "I'll review your situation, research your business, and come back with specific recommendations — what to fix, what to build, what to automate, and roughly what it'll take.",
  },
  {
    number: 3,
    title: "We get to work",
    description:
      "Most projects start with me spending time at your location — understanding your operations firsthand and building solutions alongside you. Some work happens remotely. You see results fast.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" alternate>
      <ScrollFadeIn>
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-accent)] text-center mb-16">
          Here&apos;s how it works
        </h2>
      </ScrollFadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
        {/* Connecting line on desktop */}
        <div className="hidden md:block absolute top-8 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-[2px] bg-[var(--color-border)]" />

        {steps.map((step, i) => (
          <ScrollFadeIn key={step.number} delay={i * 150}>
            <div className="text-center relative">
              <div className="mx-auto w-16 h-16 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-2xl font-bold relative z-10">
                {step.number}
              </div>
              <h3 className="mt-6 text-xl font-bold text-[var(--color-text)]">
                {step.title}
              </h3>
              <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
