"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";

const included = [
  "All work, research, and implementation",
  "Documentation of everything I build or set up",
  "Training for you and your team",
  "Follow-up support to make sure everything keeps working",
];

export default function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <ScrollFadeIn>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-6xl sm:text-7xl font-bold text-[var(--color-accent)]">
            $100
            <span className="text-2xl sm:text-3xl font-normal text-[var(--color-text-secondary)]">
              /hr
            </span>
          </div>

          <ul className="mt-8 space-y-3 text-[var(--color-text-secondary)] text-lg">
            <li>Consulting, implementation, training, and support</li>
            <li>4-hour minimum for new clients</li>
            <li>Available roughly 20 hours per week — availability is limited</li>
          </ul>

          <div className="mt-10 bg-[var(--color-surface-alt)] rounded-2xl p-8 text-left">
            <h3 className="font-bold text-[var(--color-text)]">
              What&apos;s always included:
            </h3>
            <ul className="mt-4 space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[var(--color-text-secondary)]"
                >
                  <span className="text-[var(--color-success)] font-bold flex-shrink-0">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-[var(--color-text-light)] italic">
            Project-based and fixed-price work also available on request.
          </p>
        </div>
      </ScrollFadeIn>
    </SectionWrapper>
  );
}
